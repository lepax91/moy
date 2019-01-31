const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   var embed = new Discord.RichEmbed()
   .setAuthor("pepe a jeho recept", message.author.avatarURL)
   .setColor("GREEN")
   .setTimestamp()
   .addField("všechny příkazy nsfw 😏", "ass, thigh, bbw, dick, pussy, hentai")
   .addField("všechny funny příkazy 😂👌", "meme")
   .setFooter(message.author.username + " Požadováno.");
   
   message.channel.send(embed)
}

module.exports.help = {
    name: "help",
    aliases: ['halp']
}
