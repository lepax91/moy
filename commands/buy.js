const db = require("quick.db");

exports.run = (client, message, args) => {
  
  const embed = client.embed
  
  if(args[0] === "gay"){
    
    if(db.get(`verify_${message.author.id}`) === ":white_check_mark:"){
      
      embed.setColor("RANDOM")
      embed.setTitle("Error")
      embed.setDescription(":x: **_Proč by si chtěl být zase Gay?_**")
      
      message.channel.send(embed)
      return
    
    
    if(money === 1 || money > 1){
    
      db.subtract(`money_${message.author.id}`, 1)
      db.set(`verify_${message.author.id}`, ":white_check_mark:")
      
      
      
      //client.db.add(`money_${message.author.id}`, 1000000000)
      
      
      embed.setColor("RANDOM")
      embed.setDescription("**🏳️‍🌈 Právě teď sis koupil že si gay.**")
      
      message.channel.send(embed)
      return
    } 
    if(money != 1){
      embed.setColor("RANDOM")
      embed.setTitle("Error occured")
      embed.setDescription(":x: **_To mi chceš vážně říct, že na toto nemáš peníze?_**")
      
      message.channel.send(embed)
      return
    }
    
  }else{ 
  
  embed.setTitle("Error occured")
  embed.setColor("RANDOM")
  embed.setDescription("Prozatím jen **.buy gay** :-)")
  embed.setFooter("</> Celkem za měsíc, bude příkaz shop)  
  message.channel.send(embed)
  return   
    
  };
};
