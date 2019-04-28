const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

exports.run = (client, message, args) => {
    const adapter = new FileSync('./db.json')
    const db = low(adapter)
    const member = message.mentions.users.first() || message.author
    if(member.user.client) return message.reply(':x: **Omlouvám se, nemůžu zobrazit tento profil.**');

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
        const get_rep = db.get("rep").find({ auteur: member.id }).value()
        let rep = ''
        if(!get_rep) rep = "0"
        else {
            let rep_msg = Object.values(get_rep)
            rep = rep_msg[1]
        }
        const get_age = db.get("age").find({ auteur: member.id }).value()
        let age = ''
        if(!get_age) age = '0'
        else {
            let age_msg = Object.values(get_age)
            age = age_msg[1]
        }
        
        
          let profil = new Discord.RichEmbed()           
             .setTitle("📌 Profil: " + member.tag + " 📌")
             .setDescription(desc)
             .addField("📝 • Jméno (Nick)", member.tag, true)
             .addField("🎩 • Reputace", rep + " points", true)
             .addField("💸 • Peníze", credits + "$", true)
             .addField("🎂 • Věk", age + " let", true)
             .setColor("RANDOM")
             .setFooter("</> v2.5a")
             .setTimestamp()
        message.channel.send(profil)

}

module.exports.help = {
    name: "more",
    aliases: []
}
