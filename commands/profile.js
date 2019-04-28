const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

exports.run = (client, message, args) => {
    const adapter = new FileSync('./db.json')
    const db = low(adapter)
    const member = message.mentions.users.first() || message.author

        const get_credits = db.get("credits").find({ auteur: member.id }).value()
        let credits = ''
        if (!get_credits) credits = "0"
        else {
            let credits_msg = Object.values(get_credits)
            credits = credits_msg[1]
        }
        const get_desc = db.get("description").find({ auteur: member.id}).value()
        let desc = ''
        if (!get_desc) desc = ":x: **Description nebyl zaznamenán**"
        else {
            let desc_msg = Object.values(get_desc)
            desc = desc_msg[1]
        }
        const get_age = db.get("age").find({ auteur: member.id }).value()
        let age = ''
        if(!get_age) age = '0'
        else {
            let age_msg = Object.values(get_age)
            age = age_msg[1]
        }
        
        
          let profil = new Discord.RichEmbed()           
             .setTitle("**_Profile_**")
             .setDescription(`🌎 Bio desc`)
             .addField("📝 Jméno", member.tag, true)
             .addField("💸 Peníze", credits + "$", true)
             .addField("🎂 Věk", age + " let", true)
             .setColor("RANDOM")
             .setFooter("</> v2.5a - Dot")
             .setTimestamp()
        message.channel.send(profil)


}
module.exports.help = {
    name: "more",
    aliases: []
}

