const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
  

module.exports.run = async (bot, message, args) => {

   let botmessage = args.join(" ");
   
   var embed = new Discord.RichEmbed()
   .setDescription(botmessage)
   .setColor("RANDOM")
   .setTimestamp();
   message.channel.send(embed)
}

module.exports.help = {
    name: "annoucement",
    aliases: []
