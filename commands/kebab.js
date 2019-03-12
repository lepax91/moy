const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');

exports.run = async (client, message, args) => {
    const ahkEmbed = new Discord.RichEmbed()
        .setTitle(`Dotos Kebabos`)
        .setColor(`RANDOM`)
        .setDescription('Jsou tu zatím jen tři možnosti na vybraní a to jsou: `kebab`, `durum`, `vegan`')
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

        } else if (msg.content.startsWith("vegan")) {
            async function pineapple() {
                message.channel.send('❔ Jseš si fakt jistý, že si chceš koupit tento kebab?')
                const mesgs = await msg.channel.awaitMessages(messg => {
                    if (messg.content.startsWith("ano")) {
                        const ahkkkkEmbed = new Discord.RichEmbed()
                            .setTitle(`Vegan`)
                            .addField('🕒 Váš Vegan Kebab se už dělá!', 'Za chvíli bude váš Vegan Kebab hotov!')
                            .setDescription('💸 Celková cena tě bude stát **90 Kč**!')
                            .setColor(`RANDOM`)
                        message.channel.send({
                            embed: ahkkkkEmbed
                        })
                        return;
                    } else {
                        if (messg.content.startsWith("ne")) {
                            message.channel.send('Bohužel, škoda že sis neobjednal Vegan Kebab.')
                            return;
                        }
                    }

                }, {

                })
            }
            
        }
    }, {
        
    })
}

exports.pizza = {}

exports.help = {
    name: 'kebab',
    aliases: []
}
