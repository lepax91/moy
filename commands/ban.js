const fs = require('fs')
const config = require('../config.json')
const Discord = require('discord.js');

module.exports.run = (bot, message, args, discord) => {
    if (!message.member.hasPermission(["BAN_MEMBERS"])) return message.channel.send(">>> Na zabanovaní uživatele nemáš pravomoc, musíš mít nejprve pravomoc na zabanovaní uživatele!")
    let reason = args.slice(1).join(" ");
    let member = message.mentions.members.first();
    member.ban(reason).catch(console.error)
    const theirembed = new Discord.RichEmbed()
    .setDescription(`:wave: Uživatel byl úspěšně zabanován ${member.displayName} :point_right:`)
    .setColor("RED")
    message.channel.send(theirembed)
    config.banreason = reason;
    fs.writeFile('../config.json', JSON.stringify(reason), (err) => console.error)
}

module.exports.help = {
  name: "ban",
  aliases: []
}
