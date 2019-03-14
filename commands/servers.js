const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let string = '';
    bot.guilds.forEach(guild => {
    string += guild.name + '\n';})
    let bt = bot.user.username;
    let botembed = new Discord.RichEmbed()
        .setColor("#000FF")
        .addField("Dot je na těchto serverech!", string)
        .setTimestamp()
        .setFooter("Dot je hostován na Heroku, všechny informace ohledně bota najde v příkazu .info!")
    message.channel.send(botembed);
}

module.exports.help = {
    name: "servers",
    aliases: []
}
