const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let botmessage = args.join(" ");
  if (!botmessage) return message.channel.send(">>> Zadejte nějaké slovo, bez slova tato akce nepůjde.")
  message.channel.send(botmessage);
}

module.exports.help = {
  name: "say",
  aliases: []
}
