const Discord = require('discord.js');
exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  if (message.author.id != 417403958814965771;577570268982018059) return message.channel.send("warning Příkaz mohou používat, kteří jsou v Dot Development Project.")
  if (args.length !== 0) {
    if (message.content.indexOf("@everyone") > -1 || message.content.indexOf("@here") > -1) {
      message.channel.send("Promiň, ale nesmím spamovat everyone či here. :cry:");
    } else {
      message.channel.send(args.join(" ").repeat(2000).substring(0, 500));
    }
  } else {
    var hehe = new Discord.RichEmbed()
        .setColor("RANDOM")
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
