const Discord = require("discord.js");
//const ms = require("ms")

module.exports.run = async (bot, message, args) => {
   var embed = new Discord.RichEmbed()
   .setAuthor(" <:emoji_11:556131307520786442> Dot")
   .setColor("RANDOM")
   .setTimestamp()
   .addField(name="📗 **Information** [9]", "`help`, `info`, `ping`, `uptime`, `avatar`, `icon`, `emojis`")
   .addField(name=":o: **User Informations** [3]", "`serverinfo`, `roleinfo`, `servers`")
   .addField(name=":closed_lock_with_key: **Developer Commands** [3]", "`quit`, `emojiids`, `banall`")
   .addField(name=":clap: **Text Commands** [3]", "`clapify`, `emojify`, `reverse`")
   .addField(name=":printer: **Internet Commands** [4]", `wiki`, `google`, `youtube`, `spotify`, `npm`")
   .addField(name="<:FeelsHappyHugMan:542781371157053451> **Fun** [9]", "`penis`, `howgay`, `meme`, `8ball`, `vtip`, `fakt`, `math`, `achievement`, `slots`")
   .addField(name=":crossed_swords: **Statistic Commamds** [1]", "`fortnite`")
   .addField(name=":thinking: **Mention Commands** [4]", "`hug`, `kiss`, `slap`, `tickle`")
   .addField(name=":cat: **Animals** [3]", "`dog`, `cat`, `bird`")		
   .addField(name="🔞 **NSFW** [11]", "`ass`, `hentai`, `pussy`, `snapchat`, `4k`, `amateur`, `traps`, `hanal`, `public`, `pgif`, `thigh`")
   .addField(name="<:emoji_10:555014607056404491> (NSFW) **Private Message** [3]", "`sendnudes`, `sendtwerk`, `sendhentai`")
   .addField(name=" <:4206_lmaolancer:542781373157736458> **Memes with Fun** [3]", "`deepfry`, `text`, `isthisa`",
   .addField(name="⚒️ Supporting [2]", value="`report`, `suggest`")
   .addField(name=":ribbon: **Holiday Commands** [2]", "`svatek`, `zitra`")
   .addField(name="<:9175_moderation_hammer:542781370687160330> **Moderation** [7]", "`ban`, `warn`, `say`, `poll`, `purge`, `kick`, `unban`")
   .addField(name="🎵 **Music** [9]", "`play`, `skip`, `stop`, `song`, `queue`, `volume`, `pause`, `mutemusic`, `unmutemusic`")
   message.channel.send(embed)
}

module.exports.help = {
    name: "help",
    aliases: []
}
