exports.run = (client, message, args, Discord) => {

  const member = message.mentions.users.first() || message.author;
  let money = client.db.get(`money_${member.id}-${message.guild.id}`)
  let bio = client.db.get(`bio_${member.id}`)
  let verified = client.db.get(`verify_${member.id}`)
  
  if(money === null) money = 0
  if(bio === null) bio = 'No bio set'
  if(verified === null) verified = ':x:'
  
  const embed = new Discord.RichEmbed()
  .setColor(client.color.MAIN)
  .setTitle(`Profile of ${member.tag}`)
  .addField("Username:", member.username)
  .addField("Verified", verified)
  .addField("Money: ", money + '$')
  .addField("Bio: ", bio)
  .setFooter("ID: " + member.id)
  
  message.channel.send(embed)
};
exports.help = {
    name: "profile",
    aliases: []
}
