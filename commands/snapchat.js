const randomnsfw = require('random-puppy');
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
 
	   if (!message.channel.nsfw) return message.channel.send(":underage: **Tento příkaz je povolen jen v NSFW kanálu, prosím přesun se na jiný kanál!")			  
	         let nsfwreddits = [
        'NSFW_Snapchat',
               'snapchatgw'
   
    ]
    let api = nsfwreddits[Math.round(Math.random() * (nsfwreddits.length - 1))];
      randomnsfw(api).then(api => {
           const theirembed = new Discord.RichEmbed()
            .setAuthor("Snapchat")
            .setColor("RANDOM")
            .setImage(api)
            .setFooter("Version: 1.2")
            .setTimestamp();
      message.channel.send(theirembed);
      })
}
module.exports.help = {
    name: "snapchat",
    aliases: []
}
