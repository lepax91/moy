exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
  const responses = [
    "Popřemýšlím... Tak to ne kámo.",
    "Ano, ale možná i ne.",
    "Zkus se zeptat později.",
    "Na tuhle otázku si přišel jak?",
    "Pokud si myslíš že napíšu Ano, tak sry ale ne.",
    "seš gay no",
  ];
  message.channel.send(`🎱 ${responses.random()}`);
};
exports.help = {
  name: "8ball",
  aliases: []
}
