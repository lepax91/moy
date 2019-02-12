const Discord = require("discord.js");
const PREFIX = "."

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(PREFIX)) return;

    if(args[0] == "help"){
        message.reply("Just like this:  `.avatar <@user/bot>`");
        return;
    };  
    let target = message.mentions.users.first() || message.author;

        message.channel.send({embed: {
        color: 1339135,
        image: {
            url: (target.displayAvatarURL)
          },
        timestamp: new Date(),
        footer: {
          icon_url: bot.user.displayAvatarURL ,
          text: "Version: 1.2",
        },
        author: {
            icon_url: message.guild.iconURL,
            name: `${usernameUser.tag}'s avatar`,
          }
        }});

        msg.delete();
}
module.exports.help = {
    name: "avatar",
    aliases: [], 
    description: "Displays avatar."
	
}
