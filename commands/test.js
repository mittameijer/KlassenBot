exports.run = (client, msg, args) =>{
    msg.channel.send(`${msg.channel.id} en ${msg.author.id}`);
};