const randomnsfw = require('random-puppy');
const Discord = require("discord.js");


module.exports.run = async (bot, message, args) => {
 
	   if (!message.channel.nsfw) return message.channel.send(":underage: NSFW Command. Please switch to NSFW channel in order to use this command.")			  
	         let nsfwreddits = [
        'yiff',
			 'femyiff',
        'furrybooty',
        'gfur',			 
   
    ]
    let api = nsfwreddits[Math.round(Math.random() * (nsfwreddits.length - 1))];
      randomnsfw(api).then(api => {
           const theirembed = new Discord.RichEmbed()
            .setAuthor("Furry")
            .setColor("RANDOM")
            .setImage(api)
            .setFooter("Furry to já moc rád 💕")
            .setTimestamp();
      message.channel.send(theirembed);
      })
}
module.exports.help = {
    name: "furry",
    aliases: []
}
