const Discord = require('discord.js');
const superagent = require("snekfetch");

module.exports.run = async (bot, message, args) => {
  
  if(args[0] == "help"){
        message.reply("❓ Example: `.tickle <@user>");
        return;
  };
  let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!hugUser) return message.channel.send("😒 Do you try tickle me? Sorry but no..")
  const { body } = await superagent
  .get(`https://nekos.life/api/v2/img/tickle`);

  let hugEmbed = new Discord.RichEmbed()
  .setTitle(`**Tickle Tickle! 🤣**`)
  .setDescription(`${message.author} tickled ${message.mentions.users.first()}!`)
  .setImage(body.url)
  .setColor("RANDOM")
  .setFooter("Version: 1.2", bot.user.displayAvatarURL)
  .setTimestamp();
  message.channel.send(hugEmbed)

}
module.exports.help = {
    name: "tickle",
    aliases: []
}    
