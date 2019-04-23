const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let string = '';
    bot.guilds.forEach(guild => {
    string += guild.name + '\n';})
    let bt = bot.user.username;
    let botembed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setAuthor("Seznam serverů:", string)
        .setTimestamp()
        .setFooter("v1.5a")
    message.channel.send(botembed);
}

module.exports.help = {
    name: "servers",
    aliases: []
}
