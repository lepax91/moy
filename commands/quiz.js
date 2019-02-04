const Discord = require('discord.js');
const quiz = [
  { q: "Jaký byl můj největší projekt na Discordu?", a: ["dot"] },
  { q: "Dokonči větu aby se rýmovala: _Otrok viděl velký ..._ ", a: ["potok", "kokot"] },
  { q: "Vyjmenuj aspoň jeden meme, který znaš nazpaměť.", a: ["big chungus", "uganda knuckles", "sanic", "deja vu"] },
];
const options = {
  max: 1,
  time: 30050,
  errors: ["time"],
};

module.exports.run = async (bot, message, args) => {
  
  const item = quiz[Math.floor(Math.random() * quiz.length)];
  await message.channel.send(item.q);
  try {
    const collected = await message.channel.awaitMessages(answer => item.a.includes(answer.content.toLowerCase()), options);
    const winnerMessage = collected.first();
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor(`Výherce tohoto kvízu je: ${winnerMessage.author.tag}`, winnerMessage.author.displayAvatarURL)
                                 .setTitle(`Správná Odpověď: \${winnerMessage.content}\``)
                                 .setFooter(`Otázka: ${item.q}`)
                                 .setColor(message.guild.me.displayHexColor)
                                })
  } catch (_) {
    return message.channel.send({embed: new Discord.RichEmbed()
                                 .setAuthor('❌ | Nikdo neodpověděl!')
                                 .setColor("RED")
                                 .setDescription(`Správná odpověď(i): \`${item.a}\``)
                                 .setFooter(`Otázka: ${item.q}`) })
  }
}
module.exports.help = {
name: "quiz",
aliases: []
}
