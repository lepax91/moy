const db = require("quick.db");
exports.run = async (Bot, message, args) => {

    let user = message.mentions.users.first() || message.author;
    let balance = await db.get(`userBalance_${user.id}`);
    if(balance === null) balance = 0;


    message.channel.send({embed: {
        title: `Celkem tvůj zůstatek`,
        color: 0x66cc00,
        description: `Tvůj zůstatek coins je: **$${balance}**`
    }});
};
exports.help = {
	name: "balance",
	aliases: []
}
