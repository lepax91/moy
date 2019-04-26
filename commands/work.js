const db = require('quick.db')
const Discord = require('discord.js')

module.exports.run = async (client, message, args, config) => {


    if (args[0] === 'help') {
        let embed = new Discord.RichEmbed()
        .setAuthor("Work")
        .setDescription("Zatím je k dispozici jen: \nProdavač\nKuchař\nProgramátor")
        .setColor("RANDOM")
        .setFooter("v2.5a | Dot")
        .setTimestamp();
        message.channel.send(embed)
        
    } else if (args[0] == 'prodavač') {

        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. whatever you'd like

        let embed = new Discord.RichEmbed()
        .setTitle("Work")
        .setDescription(`${message.author}, Pracoval si na prodavače a vydělal sis ${amount}$!`)
        .setFooter("v2.5a | Dot")
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
    } else if(args[0] == 'Kuchař') {
        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. whatever you'd like

        let embed = new Discord.RichEmbed()
        .setTitle("Work")
        .setFooter("v2.5a | Dot")
        .setDescription(`${message.author}, Udělal si výborný jídlo pro hosty a chutnalo jim! Vydělal sis celkem ${amount}$!`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
    } else if(args[0] == 'programátor') {
        let amount = Math.floor(Math.random() * 500) + 1; // 1-500 random number. change to whatever you'd like

        let embed = new Discord.RichEmbed()
        .setTitle("Work")
        .setFooter("v2.5a | Dot")
        .setDescription(`${message.author}, Udělal jsi pro Adquae Bota! ${amount}$!`)
        .setColor("RANDOM")
        
    
        message.channel.send(embed)
        db.add(`money_${message.author.id}`, amount)
    }


}
module.exports.help = {
    name: "xdwork",
    aliases: []
}
