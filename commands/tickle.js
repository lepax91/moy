const discord = require('discord.js');
const superagent = require('superagent')

module.exports.run = async (bot, message, args) => {


  let tickleUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tickleUser) return message.channel.send("🤔 Do you try tickle me, oh sorry but no.").catch(err => console.log(err));
  const { body } = await superagent
  .get(`https://nekos.life/api/v2/img/tickle`);

  let pokeEmbed = new Discord.RichEmbed()
  .setTitle(`**Tickle Tickle!** 🤣`)
  .setDescription(`${message.author} tickled ${message.mentions.users.first()}!`)
  .setImage(body.url)
  .setColor("RANDOM")
  .setFooter("Version: 1.2", bot.user.displayAvatarURL)
  .setTimestamp();
  message.channel.send(pokeEmbed)

}
module.exports.help = {
    name: "tickle",
    aliases: []
}
