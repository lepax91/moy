const Discord = require("discord.js");
const randompuppy = require('random-puppy');


module.exports.run = async (bot, message, args) => {
 

    let api = "redpandas"
      randompuppy(api).then(api => {
           const theirembed = new Discord.RichEmbed()
	    .setAuthor("🐼 Červená Panda | Vždy se zobrazí random obrázek.")
            .setColor(0x2aff00)
            .setImage(api)
            .setFooter("Kuchař Pepe 👌")
            .setTimestamp();
      message.channel.send(theirembed)
      })
     }
   

 module.exports.help = {
           name: 'redpanda',
           aliases: ['red']
}    
