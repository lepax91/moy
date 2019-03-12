const randomnsfw = require('random-puppy');
const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
	         let nsfwreddits = [
           'cocktwerking'
    ]
    let api = nsfwreddits[Math.round(Math.random() * (nsfwreddits.length - 1))];
      randomnsfw(api).then(api => {
           var theirembed = new Discord.RichEmbed()
            .setColor("RANDOM")
            .setImage(api)
      message.author.send(theirembed);
      message.channel.send("🔞 **_Příkaz sendtwerk byl úspěšně poslán do Private Message!**")
      })
}
module.exports.help = {
    name: "sendtwerk",
    aliases: []
}
