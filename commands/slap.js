const discord = require('discord.js');
const superagent = require('superagent')

module.exports.run = (client, msg, args) => {

  let slapUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!slapUser) return message.channel.send("😡 Ok, I'm angry once more, and I'm gonna give you a slap!")
  const { body } = await superagent
  .get(`https://nekos.life/api/v2/img/slap`);

  let slapEmbed = new Discord.RichEmbed()
  .setTitle(`**Wack! 🖐**`)
  .setDescription(`${message.author} slapped ${message.mentions.users.first()}!`)
  .setImage(body.url)
  .setColor("RANDOM")
  .setFooter("Version: 1.2", client.user.displayAvatarURL)
  .setTimestamp();
  message.channel.send(slapEmbed)

}
module.exports.help = {
           name: 'slap', 
           aliases: []
} 
