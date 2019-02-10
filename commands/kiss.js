const discord = require('discord.js');
const superagent = require('superagent')

module.exports.run = async (bot, message, args, func) => {

let kissUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kissUser) return message.channel.send("😒 Hold on! You can't kiss me! **I will blush... 😳**")
  const { body } = await superagent
  .get(`https://nekos.life/api/v2/img/kiss`);

  let kissEmbed = new Discord.RichEmbed()
  .setTitle(`**Mwah! 😘**`)
  .setDescription(`${message.author} kissed ${message.mentions.users.first()}!`)
  .setImage(body.url)
  .setColor("RANDOM")
  .setFooter("Version: 1.2", bot.user.displayAvatarURL)
  .setTimestamp();
  message.channel.send(kissEmbed);

}
module.exports.help = {
    name: "kiss",
    aliases: []
}
