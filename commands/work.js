var isInCooldown = cooldowns.work.get(message.author.id);
            if(isInCooldown){
                /*if the timestamp recorded in the database indicating 
                when the member will be able to execute the order again 
                is greater than the current date, display an error message */
                if(isInCooldown > Date.now()){
                    var delai = convertMs(isInCooldown - Date.now()); 
                    return message.reply(`vous devez attendre ${delai} avant de pouvoir de nouveau travailler !`);
                }
            }
    
            // Records in the database the time when the member will be able to execute the command again (in 6 hours)
            var towait = Date.now() + ms('6h');
            cooldowns.work.set(message.author.id, towait);
