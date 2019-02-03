var Twitter = require('twitter');
var Discord = require('discord.js')
var Filter = require('bad-words'),
    filter = new Filter();
var tweetlink = "https://twitter.com/IrasBot1"; //twitter profile here

const tweetend = new Discord.RichEmbed()
    //yea... remove the emoji thing if ur bot is not in my server
    .setTitle("<:tweet:459345194291036171> Tweet Tweet! <:tweet:459345194291036171>")
    .setDescription(`Check your tweet out! ${tweetlink}`)
    .setColor("#008000")
const tweeterror = new Discord.RichEmbed()
    .setTitle("Tweet Failed")
    .setDescription("The tweet failed Please try again later.")
    .setColor("#F90000")
const tweernoargs = new Discord.RichEmbed()
    .setTitle("Tweet Failed")
    .setDescription("You must type something to tweet!")
    .setColor("#F90000")
const tweernoargs2 = new Discord.RichEmbed()
    .setTitle("Tweet Failed")
    .setDescription("The tweet includes a bad word.")
    .setColor("#F90000")
exports.run = async (bot, message, args) => {
    /*
    if(message.author.id !== '160836854453633024' && message.author.id !== '427040024513609729') return;
    
    */
    if (!args.join(" ")) return message.channel.send(tweernoargs);
    //remove the swear filter if you want i would not recomend it cause it can get u banned if peeps abuse
    if (filter.clean(args.join(" ")).includes("*")) return message.channel.send(tweernoargs2)
    const whattotweet = args.join(" ")
    var client = new Twitter({
        //get these from the twitter developer thingy

        consumer_key: 'no',
        consumer_secret: 'no',
        access_token_key: 'no-no',
        access_token_secret: 'no'
    });
    //I would recomend putting a note like i did so that ur twitter account does not get banned for some reason xd
    client.post('statuses/update', {
        status: whattotweet + " \n\n --NOTE: This is not posted nor condoned by Ira's Bot\n\n Posted by: " + message.author.tag
    }, function(error, tweet, response) {
        if (!error) {
            message.channel.send(tweetend)
            console.log(message.author.tag + " Tweeted " + whattotweet)
        }
        if (error) {
            message.channel.send(tweeterror)
            console.log(error)
        }
    });
}
exports.help = {
    name: "tweet",
    aliases: [],
    category: "Fun",
    desc: "Tweet something to twitter."
}
