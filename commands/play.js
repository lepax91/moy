const Discord = require("discord.js");

module.exports.run = async (funo, message, args) => {
  if (!message.member.voiceChannel) return message.channel.send(new Discord.RichEmbed().setDescription(":x: **_Nejsi ve voice chatu, aby jsem mohl zapnout nějakou tu hudbu."))
  if (!funo.musicTasks[message.guild.id]) funo.musicTasks[message.guild.id] = new funo.musicTask(message.guild, message.member.voiceChannel)

  if (!args[0]) return message.channel.send(new Discord.RichEmbed()
    .setColor("RED")
    .setDescription("You must provide a link or a search query.")
  );

  var task = funo.musicTasks[message.guild.id]

  if (args[0].includes("youtube.com/") || args[0].includes("youtu.be/")) {
    task.addSong(args[0], message.channel, async (msg) => {
      message.channel.send(
        new Discord.RichEmbed()
          .setDescription(msg)
          .setColor("#eeff00")
      )
    })
  } else {
    var search = require('youtube-search');

    var opts = {
      maxResults: 5,
      key: funo.config.YOUTUBE_KEY
    };
    search(args.join(" "), opts, async (err, results) => {
      if (err) return console.log(err);

      message.channel.send(new Discord.RichEmbed()
        .setDescription("🕑 Načítání možností...")
        .setColor("#eeff00")
      ).then(async m => {
        if (!results[0]) await m.edit(new Discord.RichEmbed()
          .setDescription(":x: Žádný výsledek pro " + args.join(" "))
          .setColor("#ff0000")
        await m.react(funo.emojis.get("551607641533841429"))
        if (results[1]) await m.react(funo.emojis.get("551607641311281157"))
        if (results[2]) await m.react(funo.emojis.get("551607641588367363"))
        if (results[3]) await m.react(funo.emojis.get("551607641655476234"))
        if (results[4]) await m.react(funo.emojis.get("551607269595283468"))
        const filter = (reaction, user) => !user.bot && user.id == message.author.id
        var collector = await m.createReactionCollector(filter, { time: 15000 })
        collector.on('collect', async r => {
          try {
            switch (r.emoji.name) {
              case "_one":
                collector.stop()
                playUrl(results[0])
                break;
              case "_two":
                collector.stop()
                playUrl(results[1])
                break;
              case "_three":
                collector.stop()
                playUrl(results[2])
                break;
              case "_four":
                collector.stop()
                playUrl(results[3])
                break;
              case "_five":
                collector.stop()
                playUrl(results[4])
                break;
              default:
                break;
            }

            async function playUrl(url) {
              task.addSong(url.link, message.channel, async (msg) => {
                m.edit(
                  new Discord.RichEmbed()
                    .setDescription(msg)
                    .setColor("#19ff00")                 
                )
              })
            }
          } catch (err) {
            collector.stop()
          }
        })
        collector.on('end', async collected => {
          await m.clearReactions()
          if (collected.size == 0) {
            await m.edit(new Discord.RichEmbed()
              .setDescription("🤔 Bohužel si neklikl na žádnou reakci v 15 sekundách.")
              .setColor("#ff0000")
            )
          }
        })
        await m.edit(new Discord.RichEmbed()
          .setDescription("🎵 Zareaguj na tyto reakce, které jsou dóle.\n\n" + results.map(r => `**#${Number(results.indexOf(r)) + 1} [${r.title.replace(/\[/g, '').replace(/\]/g, '').substr(0, 43)}...](${r.link})**`).join("\n"))
          .setColor("#19ff00")
        )
      })
    });
  }
};

module.exports.help = {
  command: "Play",
  name: "play",
  category: "music",
  description: "Play a song",
  aliases: [
    "p"
  ]
};
