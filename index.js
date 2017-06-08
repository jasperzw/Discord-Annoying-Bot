/*
  Send a user a link to their avatar
*/

// Import the discord.js module
const Discord = require('discord.js');

// Create an instance of a Discord client
const client = new Discord.Client();

// The ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted
client.on('ready', () => {
  console.log('I am ready!');
});

// Create an event listener for messages
client.on('message', message => {
  // If the message is "what is my avatar"
  if (message.author.discriminator === "4027") {
    message.reply("Onvoldoende");
  }
});
client.login('MzIyMjk4MzcwNzQxODk1MTY5.DBqjWA.-VfE-QEOpuGaREeZ0YV-9KJ8AM0');