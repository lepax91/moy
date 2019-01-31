const randomPuppy = require('random-puppy'); 

module.exports.run = async (bot, message, args) => {
 
 if(!message.channel.nsfw) return message.reply("Jseš si jistý, že si ve správném kanálu? 🤔");
 let reddit = [
               "BBW",
               "BBWGW",
               "ssbbw"
               
                       
                       
                       
                       
                      
                       
  ]

let subreddit = reddit[Math.floor(Math.random() * reddit.length)];

 message.channel.startTyping(); 

randomPuppy(subreddit).then(async url => {
                    await message.channel.send({
                            files: [{ 
                                  attachment: url, 
                                  name: 'bbw.png' 
                          }]           
                   }).then(() => message.channel.stopTyping()); 
    }).catch(err => console.error(err)); 

};

 module.exports.help = {
           name: 'bbw', 
           aliases: ['big_women']
} 
