const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const useruser = "Requested: " + message.author.username;
    const userurl = message.author.avatarURL;
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .setDescription(`Načítá se...`)
        .setTimestamp()
    message.channel.send(botembed).then(message =>{
        .setColor("#000FF")
        .setDescription(`💻 Můj ping je **\`${bot.pings[0]}ms\`**`)
        .setFooter(useruser, userurl)
        .setTimestamp()
        message.edit(botembed)
    })

}
module.exports.help = {
    name: "ping",
    aliases: []
}
