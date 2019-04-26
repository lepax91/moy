const db = require('quick.db')
const Discord = require('discord.js')

module.exports.run = async (client, message, args, config) => {

let cooldown = 2.88e+7; //8 Hours in ms
let workDaily = await db.fetch(`workDaily_${message.author.id}`) // Used for fetching the time on when work is available.
let result = Math.floor((Math.random() * workplace.length))
let timeObj = ms(cooldown - (Date.now() - workDaily))
    
    
 let dailytEmbed = new discord.RichEmbed()
    .setDescription(`${message.author.tag} Trying to work but it's on cooldown! Time Left: **${timeObj.hours}h, ${timeObj.minutes}m, and ${timeObj.seconds}s**`)
    .setColor(`RED`)
   

    if (args[0] === 'help') {
        let embed = new Discord.RichEmbed()
        .setAuthor("Work")
        .setDescription("Zatím je k dispozici jen: \nProdavač\nKuchař\nProgramátor")
        .setColor("RANDOM")
        .setFooter("v2.5a | Dot")
        .setTimestamp();
        message.channel.send(embed)
        
    } else if (args[0] == 'Prodavač') {

        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. whatever you'd like        
        let embed = new Discord.RichEmbed()
        .setTitle("Work")
        .setDescription(`${message.author}, Pracoval si na prodavače a vydělal sis ${amount}$!`)
        .setFooter("v2.5a | Dot")
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`money_${message.author.id}`, amount)
    } else if(args[0] == 'Kuchař') {
        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. whatever you'd like

        let embed = new Discord.RichEmbed()
        .setTitle("Work")
        .setFooter("v2.5a | Dot")
        .setDescription(`${message.author}, Udělal si výborný jídlo pro hosty a chutnalo jim! Vydělal sis celkem ${amount}$!`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`money_${message.author.id}`, amount)
    } else if(args[0] == 'Programátor') {
        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. change to whatever you'd like

        let embed = new Discord.RichEmbed()
        .setTitle("Work")
        .setFooter("v2.5a | Dot")
        .setDescription(`${message.author}, Udělal jsi pro Adquae Bota! ${amount}$!`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`money_${message.author.id}`, amount)
    }


}
module.exports.help = {
    name: "xdwork",
    aliases: []
}
