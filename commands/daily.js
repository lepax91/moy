const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {


    let timeout = 21600000 // 6 hours in milliseconds, change if you'd like.
    let amount = 500
    // random amount: Math.floor(Math.random() * 1000) + 1;


    let money = await db.fetch(`daily_${message.author.id}`);

    if (money !== null && timeout - (Date.now() - money) > 0) {
        let time = ms(timeout - (Date.now() - money));

        message.channel.send(`✋ Uklidni se! Musíš si počkat, Zbývají ti: **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
    } else {
    let embed = new Discord.RichEmbed()
    .setTitle(`Daily Reward`)
    .setColor("RANDOM")
    .addField(`Dostal jsi celkem:`, amount)
    .setTimestamp()

    message.channel.send(embed)
    db.add(`money_${message.author.id}`, money)
    db.set(`daily_${message.author.id}`, Date.now())
        
    }

}
exports.help = {
    name: "daily",
    aliases: []
}
