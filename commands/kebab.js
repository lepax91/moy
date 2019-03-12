const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');

exports.run = async (client, message, args) => {
    const ahkEmbed = new Discord.RichEmbed()
        .setTitle(`Pepeho Kebabárna`)
        .setColor(`RANDOM`)
        .setDescription('Máme velmi dobré kebaby podle Gustava: `pepperoni`, `cheese`, and `pineapple`');
    message.channel.send({
        embed: ahkEmbed
    })



    const msgs = await message.channel.awaitMessages(msg => {
        if (msg.content.startsWith("kebab")) {
            const ahkkEmbed = new Discord.RichEmbed()
                .setTitle(`Kebab (Normal`)
                .setColor(`RANDOM`)
                .addEmbed(`Hodně si tě vážím, že sis objednal tento skvělý kebab!`, ``)
                .setDescription(`Kebab tě stojí velmi málo, protože si první zákazník!`)
                .setDescription(`**_Kebab tě bude stát: 26 Kč!_**`)
            message.channel.send({
                embed: ahkkEmbed
            })
            return;
        } else if (msg.content.startsWith("durum")) {
            const ahkkkEmbed = new Discord.RichEmbed()
                .setTitle(`Durum`)
                .setColor(`RANDOM`)
                .setDescription(`Durum ti fakt doporučuji, je to fakt velmi dobrá pochutina!`)
                .setDescription(`**_Celková částka: 100 Kč_**`)
            message.channel.send({
                embed: ahkkkEmbed
            })

        } else if (msg.content.startsWith("vegan")) {
            async function pineapple() {
                message.channel.send('Jseš si fakt jistý, že si chceš koupit tento kebab?')
                const mesgs = await msg.channel.awaitMessages(messg => {
                    if (messg.content.startsWith("ano")) {
                        const ahkkkkEmbed = new Discord.RichEmbed()
                            .setTitle(`Vegan "Odporný" Kebab`)
                            .setDescription(`To seš teda fakt odporný, že sis koupil tento kebab.`)
                            .addEmbed(`Toto teda fakt dělat nebudu, ani nechápu proč to tu máme.`, ``)
                            .setColor(`RANDOM`)
                        message.channel.send({
                            embed: ahkkkkEmbed
                        })
                        return;
                    } else {
                        if (messg.content.startsWith("ne")) {
                            message.channel.send('Tak to jsem velice rád, že sis to neobjednal!')
                            return;
                        }
                    }

                }, {
                    time: 50000
                })
            }
            pineapple()
        }
    }, {
        time: 500000
    })
}

exports.pizza = {}

exports.help = {
    name: 'kebab',
    aliases: []
}
