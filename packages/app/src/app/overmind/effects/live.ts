import uuid from 'uuid';
import { camelizeKeys } from 'humps';

const identifier = uuid.v4();
let messageIndex = 0;
const sentMessages = new Map();
let channel = null;

export default {
  disconnect() {
    return new Promise((resolve, reject) => {
      channel
        .leave()
        .receive('ok', resp => {
          channel.onMessage = d => d;
          channel = null;
          sentMessages.clear();
          messageIndex = 0;

          return resolve(resp);
        })
        .receive('error', resp => reject(resp));
    });
  },
  joinChannel<T>(roomId: string): Promise<T> {
    const { socket } = this.context;

    channel = socket.getSocket().channel(`live:${roomId}`, {});

    return new Promise((resolve, reject) => {
      channel
        .join()
        .receive('ok', resp => resolve(camelizeKeys(resp) as T))
        .receive('error', resp => reject(camelizeKeys(resp)));
    });
  },
  // TODO: Need to take an action here
  listen(signalPath) {
    const signal = this.context.controller.getSignal(signalPath);
    channel.onMessage = (event: any, data: any) => {
      const disconnected = data == null && event === 'phx_error';
      const alteredEvent = disconnected ? 'connection-loss' : event;

      const _isOwnMessage = Boolean(
        data && data._messageId && sentMessages.delete(data._messageId)
      );

      signal({
        event: alteredEvent,
        _isOwnMessage,
        data: data == null ? {} : data,
      });

      return data;
    };
  },
  send(event: string, payload: { _messageId?: string }) {
    const _messageId = identifier + messageIndex++;
    // eslint-disable-next-line
    payload._messageId = _messageId;
    sentMessages.set(_messageId, payload);

    return new Promise((resolve, reject) => {
      if (channel) {
        channel
          .push(event, payload)
          .receive('ok', resolve)
          .receive('error', reject);
      } else {
        reject('Channel is not defined');
      }
    });
  },
};
