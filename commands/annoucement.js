const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
  

   let botmessage = args.join(" ");
   if (!botmessage) const em = new Discord.RichEmbed() .setTitle("Musíte zadat nějaké slovo či větu, bez tohoto tato akce nepůjde.") .setColor("RED") return message.channel.send(em)    
  
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
