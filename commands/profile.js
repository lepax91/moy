const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  const member = message.mentions.users.first() || message.author;

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
  .setTitle(`✨ Váš profil vypadá takto`)
  .addField("🌎 Bio ", bio)
  .addField("🎂 Věk ", age)
  .addField("⭐ Status", status[message.member.presence.status])
  .setFooter("v1.5a | Dot Development Project")
  message.channel.send(user)
  const embed = await message.channel.send(user)
        if(message.member.presence.activity && message.member.presence.activity.name === 'Spotify') {
            embed.react("🎧")
        }

        const filter = (reaction, user) => {
            return '🎧'.includes(reaction.emoji.name) && user.id === message.author.id;
        };

        embed.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
        .then(collected => {
            const reaction = collected.first();
    
            if (reaction.emoji.name === '🎧') 
                const spotify = new Discord.MessageEmbed()
                    .setAuthor(message.author.username, message.author.displayAvatarURL())
                    .setTitle("🎧 Listening to Spotify")
                    .setColor(`#${hex}`)
                    .setThumbnail(message.member.presence.activity.assets.largeImageURL())
                    .addField("💿 Song Title", message.member.presence.activity.details)
                    .addField("🎼 Song Author", `by ${message.member.presence.activity.state}`)
                    .addField("💽 Song Album", message.member.presence.activity.assets.largeText)
                embed.edit(spotify)
                embed.reactions.removeAll()
            }
        


}                            
exports.help = {
    name: "profile",
    aliases: []
}            
