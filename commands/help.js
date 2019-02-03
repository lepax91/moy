const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   var embed = new Discord.RichEmbed()
   .setAuthor("pepe a jeho kuchařka", bot.user.displayAvatarURL)
   .setColor("GREEN")
   .setTimestamp()
   .addField("🤔 Main:", "help, ping")
   .addField("😂 Funny:", "meme, 8ball")
   .addField("🐶 Animals:", "dog, cat, bunny")
   .addField("🔞 NSFW:", "ass, pussy, hentai")
   .addField("⚒️ Moderation:", "poll, giveaway")
   .addField("🖊️ Text:", "emojify, achievement")
   .setFooter(message.author.username + "");
   
   message.channel.send(embed)
}

module.exports.help = {
    name: "help",
    aliases: ['halp']
}
