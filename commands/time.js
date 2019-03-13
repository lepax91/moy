const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
var dnes = new Date()
let Den = dnes.toString().split(" ")[0].concat("den");
let Měsíc = dnes.toString().split(" ")[1]
let Rok = dnes.toString().split(" ")[3]
const embed = new Discord.RichEmbed()
      .setColor(`RANDOM`)
.addField("Dneska je", `\`${Den}\` ,\`${Měsíc}\` ,\`${Rok}\`\n\~`Den:`\` \`${dnes.toString().split(" ")[4]}\``)
message.channel.send({ embed })
    message.react("🕰")   
};
module.exports.help = {
    name: "time",
    aliases: []
}      
