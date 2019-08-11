const embed = new (require('discord.js').RichEmbed)()

module.exports.run = (bot, message, args) => {
  const channel = message.mentions.channels.first();
  var topic = args.slice(1).join(" ");
  if (!channel) return message.channel.send(`>>> Musíte označit nějaký kanál, akce **settopic** se takto nepodaří.`);
  if (!topic) topic = null; 
  
  embed
  .setColor("GREEN")
  
  if (topic !== null) {
    channel.setTopic(topic);
    embed.setDescription(`:white_check_mark: <#${channel.id}> byl úspěšně nastaven na větu **${topic}.**`)
  } else {
    channel.setTopic("");
    embed.setDescription(`:white_check_mark: Téma kanálu v <#${channel.id}> bylo úspěšně vyresetováno.`)
  }
  message.channel.send({embed: embed})
}

module.exports.help = {
  name: "settopic",
  aliases: []
}
