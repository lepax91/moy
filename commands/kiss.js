const Discord = require('discord.js');
27
const superagent = require("snekfetch");
28
​
29
module.exports.run = async (bot, message, args) => {
30
​
31
  let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
32
  if(!hugUser) return message.channel.send("😒 You can't kiss me! **I will blush... 😳**")
33
  const { body } = await superagent
34
  .get(`https://nekos.life/api/v2/img/kiss`);
35
​
36
  let hugEmbed = new Discord.RichEmbed()
37
  .setTitle(`**Mwah! 😘**`)
38
  .setDescription(`${message.author} kissed ${message.mentions.users.first()}!`)
39
  .setImage(body.url)
40
  .setColor("RANDOM")
41
  .setFooter("Version: 1.2", bot.user.displayAvatarURL)
42
  .setTimestamp();
43
  message.channel.send(hugEmbed)
44
​
45
}
46
module.exports.help = {
47
    name: "kiss",
48
    aliases: []
49
}
    
