const Discord = require('discord.js')
const db = require('quick.db')

module.exports.run = async (bot, message, args) => {

    let bal = db.fetch(`money_${message.guild.id}_${message.author.id}`)

    if (bal === null) bal = 0;

    let embed = new Discord.RichEmbed()
    .setTitle(`Balance`)
    .setColor("RANDOM")
    .setDescription(`Tvůj zůstatek je: `' + bal + '`)
    message.channel.send(embed)

}
