const Discord = require('discord.js');
const superagent = require("snekfetch");

module.exports.run = async (bot, message, args) => {
  
  if(args[0] == "help"){
        message.reply("❓ Example: `.slap <@user>");
        return;
  };
  let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!hugUser) return message.channel.send("😒 You can't slap me!")
  const { body } = await superagent
  .get(`https://nekos.life/api/v2/img/slap`);

  let hugEmbed = new Discord.RichEmbed()
  .setTitle(`**Ouch! 🤕**`)
  .setDescription(`${message.author} slapped ${message.mentions.users.first()}!`)
  .setImage(body.url)
  .setColor("RANDOM")
  .setFooter("Version: 1.2", bot.user.displayAvatarURL)
  .setTimestamp();
  message.channel.send(hugEmbed)

}
module.exports.help = {
    name: "slap",
    aliases: []
}
    
