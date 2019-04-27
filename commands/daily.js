const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('ms')

exports.run = async (client, message, args) => {

    let cooldown = 8.64e+7,
    amount = 250

    let lastDaily = await db.fetch(`lastDaily_${message.author.id}`)
    try {
    db.fetch(`userBalance_${message.member.id}`).then(bucks => {
    if(bucks == null){
        db.set(`userBalance_${message.member.id}`, 50)}

    else if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily))

        let lastDailyEmbed = new Discord.RichEmbed()
        .setTitle(`You are in Cooldown!`)
        .setColor('#ffffff')
        .setDescription(`✋ Musíš se uklidnit! Musí ti uplynout čas! Zbývá: **${timeObj.hours}h ${timeObj.minutes}m**!`)
        .setFooter('Požadováno od ' + message.author.tag, message.author.avatarURL)
        message.channel.send(lastDailyEmbed)
    } else {
        db.set(`lastDaily_${message.author.id}`, Date.now());
        db.add(`userBalance_${message.member.id}`, amount).then(i => {
          var discord = require('discord.js')
          var embed = new Discord.RichEmbed()
          .setTitle('Daily')
          .setDescription(`💸 Dostal jsi celkem: {amount}!`)
          .setColor('#ffffff')
          .setFooter('Požadováno od ' + message.author.tag, message.author.avatarURL)
          message.channel.send(embed);
        })}
    })} catch(err) {console.log(err)}    
}
exports.help = {
    name: "daily123",
    aliases: []
}
