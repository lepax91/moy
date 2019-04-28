exports.run = (client, message, args, Discord) => {

  const member = message.mentions.users.first() || message.author;
  let money = client.db.get(`money_${member.id}-${message.guild.id}`)
  let bio = client.db.get(`bio_${member.id}`)
    
  if(money === null) money = 0
  if(bio === null) bio = '**Nebylo zaznamenáno**'
  
  const embed = client.embed
  embed.setColor("RANDOM")
  embed.setTitle(`👤 Profil: ${member.tag}`)
  embed.addField("🌎 Bio: ", bio)
  embed.addField("💸 Peníze: ", money + '$')
  embed.setFooter("</> v2.5a")
  embed.setTimestamp()
  
  message.channel.send(embed)
};
exports.help = {
    name: "profile",
    aliases: []
}
