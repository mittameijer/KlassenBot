const discord = require("discord.js");
const config = require('./config/config.json');
const client = new discord.Client();;




client.on('message', msg =>{
    if(msg.author.bot) return;
    if(msg == `${config.prefix}tpc`){
        if(msg.author.tag == config.admin){
            turnonpc();
        }else{
            msg.channel.send('Jij bent niet de bot admin sorry!')
        }
    }else if(msg == `${config.prefix}test`){
        msg.channel.send(`AuthorID: ${msg.author.tag} en ChannelID: ${msg.channel.id}`);
    }
});


function turnonpc(msg){
    msg.channel.send("Ik ben hier nog mee bezig!");
    return;
}

client.login(config.token);