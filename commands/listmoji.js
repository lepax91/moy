const {RichEmbed} = require('discord.js');

exports.run = (client, message) => {
  const emojiList = message.guild.emojis.map(e => e.toString()).join(' ');
  const embed = new RichEmbed()
    .setColor("RANDOM")
    .setDescription(`${emojiList}\n\n**${message.guild.emojis.array()`);
    .setFooter(`.length}** emotes jsou celkem na serveru.`)
  message.channel.send({embed});
}
exports.help = {
  name: 'emojis',
  aliases: []
}
