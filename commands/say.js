const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let botmessage = args.join(" ");
  if (!botmessage)
  const em = new Discord.RichEmbed()
    .setTitle("Musíte zadat nějaké slovo či větu, bez tohoto tato akce nepůjde.")
    .setColor("RED")
    return message.channel.send(em)    
  message.channel.send(botmessage);
}

module.exports.help = {
  name: "say",
  aliases: []
}
