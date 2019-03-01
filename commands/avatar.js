const Discord = require("discord.js");
const PREFIX = "."

// This is the brackets in which the command goes in
module.exports.run = async (bot, message, args) => {
    if(!message.content.startsWith(PREFIX)) return;

    if(args[0] == "help"){
        message.reply("❓ Například: .avatar <@user/bot>");
        return;
    };
    let msg = await message.channel.send("⏰ | Počkej chvíli...");
    let target = message.mentions.users.first() || message.author;

        message.channel.send({embed: {
        color: "RANDOM",
        image: {
            url: (target.displayAvatarURL)
          },
        timestamp: new Date(),
        footer: {
          icon_url: bot.user.displayAvatarURL ,
          text: "Dot | Version: 1.2",
        },
        author: { 
            icon_url: message.guild.iconURL,
            name: "Tady je nějaká ta profilovka",
          }
        }});

        msg.delete();
}
module.exports.help = {
    name: "avatar",	
    aliases: []
		
}
