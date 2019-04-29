const parse = require('parse-ms')

exports.run = async (client, message, args) => {
    let coolDown = 10800000;
    let amount = client.db.get(`dailyreward_${message.author.id}`)
    
    if(amount === null) amount = 100;
  
    if(client.db.get(`2x_${message.author.id}`) === true) amount = 200
  
    let lastDaily = await client.db.get(`lastDaily_${message.author.id}`);

    if(lastDaily !== null && coolDown - (Date.now() - lastDaily) > 0) {
        let timeObj  = parse(coolDown - (Date.now() - lastDaily));

        message.channel.send({embed: {
            title: "Error",
            color: 0xff0000,
            description: `:x: Daily už sis vyzvednul! Musíš počkat 3 hodiny na další daily | Zbývá ti: ${timeObj.hours}h a ${timeObj.minutes}m`
        }});
    } else {
        message.channel.send({embed: {
            title: "Daily Reward",
            color: 0x66ff99,
            description: `:white_check_mark: **Daily bylo úspěšné vyzvednuto, teď musíš čekat 3 hodiny na další!** `
        }});
      
      

        client.db.set(`lastDaily_${message.author.id}`, Date.now());
        client.db.add(`money_${message.author.id}`, amount);
    }
};
exports.help = {
    name: "daily",
    aliases: []
}
