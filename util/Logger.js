const dateformat = require('dateformat')
const util = require('util')

module.exports.info = (client, ...msg) => {
	client.rollbar.log(dateformat(Date.now(), 'mm/dd/yyyy hh:MM:ss TT') + ' | ' + msg.map((v) => typeof v === 'string' ? v : util.inspect(v)).join(' '))
}

module.exports.warn = (client, ...msg) => {
	client.rollbar.warning(dateformat(Date.now(), 'mm/dd/yyyy hh:MM:ss TT') + ' | ' + msg.map((v) => typeof v === 'string' ? v : util.inspect(v)).join(' '))
}

module.exports.error = (client, ...msg) => {
	client.rollbar.error(dateformat(Date.now(), 'mm/dd/yyyy hh:MM:ss TT') + ' | ' + msg.map((v) => typeof v === 'string' ? v : util.inspect(v)).join(' '))
}
