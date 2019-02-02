const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg, args) => {
    const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
    
    
const embedStats = new Discord.RichEmbed()
    .setAuthor(bot.user.username)
    .setTitle("***BOT Stats***")
    .setColor("RANDOM")
    .addField("• Mem Usage", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB`)
    .addField("• Uptime",   `${duration}`, true)
    .addField("• Users",    `${client.users.size.toLocaleString()}`)
    .addField("• Servers",  `${client.guilds.size.toLocaleString()}`)
    .addField("• Channels", `${client.channels.size.toLocaleString()}`)
    .addField("• Discord.js" `${Discord.version}`)
  };
  message.channel.send(embedStats)
});
    
exports.conf = {
  enabled: true,
  guildOnly: false,
  permLevel: 0
};

exports.help = {
  name: 'stats',
  aliases: [],
  description: 'Gives some useful bot statistics',
  usage: 'sta'
