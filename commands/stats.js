const Discord = require("discord.js");
const moment = require("moment");
require("moment-duration-format");

exports.run = (client, msg, args) => {
    
    let bicon = client.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setTitle("Bot Information")
    .setDescription(`Information on LewdTime:`)
    .setColor("#b70000")
    .setThumbnail(bicon)
    .addField("Name", client.user.username, true)
    .addField("Tag", client.user.tag, true)
    .addField("ID", client.user.id, true)
    .addField("Last Update", `${moment.duration(client.uptime).format('d[d ]h[h ]m[m ]s[s]')} ago`, true)
    .addField("Date Of Creation", client.user.createdAt.toLocaleDateString(), true)
    .addField("Mem Usage", ${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} MB, true)
    .addField("Guilds", client.guilds.size, true)
    .addField("Users", client.users.size, true)
    .setTimestamp();
    return message.channel.send(botembed);
  }

exports.help = {
  name: 'stats',
  aliases: []
}
