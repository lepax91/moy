const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let replies = ["Ne", "Ano", "Nemyslím si", "Zkus to znova později", "Spíše ano", "Raději ti to neřeknu", "Můžeš se na to spolehnout"]
    let result = Math.floor((Math.random() * replies.length));

    let question = args.slice().join(" ");

    let embedz = new Discord.RichEmbed()
        .setAuthor(message.author.username + " se ptá: " + question)
        .setColor("RANDOM")
        .addField(" Zeptal se: " + message.author.tag + "\nOdpověď: " + replies[result] + "")

    message.channel.send(embedz)
};
module.exports.help = {
    name: "8ball",
    aliases: []
}
