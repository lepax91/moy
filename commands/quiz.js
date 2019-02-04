const Discord = require('discord.js');
const quiz
  { q: "Ve větě jsou chyby oprav: bily sme toma, kde sme lustyli kryzovky.", a: ["Byly jsme doma, kde jsme luštili křížovky."] },
  { q: "Může byt ve slově, mýt tvrdé y?", a: ["Ano", "ano"] },
  { q: "Tyto slova mají chybu oprav je: mněký, ztrom, sub, bit, víška", a: ["měkký, strom, zub, byt, výška", "měkký, strom, byt, víška] }                         
];
const options = {
  max: 1,
  time: 30050,
  errors: ["time"],
};

module.exports.run = async (bot, message, args) => {
  
  const item = quiz[Math.floor(Math.random() * quiz.length)];
  await message.channel.send(item.q)
  try 
    const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    const winnerMessage = collected.first();
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor(`✅ Správně! | Výherce tohoto kvízu je: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
                                 .setTitle(`Správná Odpověď: \`${winnerMessage.content}\``)
                                 .setFooter(`Otázka: ${item.q}`)
                                 .setColor(message.guild.me.displayHexColor)
                                })
    } catch (_) {
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor('❌ Žádná odpověď!')
                                 .setTitle(`Správná Odpověď (i): \`${item.a}\``)
                                 .setFooter(`Otázka: ${item.q}`)
                                })
  }
}
module.exports.help = {
name: "quiz",
aliases: []
}
