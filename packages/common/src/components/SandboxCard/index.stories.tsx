import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Props } from './';
import * as Fixtures from './fixtures';
import { ThemeDecorator } from '../../stories/decorators';

const stories = storiesOf('components/SandboxCard', module).addDecorator(
  ThemeDecorator
);

const defaultProps: Partial<Props> = {
  selectSandbox: action('selectSandbox'),
};

stories.add('basic', () => <Fixtures.Basic {...defaultProps} />);

stories.add('small', () => <Fixtures.Small {...defaultProps} />);

stories.add('no height', () => <Fixtures.NoHeight {...defaultProps} />);

stories.add('default height', () => (
  <Fixtures.DefaultHeight {...defaultProps} />
));

stories.add('no margin', () => <Fixtures.NoMargin {...defaultProps} />);

stories.add('popular', () => <Fixtures.Popular {...defaultProps} />);

stories.add('many tags', () => <Fixtures.ManyTags {...defaultProps} />);

stories.add('long title', () => <Fixtures.LongTitle {...defaultProps} />);

stories.add('long description', () => (
  <Fixtures.LongDescription {...defaultProps} />
));

stories.add('null author', () => <Fixtures.NullAuthor {...defaultProps} />);

stories.add('undefined author', () => (
  <Fixtures.UndefinedAuthor {...defaultProps} />
));

stories.add('null screenshot url', () => (
  <Fixtures.NullScreenshotUrl {...defaultProps} />
));

stories.add('undefined screenshot url', () => (
  <Fixtures.UndefinedScreenshotUrl {...defaultProps} />
));
