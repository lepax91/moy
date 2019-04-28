const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (Bot, message, args) => {

    let coolDown = 10800000;
    let amount = 250;

    let lastDaily = await db.get(`lastDaily_${message.author.id}`);

    if(lastDaily !== null && coolDown - (Date.now() - lastDaily) > 0) {
        let timeObj  = ms(coolDown - (Date.now() - lastDaily));

        message.channel.send({embed: {
            title: "Ups!",
            color: 0xcc0000,
            description: `:x: **Daily si můžeš vyzvednout každý 3 hodiny** | **Zbývá ti celkem:** **${timeObj.hours}h a ${timeObj.minutes}m**`
        }});
    } else {
        message.channel.send({embed: {
            title: "Daily Reward",
            color: 0x00FF00,
            description: `Daily byl úspěšně vyzvednuty, dostáváš celkem: **$${amount}**. `,
            footer: "</> Ty peníze k něčemu budou, ale musíš si ještě počkat.."
        }});

        db.set(`lastDaily_${message.author.id}`, Date.now());
        db.add(`userBalance_${message.author.id}`, 250);
    }

};
exports.help = {
    name: "daily",
    aliases: []
} 
