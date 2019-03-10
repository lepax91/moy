const randomnsfw = require('random-puppy');
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
 if (!message.channel.nsfw)
  var ozelmesajuyari = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(':underage: **_Tento příkaz je povolen jen kde je označen NSFW kanál!_**')
  .setImage('https://cdn.discordapp.com/attachments/542778827051499564/554356353641086977/20190310_183407.png')
  return message.channel.send(ozelmesajuyari)  	
	         let nsfwreddits = [
        'traps',
               'traphentai',
               'DeliciousTraps'
   
    ]
    let api = nsfwreddits[Math.round(Math.random() * (nsfwreddits.length - 1))];
      randomnsfw(api).then(api => {
           var theirembed = new Discord.RichEmbed()
            .setTitle("Traps")
            .setColor("RANDOM")
            .setImage(api)
            .setFooter("Version: 1.2")
            .setTimestamp();
      message.channel.send(theirembed);
      })
}
module.exports.help = {
    name: "traps",
    aliases: []
}
