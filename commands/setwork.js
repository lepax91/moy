exports.run = (client, message, args) => {
  
  const embed = client.embed
  .setTimestamp()
  
  if(!args.join(" ")) {
    
    embed.setTitle("Error")
    embed.setColor("RANDOM")
    embed.setDescription(":x: **Prosím, zadej nějaké povolání do Profilu.**")
    
    message.channel.send(embed)
    return
  };
  
  embed.setTitle("Povolání bylo nastaveno!")
  embed.setColor("RANDOM")
  embed.setDescription("Nastaveno: **" + args.join(" ") + "**")
  
  client.db.set(`bio_${message.author.id}`, args.join(" "))
  
  message.channel.send(embed)
};
exports.help = {
  name: "setwork",
  aliases: []
}
