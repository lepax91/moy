const Discord = require("discord.js");

module.exports.run = async (bot, message, args, prefix) => {

    let tickleUser = message.guild.member(message.author.username() || message.guild.members.get(args[0]));
    if(!tickleUser) return message.channel.send("🤔 Why, you can do need that?").catch(err => console.log(err));
    let gay = Math.round(Math.random() * 100);
    let gayembed = new Discord.RichEmbed()
        .setColor("#f442d4")
        .setTitle(`👨‍❤️‍💋‍👨 ${message.author.username} is ${gay}% gay! 👨‍❤️‍💋‍👨`);
    message.delete(10);
    return message.channel.send(gayembed);
};

module.exports.help = {
    name: "howgay",
    aliases: []
};
