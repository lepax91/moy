const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let apiKey = process.env.WEATHERAPI;
    const fetch = require('node-fetch');
    let arg = args.join(" ").slice(0);
    if (!arg) {
        return message.reply(':warning: Požadováno město či vesnice, příkaz nebude fungovat.');
    }
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + arg + `&APPID=` + apiKey + `&units=metric`)
    .then(res =>{
       return res.json(); 
    }).then(json =>{
        if (json.main === undefined) {
            return message.reply(`:warning: **${arg}** není město ani vesnice.`);
        }
    let embed = new Discord.RichEmbed()
    .setColor("#000FF")
    .setTitle(`:flag_${json.sys.country.toLowerCase()}: ${json.name}`)
    .addField(`🌦️ Stupně`, `${json.main.temp}°C`, true)
    .addField("🌪️ Rychlost větru", `${json.wind.speed}MPH`, true)
    .addField("🌬️ Vlhkost Vzduchu", `${json.main.humidity}%`, true)
    .setFooter("Požadované od  " + message.author.username.author.avatarURL)
    message.channel.send({embed})
    .catch(console.error);
}).catch(err => {
    if (err) {
        message.channel.send(':warning: Toto není chyba příkazu, chyba je v API.. Pokud chcete můžete kontaktovat <@417403958814965771>');
    }
});
};
module.exports.help = {
    name: "weather",
    aliases: []
}
