const randomPuppy = require('random-puppy'); 

module.exports.run = async (bot, message, args) => {
 
 if(!message.channel.nsfw) return message.reply("Jseš si jistý, že si ve správném kanálu? 🤔");
 let reddit = [
               "HentaiRequests",
               "hentai",
               "Thick Hentai"
                       
                       
                       
                       
                       
                      
                       
  ]

let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

 message.channel.startTyping(); 

randomPuppy(subreddit).then(async url => {
                    await message.channel.send({
                            files: [{ 
                                  attachment: url, 
                                  name: 'hentai.png' 
                          }]           
                   }).then(() => message.channel.stopTyping()); 
    }).catch(err => console.error(err)); 

};

 module.exports.help = {
           name: 'hentai', 
           aliases: ['tiddes']
} 