exports.run = (client, message, args) => {
  
  const embed = client.embed
  .setTimestamp()
  
  if(!args.join(" ")) {
    
    embed.setTitle("Error")
    embed.setColor(client.color.RED)
    embed.setDescription(":x: **Prosím, zadej Věk do tvého profilu.**")
    
    message.channel.send(embed)
    return
  };
  
  embed.setTitle("Věk byl nastaven!")
  embed.setColor("RANDOM")
  embed.setDescription("Nastaveno: **" + args.join(" ") + "**")
  
  client.db.set(`age_${message.author.id}`, args.join(" "))
  
  message.channel.send(embed)
};
exports.help = {
  name: "setage",
  aliases: []
}
