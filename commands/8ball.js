const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    if (!args[2]) return message.reply("Please ask a full question!");
    let replies = ["Yes, Certainly :8ball:", "No, Never :8ball:", "Please ask again :8ball:"]
    let result = Math.floor((Math.random() * replies.length));

    let question = args.slice().join(" ");

    let embedz = new Discord.RichEmbed()
        .setAuthor(message.author.username + " asks: " + question)
        .setColor("#D3D3D3")
        .addField("Answer", "Asked by " + message.author.tag + "\nAnswer: " + replies[result] + "")

    message.channel.send(embedz)
};
module.exports.help = {
    name: "8ball",
    aliases: []
}
