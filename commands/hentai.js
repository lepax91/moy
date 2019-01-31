const discord = require('discord.js');

exports.run = (client, msg, args) => {
  if (msg.channel.nsfw === true) {
    superagent.get('https://nekobot.xyz/api/image')
    .query({ type: 'hentai'})
    .end((err, response) => {
      msg.channel.send({ file: response.body.message });
    });
  } else {
    return message.reply("Jseš si jistý, že si ve správném kanálu? 🤔");
  }
};
module.exports.help = {
           name: 'hentai', 
           aliases: ['h']
} 
