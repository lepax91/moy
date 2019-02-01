const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!args[2]) return message.reply("Toto není celá otázka myslím.");
    let replies = ["Nevim, nejsem aladin 🤔 ", "Ne, zeptej se někoho jinýho.", "Myslím že ano.", "Vůbec ti nerozumím, ale asi ano"]
    let result = Math.floor((Math.random() * replies.length));

    let question = args.slice().join(" ");

    let embedz = new Discord.RichEmbed()
    .setTitle(message.author.username + " se zeptal: " + question)
        .setColor("#D3D3D3")
        .addField("Odpověď", "Zeptal se: " + message.author.tag + "\nOdpoveděl: " + replies[result] + "")

    message.channel.send(embedz)
};
module.exports.help = {
    name: "8ball",
    aliases: []
}
