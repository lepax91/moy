const Discord = require('discord.js');
const db = require('quick.db')
const ms = require('parse-ms')
exports.run = (client, message, args) => {
        
    let timeout = 7200000 // 24 hours in milliseconds, change if you'd like.
        let time = ms(timeout - (Date.now() - timeout));

          message.channel.send(`Právě sis vybral svůj Daily Reward, přijď za 2 hodiny.. Zbývá ti: **${time.hours}h ${time.minutes}m ${time.seconds}s**`)
      } else {
        const low = require('lowdb')
        const FileSync = require('lowdb/adapters/FileSync')
        const adapter = new FileSync('./db.json')
        const db = low(adapter)
        db.defaults({ description: [], credits: [], note: []}).write()
        var author = message.author.id;
       
    if (!db.get("credits").find({ auteur: author }).value()) {
        db.get("credits").push({ auteur: author, credits: 500 }).write()
 
        } else {
  
          var usercreditsdb = db.get("credits").filter({ auteur: author  }).find('credits').value()
  
          var credits = Object.values(usercreditsdb)
  
          db.get("credits").find({ auteur: author }).assign({ auteur: author, credits: credits[1] += 500 }).write()   
    }
    message.channel.send(":white_check_mark: **Právě jste získali 500 kreditů. Počkejte prosím 2 hodiny, než tuto akci provedete znovu.**")   
}
module.exports.help = {
    name: "daily",
    aliases: []
}
