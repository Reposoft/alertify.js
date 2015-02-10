
require('!style!css!./themes/alertify.css');
require('!style!css!./themes/alertify.default.css');
require('./dist/alertify');

// With no changes to the original source we must export from the global object
module.exports = window.Alertify;
