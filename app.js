const Discord = require("discord.js");
const Enmap = require("enmap");
const calander = require("./calander.js")
const fs = require("fs");
const client = new Discord.Client();
const config = require("./config/Config.json");
client.config = config;

 client.on('ready', async () =>{
  await console.log("KlassenBot Geladen!");
  await calander.getCalander();
});

 client.on('message', async msg =>{
  if (msg.author.bot) return;
  if(msg.content.indexOf(config.prefix) !== 0) return;
  if(msg.content == `${config.prefix}lessen`){
    var list = calander.list.join('\n');
  }
});


client.login(config.token);