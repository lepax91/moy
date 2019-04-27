const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (bot, message, args) => {

    let bal = db.fetch(`money_${message.guild.id}_${message.author.id}`)

    if (bal === null) bal = 0;

    let embed = new Discord.RichEmbed()
    .setTitle(`Balance`)
    .setColor("RANDOM")
    .setDescription("Tvůj zůstatek je: `+ bal +`")
    message.channel.send(embed)

}
exports.help = {
    name: "balance69",
    aliases: []
}
