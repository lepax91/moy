const Discord = require('discord.js');
const superagent = require("snekfetch");

module.exports.run = async (bot, message, args) => {
  
  if(args[0] == "help"){
        message.reply("❓ Example: `.hug <@user>");
        return;
  };
  let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!hugUser) return message.channel.send(":x: | Wait.. You can't hug me why? I don't know.. 😂👌")
  const { body } = await superagent
  .get(`https://nekos.life/api/v2/img/hug`);

  let hugEmbed = new Discord.RichEmbed()
  .setTitle(`**Hugs?**`)
  .setDescription(`${message.author} hugged ${message.mentions.users.first()}!`)
  .setImage(body.url)
  .setColor("RANDOM")
  .setFooter("Version: 1.2", bot.user.displayAvatarURL)
  .setTimestamp();
  message.channel.send(hugEmbed)

}
module.exports.help = {
    name: "hug",
    aliases: []
}
