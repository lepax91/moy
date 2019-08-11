const embed = new (require('discord.js').RichEmbed)()

module.exports.run = (bot, message, args) => {
  const channel = message.mentions.channels.first();
  var topic = args.slice(1).join(" ");
  if (!channel) return message.channel.send(`>>> Musíte označit nějaký kanál, takto akce se nikdy nepodaří.`);
  if (!topic) topic = null; 
  
  embed
  .setColor("GREEN")
  
  if (topic !== null) {
    channel.setTopic(topic);
    embed.setDescription(`>>> :white_check_mark: <#${channel.id}> byl úspěšně nastaven na větu ${topic}.`)
  } else {
    channel.setTopic("");
    embed.setDescription(`>>> :white_check_mark: <#${channel.id}> jeho topic byl úspěšně vyresetován.`)
  }
  message.channel.send({embed: embed})
}

module.exports.help = {
  name: "settopic",
  aliases: []
}
