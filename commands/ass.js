exports.run = async (client, message, args, level) => { // eslint-disable-line no-unused-vars
  if (message.channel.nsfw === true) {
    const { get } = require('superagent')
    .get('https://botlist.space/bot/539139339741954099/upvote')
    .query({ id: message.author.id })
    .end((err, res) => {
      var check = res.body.voted;
      if (check == true) {
          const { get } = require('superagent')
         .get('https://nekobot.xyz/api/image')
         .query({ type: 'ass' }) 
         .end((err, res) => {
          message.channel.send(res.body.message)
         });
        } else {
          message.channel.send({embed: {
            title: "Pouze Up-voteři!",
            url: "https://botlist.space/bot/539139339741954099/upvote",
            description: "Tento příkaz je pouze pro ty, kteří dali upvote Dotovy!",
            fields: [{
                name: "Běž tam mrsknout ten upvote!",
                value: "https://botlist.space/bot/539139339741954099/upvote"
              }
            ],
            timestamp: new Date(),
            footer: {
              icon_url: client.user.avatarURL,
              text: "Verze: 1.5"
            }
          }
          });
        }
    });
    } else {
      message.channel.send({embed: {
          description: "this isn't NSFW channel!"
      }})
    }
};

exports.conf = {
enabled: true,
guildOnly: true,
permLevel: "User"
};

exports.help = {
name: "ass",
aliases: [],
category: "NSFW",
description: "it sends ass porn picture, what were you expected?",
usage: "ass"
};
