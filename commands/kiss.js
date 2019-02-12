const Discord = require('discord.js');
const superagent = require("snekfetch");
s 
module.exports.run = async (bot, message, args) => {
  
  if(args[0] == "help"){
        message.reply("❓ Example: `.kiss <@user>`");
        return;
  
  let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!hugUser) return message.channel.send("**❕ | First u need type on any channel command: `.kiss help`!**")
  const { body } = await superagent
  .get(`https://nekos.life/api/v2/img/kiss`);

  let hugEmbed = new Discord.RichEmbed()
  .setTitle(`**Mwah! 😘**`)
  .setDescription(`${message.author} kissed ${message.mentions.users.first()}!`)
  .setImage(body.url)
  .setColor("RANDOM")
  .setFooter("Version: 1.2", bot.user.displayAvatarURL)
  .setTimestamp();
  message.channel.send(hugEmbed)

}
module.exports.help = {
    name: "kiss",
    aliases: []
}
