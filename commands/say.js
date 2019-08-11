const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let botmessage = args.join(" ");
  if (!botmessage) return message.channel.send(">>> Tento příkaz musí obsahovat nějaké slovo, Zadejte to takhle: ``.say Ahoj``")
  message.channel.send(botmessage);
}

module.exports.help = {
  name: "say",
  aliases: []
}
