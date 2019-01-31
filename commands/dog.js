const Discord = require("discord.js");
const randompuppy = require('random-puppy');


module.exports.run = async (bot, message, args) => {
 

    let api = "dogs"
      randompuppy(api).then(api => {
           const theirembed = new Discord.RichEmbed()
	    .setAuthor("🐶 Pes | Vždy se zobrazí random obrázek.")
            .setColor(0x2aff00)
            .setImage(api)
            .setFooter("Kuchař Pepe 👌")
            .setTimestamp();
      message.channel.send(theirembed)
      })
     }
   

 module.exports.help = {
           name: 'dog',
           aliases: ['dogs']
}    
