const Discord = require("discord.js");

module.exports.run = (bot, message, args) => {

    let suggestmessage = args.join(" ").slice(22);
    let suggestchannel = message.mentions.channels.first();

    if (!suggestchannel) {
        return message.reply("Please Mention the channel!")
    }

    if (!suggestmessage) {
        return message.reply("Plase Give Text To Suggestion Channel!")
    }

    let embed = new Discord.RichEmbed()
        .addField("**SUGGESTION**", `${suggestmessage}`)
        .setFooter(`Suggestion By ${message.author.tag}`)
        .setTimestamp()
    suggestchannel.send({
        embed
    }).then(msg => {
        msg.react("✅").then(r => msg.react("❎"))
    });


    message.reply(`Your Suggestion is sended.`)
return;

}
module.exports.help = {
    name: "suggest",
    aliases: ['sug']
