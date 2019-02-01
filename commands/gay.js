const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let gay = Math.round(Math.random() * 100);

    let gayembed = new Discord.RichEmbed()
        .setColor("#f442d4")
        .setTitle(`👨‍❤️‍👨 Myslím si že ${message.author.username} je na ${gay}% gay! 👨‍❤️‍👨`);
    message.delete(10);
    return message.channel.send(gayembed);
};

module.exports.help = {
    name: "gay"
    aliases: []
};
