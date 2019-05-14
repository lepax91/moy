const Discord = require('discord.js');

exports.run = async (client, message, args) => {

  const member = message.mentions.users.first() || message.author;

  let bio = client.db.get(`bio_${member.id}`)
  let age = client.db.get(`age_${member.id}`)
  let job = client.db.get(`job_${member.id}`)
  let sex = client.db.get(`sex_${member.id}`)
  
  if(bio === null) bio = 'Nebylo zaznamenáno'
  if(age === null) age = 'Nebylo zaznamenáno'
  if(job === null) job = 'Nebylo zaznamenáno'
  if(sex === null) sex = 'Nebylo zaznamenáno'
  
  const user = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`Profil: ${member.tag}`)
  .addField("🌎 Bio ", bio)
  .addField("🎂 Věk ", age)
  .addField("♂️ Pohlaví", sex)
  .addField("👮 Povolání ", job)
  .setFooter("</> v1.5a | Dot Development Project")
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
    
            if (reaction.emoji.name === '🎧') {
                const spotify = new Discord.MessageEmbed()
                    .setTitle("🎧 Listening to Spotify 🎧")
                    .setColor("RANDOM")
                    .setThumbnail(message.member.presence.activity.assets.largeImageURL())
                    .addField("💿 Název", message.member.presence.activity.details)
                    .addField("🎼 Autor", `by ${message.member.presence.activity.state}`)
                    .addField("💽 Album", message.member.presence.activity.assets.largeText)
                embed.edit(spotify)
                embed.reactions.removeAll()
            
};
exports.help = {
    name: "profile",
    aliases: []
}
