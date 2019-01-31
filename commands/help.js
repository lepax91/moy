const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   var embed = new Discord.RichEmbed()
   .setAuthor("pepe a jeho kuchařka", bot.user.displayAvatarURL)
   .setColor("GREEN")
   .setTimestamp()
   .addField("všechny main příkazy 💬", "help, ping")
   .addField("všechny funny příkazy 😂👌", "meme, animemes")
   .addField("všechny animals příkazy 🐈", "dog, cat, redpanda")
   .addField("všechny příkazy nsfw 😏", "ass, thigh, bbw, dick, pussy, hentai")
   .setFooter(message.author.username + "");
   
   message.channel.send(embed)
}

module.exports.help = {
    name: "help",
    aliases: ['halp']
}
