const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   let aUser = message.author.username
   let reason = message.content.split(' ').slice(1);
   let reason1 = reason.join(" ");
   if(!reason) return message.reply("Kámo, na to že si mě naprogramoval tak seš úplnej kokot  :-)")
   if (message.author.id != 417403958814965771) return message.reply("Nejsi v Dot Development Project.")

   var embed = new Discord.RichEmbed()
   .setAuthor("Dot Development Project - Announcements", message.author.avatarURL)
   .setDescription( reason1 )
   .setColor("RANDOM")
   let Achannel = message.guild.channels.find(`name`, "dot-updates");
   Achannel.send(embed)
}

module.exports.help = {
    name: "text",
    aliases: []
}
