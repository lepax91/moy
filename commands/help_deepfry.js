const Discord = require('discord.js');
const { get } = require('snekfetch');

exports.run = async (client, message) => {
        
    const embed = new Discord.RichEmbed()
        .setTitle('Pomoc s Deepfry Příkazem')
        .setColor("RANDOM")
        .addEmbed("Jak používat deepfry příkaz? 🤔", "❗ Musíš použít .deepfry 1-100")
        .addEmbed("Upozornění!", "❗ Příkaz se může použít jen když přidáš fotku pro Dota která je vhodná pro něj!")
        .addEmbed("Potom když příkaz není vhodný pr Dota", "Napíše ti toto: 🤔 | Tento obrázek není podle mé velikosti")                          
    message.channel.send(embed);
}
exports.help = {
    name: "help deepfry",
    aliases: []
}
