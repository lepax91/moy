exports.run = (client, message, args) => {
  
  const embed = client.embed
  .setTimestamp()
  
  if(!args.join(" ")) {
    
    embed.setTitle("Error")
    embed.setColor(client.color.RED)
    embed.setDescription(":x: Chceš si napsat jakékoliv pohlaví prosím.. zadej pohlaví.. Příklad: ``.setsex <pohlaví>``")
    
    message.channel.send(embed)
    return
  };
  
  embed.setTitle("Tvoje pohlaví bylo úspěšně nastaveno")
  embed.setColor("RANDOM")
  embed.setDescription(":white_check_mark: Vaší pohlaví bylo nastaveno na: **" + args.join(" ") + "**")
  
  client.db.set(`sex_${message.author.id}`, args.join(" "))
  
  message.channel.send(embed)
};
exports.help = {
  name: "setsex",
  aliases: []
}
