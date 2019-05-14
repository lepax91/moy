const Discord = require('discord.js');
var Vibrant = require('node-vibrant');
const db = require("quick.db");


exports.run = async (client, message, args) => {

  const member = message.mentions.users.first() || message.author;
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
  .addField("🎂 Věk", age)
  .addField("⭐ Status", status[`message + ${member.id} + presence.status`])
  .setFooter("v1.5a | Dot Development Project")
  message.channel.send(user)
}                            
exports.help = {
    name: "profile",
    aliases: []
}            
