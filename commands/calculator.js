var math = require('mathjs');

exports.run = (bot, message, args, command) => {
    console.log(`[${message.author.tag}] [${message.author.id}] napsal command [${command}.js]`)
    let input = args.join(" ");
    if (!input) {
        message.reply('❌ | Musíš zadat nějaký příklad: **1+2**');
        return;
    }

    const question = args.join(" ");

    let answer;
    try {
        answer = math.eval(question);
    } catch (err) {
        return message.reply(`❌ | Tento symbol nepodporuje kalkulačku!`);
    }

    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
        .setThumbnail("https://images-na.ssl-images-amazon.com/images/I/31QYTepQomL.png")
        .setColor('RANDOM')
        .addField("📝 Příklad:", question, true)
        .addField("💻 Odpověď:", answer)

    message.channel.send({
        embed
    })
};


exports.help = {
    name: "calculator",
    aliases: ['math']
}
