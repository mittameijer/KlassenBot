
exports.run = (client,msg,args, crclient, options) =>{
    crclient.readEvents(options).then(function(response){
        var event = response.events;
        msg.channel.send(`Je les is ${event}`);
    })
}