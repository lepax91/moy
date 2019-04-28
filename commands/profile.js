exports.run = (client, message, args, Discord) => {

  const member = message.mentions.users.first() || message.author;
  let money = client.db.get(`money_${member.id}-${message.guild.id}`)
  let bio = client.db.get(`bio_${member.id}`)
  
  if(money === null) money = 0
  if(bio === null) bio = 'No bio set'
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`Profile of ${member.tag}`)
  .addField("Money: ", money + '$')
  .addField("Bio: ", bio)
  .setFooter("</> v2.5a")
  
  message.channel.send(embed)
};
exports.help = {
    name: "profile",
    aliases: []
}
