const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

    let gay = Math.round(Math.random() * 100);

    let gayembed = new Discord.RichEmbed()
        .setColor("#f442d4")
        .setTitle(`👨‍❤️‍💋‍👨 ${message.author.username} is ${gay}% gay! 👨‍❤️‍💋‍👨`);
    message.delete(10);
    return message.channel.send(gayembed);
};

module.exports.help = {
    name: "howgay"
};
