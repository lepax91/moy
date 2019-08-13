const Discord = require("discord.js");

exports.run = async (bot, message, args) => {
  let suggestion = args.join(" ").slice(0);
  let user = message.author;
  let guild = message.guild;
  let channel = client.channels.get("553921599733235724")
  let embed = new Discord.RichEmbed()
    .setTitle("✅ | Návrh")
    .setThumbnail("https://www.snapsuggest.com/images/app-icon-512x512.png")
    .addField("Návrh", suggestion)
    .addField("Uživatel", `${user.tag} (${user.id})`)
    .addField("Server", `${guild.name} (${guild.id})`)
    .setColor("RANDOM")

  message.channel.send("✅ | **Váš návrh byl úspěšně poslán do Dot | Community & Support!**")
  channel.send(embed).then(i => i.react("⏳"))

}
// ADD DESCRIPTION AND SUCH
exports.help = {
    name: "suggest",
    aliases: []
}
