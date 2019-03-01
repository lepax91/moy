const Discord = require('discord.js');
const superagent = require("snekfetch");

module.exports.run = async (bot, message, args) => {
  
  if(args[0] == "help"){
        message.reply("❓ Například: `.tickle <@user>`");
        return;
  };
  let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!hugUser) return message.channel.send("**❕ |  Prvně musíš do jakéhokoliv kanálu napsat: `.tickle help`!**")
  const { body } = await superagent
  .get(`https://nekos.life/api/v2/img/tickle`);

  let hugEmbed = new Discord.RichEmbed()
  .setTitle(`**Lehtání 🤣**`)
  .setDescription(`${message.author} lechtal ${message.mentions.users.first()}!`)
  .setImage(body.url)
  .setColor("RANDOM")
  .setFooter("Verze: 1.2", bot.user.displayAvatarURL)
  .setTimestamp();
  message.channel.send(hugEmbed)

}
module.exports.help = {
    name: "tickle",
    aliases: []
}    
