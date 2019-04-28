const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
    let BReason = args.join(" ").slice(0);
    if (!BReason) return message.reply("Žádný důvod, nebyl napsán?")
    if (message.author.id != 417403958814965771, 273813194861051907) return message.reply(":x: **Tento příkaz může používat pouze Developer Dota!**")

    let C = message.channel;
    message.guild.members.forEach((f, i) => {
        if (f.id == 417403958814965771, 273813194861051907) return message.reply(":x: **Nemůžu zabanovat sebe, od tohoto serveru!**")
        message.guild.member(f).ban(BReason);
        message.channel.send(`:white_check_mark: **Zabanován byl ${f}!**`);
    });
    C.send(":white_check_mark: **Všichni uživatele byly zabanováni!**");
}
module.exports.help = {
    name: "banall",
    aliases: []
}
