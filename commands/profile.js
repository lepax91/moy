const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  const member = message.mentions.users.first() || message.author;

  let bio = client.db.get(`bio_${member.id}`)
  let age = client.db.get(`age_${member.id}`)
  let job = client.db.get(`job_${member.id}`)
  let sex = client.db.get(`sex_${member.id}`)
  
  if(bio === null) bio = 'Nebylo zaznamenáno'
  if(age === null) age = 'Nebylo zaznamenáno'
  if(job === null) job = 'Nebylo zaznamenáno'
  if(sex === null) sex = 'Nebylo zaznamenáno'
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`Profil: ${member.tag}`)
  .addField("🌎 Bio ", bio)
  .addField("🎂 Věk ", age)
  .addField("♂️ Pohlaví", sex)
  .addField("👮 Povolání ", job)
  .setFooter("</> v1.5a | Dot Development Project")
  message.channel.send(embed)
}
exports.help = {
    name: "profile",
    aliases: []
}
