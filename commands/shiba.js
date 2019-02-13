const Discord = require("discord.js"),
    superagent = require("superagent");
module.exports.run = async (client, message, args) => {
    let {
        body
    } = await superagent
        .get(`http://shibe.online/api/shibes?count=1&urls=true&httpsUrls=false`);
    const dogembed = new Discord.RichEmbed()
        .setTitle("Aww... Shiba! 😍")
        .setColor("RANDOM")
        .setImage(body.url)
    message.channel.send(dogembed);

}
module.exports.help = {
    name: "shiba",
    aliases: []
}
