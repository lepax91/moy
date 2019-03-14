const superagent = require("snekfetch");

exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
    superagent.get('https://animals.anidiots.guide/panda')
        .end((err, response) => {
         const catembed = new Discord.RichEmbed()
        .setTitle('🐼 Panda | To je roztomilý!')
        .setColor("RANDOM")
        .setImage(response.body.url)
    message.channel.send(catembed);
});


exports.conf = {
    enabled: true,
    guildOnly: true,
    permLevel: "User"
};

exports.help = {
    name: "panda",
    aliases: []
};
