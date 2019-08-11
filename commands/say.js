const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let botmessage = args.join(" ");
  const em = new Discord.RichEmbed()
    .setTitle("Tento příkaz funguje pouze s důvodem, zadejte prosím důvod aby zabanoval všechny uživatele.")
    .setColor("RED")
    return message.channel.send(em)    
  message.channel.send(botmessage);
}

module.exports.help = {
  name: "say",
  aliases: []
}
