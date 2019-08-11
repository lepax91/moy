const fs = require('fs')
const config = require('../config.json')
const discord = require('discord.js')

module.exports.run = (bot, message, args, discord) => {
    if (!message.member.hasPermission(["BAN_MEMBERS"])) return message.channel.send(">>> Na zabanovaní uživatele nemáš pravomoc, musíš mít nejprve pravomoc na zabanovaní uživatele!")
    let reason = args.slice(1).join(" ");
    let member = message.mentions.members.first();
    member.ban(reason).catch(console.error)
    let embed = new discord.RichEmbed()
    .setDescription(`:wave: Úspěšně byl zabanovaný ${member.displayName} :point_right:`)
    .setColor("RED")
    .setThumbnail(bot.user.avatarURL)
    message.channel.send(embed)
    config.banreason = reason;
    fs.writeFile('../config.json', JSON.stringify(reason), (err) => console.error)
}

module.exports.help = {
  name: "ban",
  aliases: []
}
