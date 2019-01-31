const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   var embed = new Discord.RichEmbed()
   .setAuthor("pepe a jeho kuchařka", message.author.avatarURL)
   .setDescription("tento skvělý bot, byl vytvořen uživatelem <@417403958814965771>, 
   .setColor("GREEN")
   .setTimestamp()
   .addField("všechny main příkazy 💬", "help")
   .addField("všechny příkazy nsfw 😏", "ass, thigh, bbw, dick, pussy, hentai")
   .addField("všechny funny příkazy 😂👌", "meme")
   .setFooter(message.author.username + "");
   
   message.channel.send(embed)
}

module.exports.help = {
    name: "help",
    aliases: ['halp']
}
