const superagent = require("snekfetch");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    superagent.get('http://random.birb.pw/tweet/')
        .end((err, response) => {
         const catembed = new Discord.RichEmbed()
        .setTitle('🐦 Bird | To je roztomilý!')
        .setColor("RANDOM")
        .setImage(response.body.url)
    message.channel.send(catembed);
      });
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    permLevel: "User"
};

exports.help = {
    name: "bird",
    aliases: [],
    category: "Animals",
    description: "Post a random image of a bird",
    usage: "bird"
};
