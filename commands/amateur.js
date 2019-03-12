const randomnsfw = require('random-puppy');
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
 if (!message.channel.nsfw) return message.channel.send(":underage: **_Tento příkaz je povolen jen kde je označen NSFW kanál!_**")
     let nsfwreddits = [
        'RealGirls',
        'amateur',
        'gonewild'
    
    ]
    let api = nsfwreddits[Math.round(Math.random() * (nsfwreddits.length - 1))];
      randomnsfw(api).then(api => {
           const theirembed = new Discord.RichEmbed()
            .setTitle("Amateur")
            .setColor("RANDOM")
            .setImage(api)
            .setFooter("Požadováno od: ${message.author.tag} | Verze: 1.5`)		
            .setTimestamp();
      message.channel.send(theirembed);
      })
}
module.exports.help = {
    name: "amateur",
    aliases: []
} 
