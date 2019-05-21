const Discord = require('discord.js');
Vibrant = require('node-vibrant');
quickdb = require('quick.db')


if (args[0] === 'help') {
        let embed = new Discord.RichEmbed()
        .setTitle("Dot Development Helper")
        .setDescription("Chceš-li si nějak změnit profile, tak se řď tohoto helpu!")
        .addField("Jak si nastavíte bio a age?", ".setage (věk), .setbio (bio)")
        .setColor("GREEN")
        .setFooter("v1.5a")
        .setTimestamp();
        message.channel.send(embed)
      }

exports.run = async (client, message, args) => {

  const member = message.mentions.members.size > 0 ? message.mentions.members.first() : message.member;
  const palette = await Vibrant.from(`https://cdn.discordapp.com/avatars/${message.author.id}/${message.author.avatar}.png?size=1024`).getPalette();

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
