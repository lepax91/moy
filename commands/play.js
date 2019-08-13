const getytid = require('get-youtube-id')
const ytinfo = require('youtube-info')
const key = process.env.yt
const get = require('request')
const dl = require('ytdl-core')

var queue = []
var isPlaying = false

module.exports.run = (bot, message, args) => {
  const m = message.member
  const vc = m.voiceChannel
  const msg = args.join(" ");
  if (!msg) return message.channel.send(">>> :warning: Zadejte do jakéhokoliv kanálu příkaz ``.play` k tomu URL nebo název hudby.")
  if (!vc) return message.channel.send(">>> :warning: Musíš se připojit do Voice Chatu.");
  
  if (queue.length > 0 || isPlaying) {
    getID(msg, (id) => {
      addqueue(id)
      ytinfo(id, (err, info) => {
        if (err) throw new Error(err);
        const discord = require('discord.js');
        const embed = new discord.RichEmbed()
        .addField("⏭️ Přidáno do fronty", `Přidaná hudba jménem **${info.title}** do fronty!`)
        .setTimestamp()
        .setColor("GREEN")
        message.channel.send({embed: embed})
      })
    })
  } else {
    isPlaying = true
    getID(msg, (id) => {
      queue.push(id)
      play(id, message)
      ytinfo(id, (err, info) => { 
        const discord = require('discord.js')
        const embed = new discord.RichEmbed()
        .addField("▶️ Nyní hraje", `Začala hrát hudba jménem **${info.title}** v **${vc.name}**.`)
        .setTimestamp()
        .setColor("GREEN")
        message.channel.send({embed: embed})
      })
    })
  }
}

function play(id, message) {
  var voicechannel = message.member.voiceChannel;
  voicechannel.join().then(conn => {
    stream = dl(`https://youtube.com/watch?v=${id}`, {
      filter: "audioonly"
    })
      var dispatcher = conn.playStream(stream)
      dispatcher.on('end', () => {
        if (queue.length > 0) {
          queue.shift()
          play(queue[0], message)
        } else {
          voiceChannel.leave()
          const embed = new discord.RichEmbed()
          .addField("⏭️ Konec fronty!", `Skončila fronta v ${voicechannel.name}.`)
          .setTimestamp()
          .setColor("RANDOM")
          message.channel.send({embed: embed})
        }
      })
  })
}

function getID(str, cb) {
  if (isYt(str)) {
    cb(getytid(str))
  } else {
    searchyt(str, (id) => {
      cb(id)
    })
  }
}

function addqueue(strID) {
  queue.push(strID)
}

function searchyt(q, cb) {
  get(`https://www.googleapis.com/youtube/v3/search?part=id&type=video&q=${encodeURIComponent(q)}&key=${key}`, (err, res, body) => {
    var json = JSON.parse(body)
    if (json.items) {
      cb(json.items[0].id.videoId);
    }
  })
}

function isYt(str) {
  return str.toLowerCase().indexOf("youtube.com") > -1;
}

module.exports.help = {
  name: "play",
  aliases: []
}

module.exports.queue = queue
