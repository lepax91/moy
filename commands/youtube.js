const Discord = require("discord.js");

module.exports.run = async (client, message, args) => {



    let youtube = args.slice(0).join('+');

        let link = `https://www.youtube.com/results?search_query=` + youtube;
        if(!youtube)return message.reply(':x: **| Takhle to nefunguje.. Funguje to jen takhle: `.youtube <tary>`**')
        if(!link)return message.reply(":x: **| Konsole vyhledala jakousi chybu.**")
        let embed = new Discord.RichEmbed()
 
         
     .setColor("RED")
         
          .setTimestamp()
        
          .addField('Akce:', 'Vyhledávaní v Youtube')

          .addField("Slovo:", `${args.slice(0).join(' ')}`)

          .addField('Odkaz:', `${link}`)
         
          .setFooter("Verze: 1.2", message.author.avatarURL);          
                
                         message.channel.send(embed);
}



module.exports.help = {
    name: "youtube",
    aliases: []
}
