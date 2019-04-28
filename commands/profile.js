const Discord = require('discord.js');
const low = require('lowdb')
const FileSync = require('lowdb/adapters/FileSync')

exports.run = (client, message, args) => {
      
 
var member = message.mentions.members.size > 0 ? message.mentions.members.first() : message.member;

            // Check if the member is a bot
            if(member.user.bot) return message.reply('les bots n\'ont pas de profil !');

            // Gets the data of the guildMember whose profile you want to display
            var data = (message.member === member) ? author_data : members_data[0];
        
            var profile_embed = new Discord.RichEmbed() // Creates a new rich embed (see https://discord.js.org/#/docs/main/stable/class/RichEmbed)
                .setAuthor(`Profil de ${member.user.username} !`, member.user.displayAvatarURL) // Sets the heading of the embed
                // if the member has a description, display them, else display "Aucune description enregistrée !"
                .setDescription(data.desc !== 'unknow' ? data.desc : 'Aucune biographie enregistrée !')
                // Display the amount of credits of the member
                .addField('💰 Argent', `**${data.credits}** crédit(s)`, true)
                // Display the amount of reputation points of the member
                .addField('🎩 Réputation', `**${data.rep}** point(s)`, true)
                // If the member is premium, display "Oui !" else display "Non..."
                .addField('👑 Premium', ((data.premium === 'true') ? 'Oui !' : 'Non...'), true)
                // Display the creation date of the member
                .addField('📅 Enregistré', `Le ${data.registeredAt}`, true)
                // Display the level of the member
                .addField('📊 Niveau', `**${data.niv.level}**`, true)
                // Display the xp of the member
                .addField('🔮 Expérience', `**${data.niv.xp}** xp`, true)
                .setColor("RANDOM") // Sets the color of the embed
                .setFooter("</> v2.5a") // Sets the footer of the embed
                .setTimestamp();

            message.channel.send(profile_embed); // Send the embed in the current channel
}
module.exports.help = {
    name: "more",
    aliases: []
}
