const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  const member = message.mentions.users.first() || message.author;

  let bio = client.db.get(`bio_${member.id}`)
  let age = client.db.get(`age_${member.id}`)
  let gay = client.db.get(`gay_${member.id}`)
  
  if(bio === null) bio = 'Nebylo zaznamenáno'
  if(age === null) age = 'Nebylo zaznamenáno'
  if(gay === null) gay = 'Zatím ne 🏳️‍🌈'
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`Profil: ${member.tag}`)
  .addField("🌎 Bio ", bio)
  .addField("🎂 Věk ", age)
  .addField("🏳️‍🌈 Gay ", gay)
  .setFooter("</> Za 24 hodin, se všechno zrestuje.")
  message.channel.send(embed)
}
exports.help = {
    name: "profile",
    aliases: []
}
