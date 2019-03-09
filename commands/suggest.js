const Discord = require("discord.js");

exports.run = (client, message, args) => {
    let suggestmessage = args.join(" ").slice(22);
    var canal = message.guild.channels.find('name', 'suggest');
    let embed = new Discord.RichEmbed()
        .addField("Navrhnout", `${suggestmessage}`)
        .setFooter(`Návrh: ${message.author.tag}`)
        .setColor("RANDOM")
        .setTimestamp()
    suggestchannel.send({
        embed
    }).then(msg => {
        msg.react("✅").then(r => msg.react("❎"))
    });


    message.reply(`:white_check_mark: **| Váš návrh byl úspěšně poslán.**`)
    return;
}
exports.help = {
    name: "suggest",
    aliases: []
}
