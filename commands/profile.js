const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  const member = message.mentions.users.first() || message.author;
  if(member.user.client) return message.reply(':x: **Omlouvám se, ale boti nemohou mít Profile.**');


  let bio = client.db.get(`bio_${member.id}`)
  let age = client.db.get(`age_${member.id}`)
  let job = client.db.get(`job_${member.id}`)
  
  if(bio === null) bio = 'Nebylo zaznamenáno'
  if(age === null) age = 'Nebylo zaznamenáno'
  if(job === null) job = 'Nebylo zaznamenáno'
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`Profil: ${member.tag}`)
  .addField("🌎 Bio ", bio)
  .addField("🎂 Věk ", age)
  .addField("👮 Povolání ", job)
  .setFooter("</> Ačkoliv to hostuju přes Heroku, tak se všechno zresetuje.")
  message.channel.send(embed)
}
exports.help = {
    name: "profile",
    aliases: []
}
