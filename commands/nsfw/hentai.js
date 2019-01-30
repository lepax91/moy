const superagent = require("superagent");
const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {


    if (!message.channel.nsfw) return message.channel.send("Šerife, Jseš si opravdu jistý že jsi v jistém kanále? 🤔");
         // return 
        superagent.get('https://nekos.life/api/v2/img/hentai')
            .end((err, response) => {
                var lewdembed = new Discord.RichEmbed()
                    .setTitle(`Pěkný anime holky`)
                    .setImage(response.body.url)
                    .setColor("RANDOM")
                    .setFooter("kuchař pepe vaří speciální semeno 👌", bot.user.displayAvatarURL)
                    .setTimestamp();
                message.channel.send(lewdembed);
            });
    
}

module.exports.help = {
    name: "hentai",
    aliases: []
}
