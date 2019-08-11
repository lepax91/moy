const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let botmessage = args.join(" ");
  if (!botmessage) return message.channel.send(">>> Tento příkaz musí obsahovat nějaké slovo, Akce **Say** se takto nelze spustit.")
  message.channel.send(botmessage);
}

module.exports.help = {
  name: "say",
  aliases: []
}
