const processor = require('./cy-ts-preprocessor');

module.exports = on => {
  on('file:preprocessor', processor);
};
