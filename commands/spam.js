const Discord = require('discord.js');
exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  

if (message.author.id != 417403958814965771) return message.reply(":x: **Tento příkaz může používat pouze Developer Dota!**")
if (message.author.id != 273813194861051907) return message.reply(":x: **Tento příkaz může používat pouze Developer Dota!**")
  if (args.length !== 0) {
    if (message.content.indexOf("@everyone") > -1 || message.content.indexOf("@here") > -1) {
      message.channel.send("Promiň, ale nesmím spamovat everyone či here. :cry:");
    } else {
      message.channel.send(args.join(" ").repeat(500).substring(0, 500));
    }
  } else {
    var hehe = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor(message.author.username, message.author.avatarURL)
        .setTitle('Chyba v příkazu!')
        .setDescription('Syntax: `.spam [zpráva]`')
        .setTimestamp();
        message.channel.send(hehe);
  }
};
exports.help = {
    name: "spam",
    aliases: []
}
