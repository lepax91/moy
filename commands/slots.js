exports.run = async (client, message, args) => {
const Discord = require("discord.js")

    let slots = ["🍎", "🍌", "🍒", "🍓", "🍈"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));
    let name = message.author.displayName;
    let aicon = message.author.displayAvatarURL;

    if (slots[result1] === slots[result2] && slots[result3]) {
        let wEmbed = new Discord.RichEmbed()
            .setFooter("Vyhrál jsi!", aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Výsledek:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#f4e842");
        message.channel.send(wEmbed);
    } else {
        let embed = new Discord.RichEmbed()
            .setFooter('Prohral jsi!', aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Výsledek:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#f4e842");
        message.channel.send(embed);
    }

}
exports.help = {
    name: 'slots',
    aliases: [],
    description: 'Slot Machine',
    usage: 'slots'
} 

if ('this_is' == /an_example/) {
    of_beautifier();
} else {
    var a = b ? (c % d) : e[f];
}
