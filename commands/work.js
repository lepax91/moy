const discord = require('discord.js')
const db = require('quick.db')
const send = require('quick.hook')
var currencyFormatter = require('currency-formatter')
var ms = require('parse-ms');

module.exports.run= async (bot, message, args) => {
  
   // This Code Is Registered To RyansHDs#4461 & Zinx#9129
   // The Code Presented Is A More Modified Version Of RyansHDs
   // With His Permission To Include His Name + Upload This,
  
  try {
    let worklog = bot.channels.get('696969696969696969') // MODIFY - This is used to log any work processed & if failed logged as well.
    let cooldown = 2.88e+7; //8 Hours in ms
    let amount = Math.floor((Math.random() * 100) + 100); // Cost
    let workplace = ["Kuchař", "Popelář", "Prodavač", "Kebab", "Učitel", "Programátor"] // Different outputs match below, from 0 to 5 with an included error system.
    let workDaily = await db.fetch(`workDaily_${message.author.id}`) // Used for fetching the time on when work is available.
    let result = Math.floor((Math.random() * workplace.length))
    let timeObj = ms(cooldown - (Date.now() - workDaily))
    
    let workEmbed = new discord.RichEmbed()
    .setDescription(`**${message.author.tag}** Začal si pracovat, a vydělal sis ${currencyFormatter.format(amount, { code: 'KČ' })}`)
    .setColor(`GREEN`)

    let dailytEmbed = new discord.RichEmbed()
    .setDescription(`${message.author.tag} Chtěl si začít pracovat, ale bohužel máš pauzu! Zbývá: **${timeObj.hours}h, ${timeObj.minutes}m, and ${timeObj.seconds}s**`)
    .setColor(`RED`)

    
    try {
    db.fetch(`currency_${message.author.id}`).then(rm => { // MODIFY - This checks your account to see if your account has a valid amount
    if(rm == null || 0){
        db.set(`currency_${message.author.id}`, 50)} // MODIFY - This wipes any data & updates the account if it isn't a valid number

    else if (workDaily !== null && cooldown - (Date.now() - workDaily) > 0) {
        

        let workDailyEmbed = new discord.RichEmbed()
        .setAuthor(`${message.author.tag} || Uklidni se!`, message.author.displayAvatarURL)
        .setColor(`BLUE`)
        .setDescription(`**${message.author.tag}**, Právě jsi pracoval 6 hodin!\nMusíš si odpočinout **${timeObj.hours}h, ${timeObj.minutes}m**`)
        message.channel.send(workDailyEmbed)
      send(worklog, dailytEmbed, {
          name: "Manager"
      })
    } else if (`${result}` == "0"){
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`currency_${message.author.id}`, amount).then(i => { // MODIFY - This updates your account to add the amount earned
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.tag} Výborně si uvařil, hostům chutnalo!`, message.author.displayAvatarURL)
            .setColor(`ORANGE`)
            .addField(`Za svojí práci jsi dostal zaplaceno`, `Manager ti dal: ${currencyFormatter.format(amount, { code: 'KČ' })}`)
            message.channel.send(dailyEmbed)
            send(worklog, workEmbed, {
                name: "Manager"
            })
        })}
    else if (`${result}` == "1"){
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`currency_${message.author.id}`, amount).then(i => { // MODIFY - This updates your account to add the amount earned
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.tag} Dneska jsi udělal dobrou práci za popeláře!`, message.author.displayAvatarURL)
            .setColor(`#FFFFCC`)
            .addField(`Za svoji práci jsi dostal zaplaceno`, `Manager ti dal: ${currencyFormatter.format(amount, { code: 'KČ' })}`)
            message.channel.send(dailyEmbed)
            send(worklog, workEmbed, {
                name: "Manager"
            })
        })}
    else if (`${result}` == "2"){
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`currency_${message.author.id}`, amount).then(i => { // MODIFY - This updates your account to add the amount earned
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.tag} Byl jsi v supermarketu víc než by si měl!`, message.author.displayAvatarURL)
            .setColor(`RED`)
            .addField(`Za práci jsi byl zaplacen!, `Manager ti dal: ${currencyFormatter.format(amount, { code: 'KČ' })}`)
            message.channel.send(dailyEmbed)
            send(worklog, workEmbed, {
                name: "Manager"
            })
        })}
    else if (`${result}` == "3"){
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`currency_${message.author.id}`, amount).then(i => { // MODIFY - This updates your account to add the amount earned
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.tag} Udělal jsi dobrý kebab, pro našeho zákazníka!`, message.author.displayAvatarURL)
            .setColor(`RED`)
            .addField(`Za práci jsi byl zaplacen!`, `Manager ti dal: ${currencyFormatter.format(amount, { code: 'KČ' })}`)
            message.channel.send(dailyEmbed)
            send(worklog, workEmbed, {
                name: "Manager"
            })
        })}
    else if (`${result}` == "4"){
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`currency_${message.author.id}`, amount).then(i => { // MODIFY - This updates your account to add the amount earned
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.tag} Dnes jsi naučil děti počítat do 10!`, message.author.displayAvatarURL)
            .setColor(`BLACK`)
            .addField(`Za práci jsi byl zaplacen!,`, Manager ti dal: ${currencyFormatter.format(amount, { code: 'CZ' })}`)
            message.channel.send(dailyEmbed)
            send(worklog, workEmbed, {
                name: "Manager"
            })
        })}
    else if (`${result}` == "5"){
        db.set(`workDaily_${message.author.id}`, Date.now());
        db.add(`currency_${message.author.id}`, amount).then(i => { // MODIFY - This updates your account to add the amount earned
            var discord = require('discord.js')
            let dailyEmbed = new discord.RichEmbed()
            .setAuthor(`${message.author.tag} Dneska jsi naprogramoval jednoho bota za 5 hodin!`, message.author.displayAvatarURL)
            .setColor(`AQUA`)
            .addField(`Za programování jsi dostal nějakou částku!`, `Na PayPal ti přišlo: ${currencyFormatter.format(amount, { code: 'CZ' })}`)
            message.channel.send(dailyEmbed)
          send(worklog, workEmbed, {
              name: "PayPal"
          })
        })}
    else {
        message.channel.send(`**👤 Našel se tu nějaký error, prosím kontaktujte Dot Development Project.`)
        console.log(result)
    }
    })} catch(err) {console.log(err)}
    } catch(err) {console.log(`Error with work \n${err}`)}
}

module.exports.run = { // This is the config for a command. Able to add things like proper usage & etc.
    help: "work",
    aliases: []
    
}
