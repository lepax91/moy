exports.run = (client, message, args, Discord) => {

  const member = message.mentions.users.first() || message.author;
  let money = client.db.get(`money_${member.id}-${message.guild.id}`)
  let bio = client.db.get(`bio_${member.id}`)
  let age = client.db.get(`age_${member.id}`)
  
  if(money === null) money = 0
  if(bio === null) bio = 'Nebylo zaznamenáno'
  if(age === null) age = 'Nebylo zaznamenáno'

  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`👤 Profil: ${member.tag}`)
  .addField("🌎 Bio: ", bio)
  .addField("🎂 Věk; ", age)
  .addField("💸 Peníze: ", money + '$')
  .setFooter("</> v2.5a")
  
  message.channel.send(embed)
};
exports.help = {
    name: "profile",
    aliases: []
}
