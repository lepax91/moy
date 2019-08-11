const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
  

   let botmessage = args.join(" ");
   if (!botmessage) return message.channel.send(">>> Musíte zadat nějaké slovo, bez slova akce **Annoucement** nepůjde.");
  
   var embed = new Discord.RichEmbed()
   .setDescription(botmessage)
   .setColor("RANDOM")
   .setTimestamp();
   message.channel.send(embed)
}

module.exports.help = {
    name: "annoucement",
    aliases: []
}
