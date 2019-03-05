const {RichEmbed} = require('discord.js');

exports.run = (client, message) => {
  const emojiList = message.guild.emojis.map(e => e.toString()).join(' ');
  const embed = new RichEmbed()
    .setColor(0xF18E8E)
    .setTitle('Emoji List')
    .setDescription(`${message.author.username}, Tyto emotes jsou na serveru:\n\n${emojiList}\n\n**${message.guild.emojis.array().length}** jsou celkem emotes.`);
  message.channel.send({embed});

}
exports.help = {
  name: 'emojis'
