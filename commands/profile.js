const Discord = require("discord.js"), // npm install discord.js
ms = require('ms'), // npm install ms
quickdb = require('quick.db'), // npm install quick.db
asciitable = require('ascii-table'); // npm install ascii-table


exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
            
            var member = message.mentions.members.size > 0 ? message.mentions.members.first() : message.member;

            // Check if the member is a bot
            if(member.user.bot) return message.reply(':x: Omlouvám se, ale boti nemůžou mít profile.');

            // Gets the data of the guildMember whose profile you want to display
            var data = (message.member === member) ? author_data : members_data[0];
        
            var profile_embed = new Discord.RichEmbed() // Creates a new rich embed (see https://discord.js.org/#/docs/main/stable/class/RichEmbed)
                .setAuthor(`Profil: ${member.user.username}`, member.user.displayAvatarURL) // Sets the heading of the embed
                // if the member has a description, display them, else display "Aucune description enregistrée !"
                .setDescription(data.desc !== 'unkno' ? data.desc : '**Žádna biografie nebyla zaznamenána**')
                // Display the amount of credits of the member
                .addField('💰 Credits', `**${data.credits}** credits`, true)
                // Display the amount of reputation points of the member
                .addField('🎩 Reputace, `**${data.rep}** reputací`, true)
                // If the member is premium, display "Oui !" else display "Non..."
                .addField('👑 Premium', ((data.premium === 'true') ? 'Ano!' : 'Ne...'), true)
                // Display the creation date of the member
                .addField('📅 Zaregistrováno', `${data.registeredAt}`, true)
                // Display the level of the member
                .addField('📊 Level', `**${data.niv.level}**`, true)
                // Display the xp of the member
                .addField('🔒 XP', `**${data.niv.xp}** xp`, true)
                .setColor("RANDOM) // Sets the color of the embed
                .setFooter("</> v2.5a) // Sets the footer of the embed
                .setTimestamp();

            message.channel.send(profile_embed); // Send the embed in the current channel
            break;

exports.help = {
  name: "profile21",
  aliases: ["p"],
};
