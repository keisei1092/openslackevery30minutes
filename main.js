var schedule = require('node-schedule');
var env      = require('./env');
var spawn    = require('child_process').spawn;

var j = schedule.scheduleJob('0 0,30 * * * *', function() {
  spawn('open', env.SLACK_URLS());
});
