const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {


    let timeout = 21600000 // 6 hours in milliseconds, change if you'd like.
    let amount = 500
    // random amount: Math.floor(Math.random() * 1000) + 1;


    let daily = await db.fetch(`daily_${message.author.id}`);

    if (daily !== null && timeout - (Date.now() - daily) > 0) {
        let time = ms(timeout - (Date.now() - daily));

        message.channel.send(`✋ Uklidni se! Musíš si počkat, Zbývají ti: **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
    } else {
    let embed = new Discord.RichEmbed()
    .setTitle(`Daily`)
    .setColor("RANDOM")
    .setDescription(`**Denní Odměna**`)
    .addField(`󠇰Získáno`, amount) 
    .setFooter(`Dot - v2.5a`)
    .setTimestamp()

    message.channel.send(embed)
    db.add(`money_${message.author.id}`, amount)
    db.set(`daily_${message.author.id}`, Date.now())
        
    }

}
exports.help = {
    name: "daily123",
    aliases: []
}