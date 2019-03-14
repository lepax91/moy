const Discord = require('discord.js');
const superagent = require("snekfetch");

module.exports.run = async (bot, message, args) => {
  
  if(args[0] == "help"){
        message.reply("❓ Například: `.kiss <@user>`");
        return;
  };
  let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!hugUser) return message.channel.send("**❕ | Prvně musíš napsat do jakéhokoliv kanálu: `.kiss help`!**")
  const { body } = await superagent
  .get(`https://nekos.life/api/v2/img/kiss`);

  let hugEmbed = new Discord.RichEmbed()
  .setTitle(`**Mwah! 😘**`)
  .setDescription(`${message.author} dal pusu ${message.mentions.users.first()}!`)
  .setImage(body.url)
  .setColor("RANDOM")
  .setFooter("Verze: 1.5", bot.user.displayAvatarURL)
  .setTimestamp();
  message.channel.send(hugEmbed)

}
module.exports.help = {
    name: "kiss",
    aliases: []
}
