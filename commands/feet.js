const Discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async(bot, message, args) => {
    
    let {body} = await superagent
    .get(`https://nekos.life/api/v2/img/feet`);
    if (!message.channel.nsfw) return message.reply(" Jseš si jistý, že toto je správný kanál? 🤔");
  
    let hentaiEmbed = new Discord.RichEmbed()
    .setTitle("Hentai Feet 🍆")
    .setImage(body.url)
    .setColor("RANDOM")
    message.channel.send(hentaiEmbed);

}

module.exports.help = {
    name: "feet",
    aliases: []
}
