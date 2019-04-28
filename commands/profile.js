const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

exports.run = (client, message, args) => {
    const adapter = new FileSync('./db.json')
    const db = low(adapter)
    const member = message.mentions.users.first() || message.author

        
        const get_bio = db.get("bio").find({ auteur: member.id}).value()
        let bio = ''
        if (!get_bio) bio = 'Není zaznamenáno'
        else {
            let bio_msg = Object.values(get_bio)
            bio = bio_msg[1]
        }
        const get_age = db.get("age").find({ auteur: member.id }).value()
        let age = ''
        if(!get_age) age = 'Není zaznamenáno'
        else {
            let age_msg = Object.values(get_age)
            age = age_msg[1]
        }
      
          let profil = new Discord.RichEmbed()           
             .setTitle("Profil")
             .addField("📝 Jméno", member.tag, true)
             .addField("🌎 Bio", bio, true)
             .addField("🎂 Věk", age, true)
             .setColor("RANDOM")
             .setFooter("</> v2.5a - Dot")
             .setTimestamp()
        message.channel.send(profil)

}
module.exports.help = {
    name: "more",
    aliases: []
}
