const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let botmessage = args.join(" ");
  if (!botmessage) return.message.channel.send(">>> Zadejte nějaké slovo, bez slova tato akce nepůjde.")
  const em = new Discord.RichEmbed()
    .setColor("RED")
    return message.channel.send(em)    
  message.channel.send(botmessage);
}

module.exports.help = {
  name: "say",
  aliases: []
}
