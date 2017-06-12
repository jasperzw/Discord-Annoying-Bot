//functions


// Import the discord.js module
const Discord = require('discord.js');
const ffmpeg = require('ffmpeg');
const botToken = require('./tokensAndApiKeys').botToken.key;

// Create an instance of a Discord client
const client = new Discord.Client();

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted

var stdin = process.openStdin();

stdin.addListener("data", function(d) {
    var input = d.toString().trim();
    if(input !== "test") {
        var channel = client.channels.find("id", "179589684949680128");
        channel.send(input)
    } else {

    }
});

client.on('ready', () => {
  console.log('I am ready!');
  //console.log(client.channels.get("name", "general")); //probleem met channel id verkrijgen en .sendMessage function
});

client.on('message', message => {

//console.log(message.guild.channels.array()[4].members.array());
  if (message.author.discriminator === "5893"){
    message.delete(10000);
  } else if ((message.author.discriminator === "5769" || message.content === "!test") && (message.channel.id === "179589684949680128")) {
   message.reply("Onvoldoende");

   //Laurens zoeken
    var chantemp = message.guild.channels.array();
    var tVoice = 0;

    console.log ("begonnen met Scannen");
    var succes = 0;

    for (var i = 0; i < chantemp.length; i++) {
        console.log(i);

     if(chantemp[i]["type"] === "voice"){

         tVoice = i;

         console.log("Begonnen met scan voice kanaal ", chantemp[tVoice]["name"]);
         console.log("tVoice = ", tVoice);
         console.log(chantemp[tVoice].members.array().length);

         var tempHoeveel = chantemp[tVoice].members.array().length;
         for (k = 0; k < tempHoeveel; k++) {

             if(chantemp[tVoice].members.array()[k]["user"]["discriminator"] === "5769"){
                 chantemp = message.guild.channels.find("id", chantemp[tVoice]["id"]);
                 console.log("Laurens gespot en if functie uitgevoerd");
                 succes = 1;
                     chantemp.join().then(connection => {
                         connection.playFile("OnvoldoendeNew.mp3").on("end", end => {
                         console.log("klaar met bestand afspelen");
                     connection.disconnect();
                     })
                 })
             }

         }
     }
    }

    if (succes === 0){
        console.log("het is niet gelukt om laurens in een voice channel te vinden")
    }

} else {
    console.log(message.content + "||" + message.author.username);
  }
})
client.login(botToken);
