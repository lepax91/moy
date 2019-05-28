const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  
  if (args == 0) return message.channel.send(':warning: Do tohoto hlasování musíš přidat otázku, jinak se hlasování nepodaří.')    
    
  let embed = new Discord.RichEmbed()    
    .setTitle("Poll")
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(`Vytvořil(a): ${message.author.username}`)  
    .setDescription(`${args}`.split(',').join(' '));    

  return message.channel.send(embed)
    .then(function (message, str) {
       message.react("👍")
       message.react("👎")
     }).catch(function() {
  });    
}
exports.help = {
    name: "poll",
    aliases: []
} 
