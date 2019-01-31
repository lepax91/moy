const discord = require('discord.js');
const superagent = require('superagent')

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'hentai'})
    .end((err, response) => {
      return message.reply("Jseš si jistý, že si ve správném kanálu? 🤔");
    });
  } else {
    msg.channel.send("This isn't NSFW channel!")
  }
};
module.exports.help = {
           name: 'hentai', 
           aliases: ['h']
} 
