//Select the Store based on the Node enviornment
if(process.env.NODE_ENV == 'production') {
  module.exports = require('./configureStore.prod');
}
else {
  module.exports = require('./configureStore.dev');
}
