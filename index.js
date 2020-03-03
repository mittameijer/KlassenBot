const discord = require("discord.js");
const url = require('url');
const http = require('http');
var address = "http://localhost:8080/index.html?on=yes";
const client = new discord.Client();
const config = require('./config/config.json');

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

client.login(config.token);

function turnonpc(){
    http.request(address);
}