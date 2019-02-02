const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let replies = ["Ne","Ano","Nemyslím si","Zkus to znova později","Spíše ano","Raději ti to neřeknu","Můžeš se na to spolehnout"]
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
