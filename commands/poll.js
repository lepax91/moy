const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (args == 0) return message.channel.send('**_Chybí mi tu nějaká otázka 🤔_**')

  let embed = new Discord.RichEmbed()
    .setTitle(`Hlasovaní vytvořil: ${message.author.username}`)
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
