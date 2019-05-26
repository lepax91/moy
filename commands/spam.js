const Discord = require('discord.js');
exports.run = async (client, message, args) => { // eslint-disabled-vars
  if (message.author.id !== "417403958814965771" && message.author.id !== "344209786692435980") return;
  try {       
       message.channel.send(":warning: Příkaz mohou používat, kteří jsou v Dot Development Project.")
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
  }
};
exports.help = {
    name: "spam",
    aliases: []
}
