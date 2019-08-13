module.exports.run = (bot, message, args) => {
  var queue = require('./play.js').queue
  const vc = message.guild.me.voiceChannel
  if (!vc) return message.channel.send(">>> :warning: Nehraje žádnou hudbu, kterou nemůžu stopnout.");
  const discord = require('discord.js');
  const em = new discord.RichEmbed()
  .addField("⏹️ Zastavená hudba", `Momentálně je vypnutá hudba v **${vc.name}**`)
  .setTimestamp()
  .setColor("RED");
  vc.leave();
  message.channel.send({embed: em});
}

module.exports.help = {
  name: "stop",
  aliases: []
}
