const randomnsfw = require('random-puppy');
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
 if (!message.channel.nsfw) return message.channel.send(":underage: **_Tento příkaz je povolen jen kde je označen NSFW kanál!_**")	
	         let nsfwreddits = [
        'fortnite34',
        'FortnitePorn'
    ]
    let api = nsfwreddits[Math.round(Math.random() * (nsfwreddits.length - 1))];
      randomnsfw(api).then(api => {
           var theirembed = new Discord.RichEmbed()
            .setTitle("Transgalaticky Daleko")
            .setColor("RANDOM")
            .setImage(api)
            .setFooter("Mňamka dopíči")		
            .setTimestamp();
      message.channel.send(theirembed);
      })
}
module.exports.help = {
    name: "fortnite",
    aliases: []
}
