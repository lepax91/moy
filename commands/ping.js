const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let embed = new Discord.RichEmbed()
    .setTitle("Můj ping!")
    .setColor("#00c4eb")
    .setDescription(`Můj ping je ${Math.round(bot.ping)}milisekund!`)
    .setFooter(`Comando de ping`, bot.user.displayAvatarURL);

    message.channel.send(embed);
}

module.exports.help = {
    name: "ping",
    aliases: ['p']
}
