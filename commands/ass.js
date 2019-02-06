const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'ass'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send("🔞 | On this channel is not allowed NSFW content!")
  }
};
module.exports.help = {
    name: "ass",
    aliases: []
}
