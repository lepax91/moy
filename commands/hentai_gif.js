const Discord = require('discord.js');
const superagent = require("snekfetch");


module.exports.run = async (bot, message, args) => {

      if (!message.channel.nsfw) 
      return message.reply("Jseš si jistý, že si ve správném kanálu? 🤔");
    superagent.get('https://nekos.life/api/v2/img/Random_hentai_gif')
        .end((err, response) => {
            const lewdembed = new Discord.RichEmbed()
                .setImage(response.body.url)
                .setColor("#FFFFFF")
                .setFooter("Kuchař Pepe 👌", bot.user.displayAvatarURL)
                .setTimestamp();
            message.channel.send(lewdembed);
        })
}

module.exports.help = {
           name: 'hentaigif,
           aliases: ['hg']
}    
