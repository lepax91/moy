const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://boob.bot/api/v1/nsfw')
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    msg.channel.send("Jseš si jistý, že toto je správný kanál? 🤔")
  }
};
module.exports.help = {
    name: "nsfw",
    aliases: []
}
