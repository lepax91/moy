const {RichEmbed} = require('discord.js');

exports.run = (client, message) => {
  const emojiList = message.guild.emojis.map(e => e.toString()).join(' ');
  const embed = new RichEmbed()
    .setColor("RANDOM")
    .setTimestamp()
    .setFooter(`**${message.guild.emojis.array().length}** emotes jsou celkem na serveru.`)
    .setDescription(`${emojiList}`);
  message.channel.send({embed});
}
exports.help = {
  name: 'emojis',
  aliases: []
}
