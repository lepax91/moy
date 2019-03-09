const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    var canal = message.guild.channels.find('name', 'log');
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member)
        return message.reply("Uživatel nebyl nalezen.");
    let reason = args.slice(1).join(' ');
    if (!reason) reason = "Žádnej důvod nebyl nalezen.";
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(message.author.avatarURL)
        .setTitle(`<a:usargif:496053335422664726> | Reportes `)
        .addField('Kdo nahlásil užívatele:', message.author)
        .addField('\n\n Kdo byl nahlášen:', member.user)
        .addField('\n\n Důvod:', reason)
        .setFooter(`Požadováno: ${message.author.username}.`)
        .setTimestamp()
    canal.send(embed);
}

module.exports.help = {
    name: "reportar"
}
