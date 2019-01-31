const Discord = require("discord.js");
  
module.exports.run = async (bot, message, args) => {
 
   let player = message.mentions.members.first() || message.member
	   let user = player.user
if(!user) return message.channel.send("Nikdo není označen, prosím označ někoho. 🤔")	      
    let avatarEmbed = new Discord.RichEmbed()
    .setAuthor(`${user.tag}`, ``)
    .setColor("RANDOM")
    return message.channel.send(avatarEmbed);
     }
!
module.exports.help = {
    name: "avatar",
    aliases: ['']
}
