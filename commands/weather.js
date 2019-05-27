const sf = require('snekfetch');
const Discord = require('discord.js');
const config = require('../config/config.json');
// TODO: Use a map to log the usage of each key

exports.run = async (client, message, args) => {
    if (!args[0]) {
        return message.channel.send('🌍 Prosím, zadejte stát/město/vesnice.');
    }
        let loc = encodeURIComponent(args.join('+'));
        let res = await sf.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(loc)}&key=${config.GOOGLEKEY}`);
        if (res.body.results.length === 0) {
            return message.channel.send(':warning: Nic nebylo nalezeno, zkontrolujte jestli jste to zadali správně.');
        }
        let resS = res.body.results[0];
        let geocodelocation = resS.formatted_address;
        let params = resS.geometry.location.lat + ',' + resS.geometry.location.lng;
        let wea = await sf.get(`https://api.darksky.net/forecast/${config.WEATHERKEY[Math.floor(config.WEATHERKEY.length * Math.random())]}/${params}?exclude=minutely,hourly,flags&units=si`);
        let tempF = Math.round(wea.body.currently.temperature);
        let humidity = `${wea.body.currently.humidity * 100}%`;
        let wind = wea.body.currently.windSpeed;
        let cloudCover = `${wea.body.currently.cloudCover * 100}%`;

        const embed = new Discord.RichEmbed()
            .setTitle('Weather | ' + geocodelocation)
            .setDescription(wea.body.daily.summary)
            .addField(':thermometer: Stupeň', `${Math.round(wea.body.currently.apparentTemperature)}°C)`, true)
            .addField(':sweat_drops: Vlhkost Vzduchu', `${humidity}`, true)
            .addField(':wind_blowing_face: Ryclost Větru', `${wind} m/s`, true)
            .addField(':white_sun_small_cloud: Pokrytí Mraku', `${cloudCover}`, true)
            .addField(':sunny: UV Index', wea.body.currently.uvIndex, true)
            .addField(':parking: Tlak', wea.body.currently.pressure + ' hPa', true)
            .setFooter("v1.5a | Dot Development Project")
            .setTimestamp();
        message.channel.send({embed});
}
exports.help = {
    name: "weather",
    aliases: []
   
}
