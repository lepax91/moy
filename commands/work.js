const db = require('quick.db')
const ms = require('ms')
const Discord = require('discord.js')


exports.run = async (client, message, args, config) => {


    let cooldown = 8.64e+7,
    else if (cooldown !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - cooldown))

        let lastDailyEmbed = new Discord.RichEmbed()
        .setAuthor(`Next Daily`)
        .setColor('#ffffff')
        .setDescription(`You sucessfully collected this, you must wait to collect next dily. Time Left: **${timeObj.hours}h ${timeObj.minutes}m**!`)
        .setFooter('Requested By ' + message.author.tag, message.author.avatarURL)
        message.channel.send(lastDailyEmbed)
    } else {
    if (args[0] == 'hráč') {

        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. whatever you'd like

        let embed = new Discord.RichEmbed()
        .setTitle("Hráč")
        .setDescription(`Hrál jsi CS:GO, a váš team vyhrál! | **💸 Dostáváš celkem: ${amount}$ za výhru!**`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
    } else if(args[0] == 'kuchař') {
        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. whatever you'd like

        let embed = new Discord.RichEmbed()
        .setTitle("Kuchař")
        .setDescription(`Uvařil jsi dobré jidlo pro hosty a chutnalo jim! | **💸 _Dobrá Práce!_ Dostáváš celkem: ${amount}$ za dobré jídlo!**`)
        .setFooter("</> v2.5a")
        .setTimestamp()
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
    } else if(args[0] == 'programátor') {
        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. change to whatever you'd like

        let embed = new Discord.RichEmbed()
        .setTitle("Programátor")
        .setDescription(`Programoval jsi celkem 8 hodin, ale stálo to za to! | **💸 Dostáváš celkem: ${amount}$ za programování 8 hodin!**`)
        .setFooter("</> v2.5a")
        .setTimestamp()
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
    }
  }
}
exports.help = {
    name: "workxd",
    aliases: []
}
