const Discord = require('discord.js');


exports.run = async (client, message, args, config) => {

  if (args[0] === 'help') {
        let embed = new Discord.RichEmbed()
        .setTitle("🤔 Jak si nastavit profile?")
        .setDescription("👤 Pokud nevíš jak si nastavit profile, zde je pomoc!\nPro bio nebo-li něco o sobě: `.setbio [bio]\nPro věk: `.setage [věk]`")
        .setColor("GREEN")
        .setFooter("⚠️ Pokud je nějaká chyba, kontaktujte Hlavního Vývojáře nebo Administraci.")
        .setTimestamp();
        message.channel.send(embed)
  
  const member = message.mentions.members.size > 0 ? message.mentions.members.first() : message.member;

  let bio = client.db.get(`bio_${member.id}`)
  let age = client.db.get(`age_${member.id}`)
  
  if(bio === null) bio = 'Nebylo zaznamenáno'
  if(age === null) age = 'Nebylo zaznamenáno'
  let status = {
            online: `<:emoji_2:569849060580786186>`,
            idle: `<:emoji_1:569849042545147914>`,
            dnd: `<:emoji_4:577846932794376214>`,
            offline: `<:emoji_5:577847052856459294>`
        } 
  const user = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`✨ User Profile`)
  .addField("🏷 Username", `**${message.author.username}**#${message.author.discriminator}`)
  .addField("🌎 Bio ", bio)
  .addField("🎂 Věk ", age)
  .addField("⭐ Status", status[message.member.presence.status])
  .setFooter("v1.5a | Dot Development Project")
  message.channel.send(user)
}                            
exports.help = {
    name: "profile",
    aliases: []
}            
