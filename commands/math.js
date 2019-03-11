const Discord = require("discord.js");
const math = require("mathjs");

module.exports.run = async (bot, message, args) => {
    if(!args[0]) return message.channel.send(":x: | Prosím zadej příklad.")

    let resp;
    try {
        resp = math.eval(args.join(' '));
    } catch (e) {
        return message.channel.send(":x: | Neplatný, Prosím zadej platný příklad.");
    }

    const embed = new Discord.RichEmbed()
    .setColor(0xffffff)
    .setTitle(`**_Matematika_**`)
    .addField('Příklad', `\`\`\`js\n${args.join(" ")}\`\`\``)
    .addField('Odpověď', `\`\`\`js\n${resp}\`\`\``);

    message.channel.send(embed);

}


module.exports.help = {
    name: "math",
    aliases: 
  }
