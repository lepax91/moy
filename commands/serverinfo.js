const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
    let verifLevels = ["Žádná", "Nízky", "Střední", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let region = {
        "brazil": ":flag_br: Brazílie",
        "eu-central": ":flag_eu: Střední Evropa",
        "singapore": ":flag_sg: Singapur",
        "us-central": ":flag_us: Střední Amerika",
        "sydney": ":flag_au: Sydney",
        "us-east": ":flag_us: Východní Amerika",
        "us-south": ":flag_us: Jižní Amerika",
        "us-west": ":flag_us: Západní Amerika",
        "eu-west": ":flag_eu: Západní Evropa",
        "vip-us-east": ":flag_us: V.I.P Východní Amerika",
        "london": ":flag_gb: Londýn",
        "amsterdam": ":flag_nl: Amsterdam",
        "hongkong": ":flag_hk: Hong Kong",
        "russia": ":flag_ru: Rusko",
        "southafrica": ":flag_za:  Jižní Afrika"
    };
    const embed = new Discord.RichEmbed()
        .setAuthor(message.guild.name, message.guild.iconURL)
        .addField("Jméno", message.guild.name, true)
        .addField("ID", message.guild.id, true)
        .addField("Majitel", `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`, true)
        .addField("Oblast", region[message.guild.region], true)
        .addField("Celkový Počet | Lidí | Boti", `${message.guild.members.size} | ${message.guild.members.filter(member => !member.user.bot).size} | ${message.guild.members.filter(member => member.user.bot).size}`, true)
        .addField("Úroveň Ověření", verifLevels[message.guild.verificationLevel], true)
        .addField("Kanál", message.guild.channels.size, true)
        .addField("Role", message.guild.roles.size, true)
        .addField("Datum Vzniku", `${message.channel.guild.createdAt.toUTCString().substr(0, 16)} (${checkDays(message.channel.guild.createdAt)})`, true)
        .setThumbnail(message.guild.iconURL)
    message.channel.send({embed});
}

module.exports.help = {
  name:"serverinfo",
  aliases: []
}
