const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   var embed = new Discord.RichEmbed()
   .setAuthor("pepe a jeho kuchařka", bot.user.displayAvatarURL)
   .setColor("GREEN")
   .setTimestamp()
   .addField("všechny main příkazy 💬", "help, ping")
   .addField("všechny funny příkazy 😂👌", "meme, 8ball")
   .addField("všechny animals příkazy 🐈", "dog, cat, redpanda, panda")
   .addField("všechny nsfw příkazy 😏", "ass, thigh, bbw, hgif, feet, dick, pussy")
   .addField("všechny moderační příkazy ⚒️", "poll, giveaway")
   .addField("všechny text příkazy 🖊️", "emojify, achievement")
   .setFooter(message.author.username + "");
   
   message.channel.send(embed)
}

module.exports.help = {
    name: "help",
    aliases: ['halp']
}
