const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   var embed = new Discord.RichEmbed()
   .setAuthor("pepe a jeho kuchařka", message.author.avatarURL)
   .setColor("GREEN")
   .setTimestamp()
   .addField("všechny main příkazy 💬", "help")
   .addField("všechny funny příkazy 😂👌", "meme, cat")
   .addField("všechny příkazy nsfw 😏", "ass, thigh, bbw, dick, pussy, hentai")
   .setFooter(message.author.username + "");
   
   message.channel.send(embed)
}

module.exports.help = {
    name: "help",
    aliases: ['halp']
}
