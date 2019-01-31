const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setTitle("pepe a jeho mozek")
    .setColor("#00c4eb")
    .setDescription(`Můj mozek má ${Math.round(bot.ping)IQ!`)
    .setFooter(message.author.username + "");
    message.channel.send(embed);
}

module.exports.help = {
    name: "ping",
    aliases: ['p']
}
