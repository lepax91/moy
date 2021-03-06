const {bot} = require('../index');
const config = require("../config.json");

bot.on("ready", async () => {
    console.log(`${bot.user.username} is ready for action!`);
    if (config.activity.streaming == true) {
        bot.user.setActivity(config.activity.game, {
            url: 'https://twitch.tv/username'
        });
    } else {
        bot.user.setActivity(config.activity.game, {
            type: 'STREAMING'
        }); //PLAYING, LISTENING, WATCHI
    }
});
