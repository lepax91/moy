const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
          let player = message.mentions.members.first() || message.member
	   let user = player.user
if(!user) return message.channel.send("You haven't selected/mentioned a user whose avatar you want to see."); 
    let avatarEmbed = new Discord.RichEmbed()
    .setAuthor(`${user.tag}`, `${user.displayAvatarURL}`)
    .setTitle("**Klikni zde pokud se avatar nenačítá!**")
    .setURL(user.displayAvatarURL)
    .setImage(user.displayAvatarURL)
    .setColor("#b70000");
    return message.channel.send(avatarEmbed);
     }
module.exports.help = {
    name: "avatar",	
    aliases: []
		
}
