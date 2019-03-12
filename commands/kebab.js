const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (bot, message, args) => {
    const ahkEmbd = new Discord.RichEmbed()
        .setTitle(`Chutný Kebab podle Dota`)
        .setColor(`RANDOM`)
        .setDescription('Jsou tu zatím jen dvě možnosti na vybraní a to jsou: `kebab`, `durum`')
        .setFooter('Kebaby se přidají, jen to musí počkat.. 😄')
        .setTimestamp()
    message.channel.send({
        embed: ahkEmbed
    })



    const msgs = await message.channel.awaitMessages(msg => {
        if (msg.content.startsWith("kebab")) {
            const ahkkEmbed = new Discord.RichEmbed()
                .setTitle(`Normalní Kebab`)
                .setColor(`RANDOM`)
                .addField('🕒 Kebab se momentálně už dělá!', 'Za chvíli už bude hotový váš kebab!')    
                .setDescription(`💸 Kebab tě bude stát **75 Kč!**`)
            message.channel.send({
                embed: ahkkEmbed
            })
            return;
        } else if (msg.content.startsWith("durum")) {
            const ahkkkEmbed = new Discord.RichEmbed()
                .setTitle(`Dürüm`)
                .setColor(`RANDOM`)
                .addField('🕒 Dürum už je na cestě!', 'Za chvíli bude Dürüm hotov!')
                .setDescription('💸 Dürüm tě bude stát celkem **120 Kč**')
            message.channel.send({
                embed: ahkkkEmbed
            })        
                        }
                    }

                }, {

                })      
   
    })
}
exports.help = {
    name: 'kebab',
    aliases: []
}
