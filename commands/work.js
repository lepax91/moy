const db = require('quick.db')
const ms = require('parse-ms')
const Discord = require('discord.js')

exports.run = async (client, message, args, config) => {

    let timeout = 36000000 //10 hours in milliseconds, change if you'd like.
    
    let work = await db.fetch(`daily_${message.author.id}`);
    
    if (work !== null && timeout - (Date.now() - work) > 0) {
        let time = ms(timeout - (Date.now() - work));

        message.channel.send(`✋ Uklidni se! Musíš si počkat, Zbývají ti: **${time.hours}h ${time.minutes}m ${time.seconds}s**!`)
    } else {
    if (args[0] == 'hráč') {

        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. whatever you'd like

        let embed = new Discord.RichEmbed()
        .setTitle("Hráč")
        .setDescription(`Hrál jsi CS:GO, a vyhráli jste! | 💸 Dostáváš celkem: ${amount}$ za výhru!`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
    } else if(args[0] == 'kuchař') {
        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. whatever you'd like

        let embed = new Discord.RichEmbed()
        .setTitle("Kuchař")
        .setDescription(`Uvařil jsi dobré jidlo pro hosty a chutnalo jim! Dobrá práce | 💸 Dostáváš celkem: ${amount}$ za dobré jídlo!`)
        .setFooter("</> v2.5a")
        .setTimestamp()
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
    } else if(args[0] == 'programátor') {
        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. change to whatever you'd like

        let embed = new Discord.RichEmbed()
        .setTitle("Programátor")
        .setDescription(`Programoval jsi celkem 8 hodin, ale stálo to za to! | 💸 Dostáváš celkem: ${amount}$ za programování 8 hodin!`)
        .setFooter("</> v2.5a")
        .setTimestamp()
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
    }

}
exports.help = {
    name: "workxd",
    aliases: []
}
