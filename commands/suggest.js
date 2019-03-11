const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  let suggestion = args.join(" ").slice(0);
  let user = message.author;
  let guild = message.guild;
  let channel = client.channels.get("553921599733235724")
  let embed = new Discord.RichEmbed()
    .setTitle("**_Návrh - Dot | Community & Support_**")
    .setThumbnail("https://www.snapsuggest.com/images/app-icon-512x512.png")
    .addField("Návrh", suggestion)
    .addField("Uživatel", `${user.tag} (${user.id})`)
    .addField("Kanál (Kde byl poslán návrh)", `${guild.name} (${guild.id})`)
    .setColor("#f49542")

  message.channel.send("✅ | **Váš návrh byl úspěšně poslán do Dot | Community & Support!**")
  channel.send(embed).then(i => i.react("⏳"))

}
// ADD DESCRIPTION AND SUCH
exports.help = {
    name: "suggest",
    aliases: []
}
