const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    let start = Date.now(); {
    let diff = (Date.now() - start);
    let API = (bot.ping).toFixed(2)

        let embed = new Discord.RichEmbed()
        .setTitle(`🔔 Pong!`)
        .setColor(0xff2f2f)
        .addField("📶 Latency", `${diff}ms`, true)
        .addField("💻 API", `${API}ms`, true)
        message.edit(embed);

    });

}

module.exports.help = {
    name: 'ping',
    aliases: ['p']
}
