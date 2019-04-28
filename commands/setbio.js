
exports.run = (client, message, args) => {
  
  const embed = client.embed
  .setTimestamp()
  
  if(!args.join(" ")) {
    
    embed.setTitle("Error")
    embed.setColor(client.color.RED)
    embed.setDescription(":x: **Prosím, zadej nějakou informaci o sobě do Bio.**")
    
    message.channel.send(embed)
    return
  };
  
  embed.setTitle("Bio byl nastaven!")
  embed.setColor(client.color.RANDOM)
  embed.setDescription("Nastaveno: **" + args.join(" ") + "**")
  
  client.db.set(`bio_${message.author.id}`, args.join(" "))
  
  message.channel.send(embed)
};
exports.help = {
  name: "setbio",
  aliases: []
}
