const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  if (args == 0) return message.channel.send('**_Chybí mi tu nějaká otázka 🤔_**')

  if (args[0] === '') {
        let embed = new Discord.RichEmbed()
        .setTitle("🤔 Nevíš jak používat tento příkaz? Tento Help System ti to rád vysvětlí!")
        .setDescription("👤 Pokud chceš udělat jakýsi hlasování, tak udělej pouze toto: `.poll [Otázka, a oni budou reagovat 👍 a 👎]`")
        .setColor("GREEN")
        .setFooter("⚠️ Pokud je nějaká chyba, kontaktujte Hlavního Vývojáře nebo Administraci.")
        .setTimestamp();
        message.channel.send(embed)
  
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
