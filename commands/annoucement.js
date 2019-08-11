const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
  

   let botmessage = args.join(" ");
   const em = new Discord.RichEmbed()
    .setTitle("Musíte zadat nějakou větu, slovo tento příkaz bez slova, věty nepůjde.")
    .setColor("RED")
    return message.channel.send(em)    
  
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
