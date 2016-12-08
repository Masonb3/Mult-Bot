/*
  A ping pong bot, whenever you send "ping", it replies "pong".
*/


// import the discord.js module
const Discord = require('discord.js');


// create an instance of a Discord Client, and call it bot
const bot = new Discord.Client();


// the token of your bot - https://discordapp.com/developers/applications/me
const token = '';


// the ready event is vital, it means that your bot will only start reacting to information
// from Discord _after_ ready is emitted.
bot.on('ready', () => {
  console.log('I am ready!');
});


//LIST OF COMMANDS - Learn how to write js later


var commands = {
  "HSInfo": {
    name: "Hearthstone Info",
    description: "Gets the stats, health, etc. of hearthstone card from tag",
    extendedhelp: "I can display results for a given hearthstone card.",
    usage: "< card name >",
    process: function(bot, msg, suffix) {
      var tags = suffix.split(" ");
        message.channel.sendMessage('Your card is:' + tags);
    }
  "Clear": {
    name: "Clear Messages",
    description: "Deletes a given number of messages",
    extendedhelp: "I can delete messages, just tell me how many.",
    usage: "< message amount >",
    process: function(bot, msg, suffix) {
      var tags = suffix.split(" ");
        //Check if tag is a number and is less than 100
        if(Number(messsage.content) !== 'Nan') {
          if(Number(message.content > 10)) {
            message.channel.sendMessage('I can only delete up to 10 messages at a time.')
          }
        message.channel.sendMessage('Deleting ' + tags ' messages.');
        } else {
          message.channel.sendMessage('Tag input is not a number.');
        }
    }
  }


  }
}


const prefix = '!';
// create an event listener for messages
bot.on('message', message => {

  if(!suffix) {
    message.channel.sendMessage('This command is invalid');
  }
  if(suffix) {
    if(commands[suffix]){ //Checks for valid command
      var command_called = commands[suffix];
      if(command_called.hasOwnProperty('AdminOnly')) { //Restricted commands
        message.channel.sendMessage('This command is for admins only.');
      }
      if(command_called.hasOwnProperty('TimeOut')) {
        message.channel.sendMessage('This command has a cooldown of ' + command_called.TimeOut + ' seconds.')
      }
    }
  }

/* OLD COMMAND SYSTEM
  // if the message is "ping",
  if (message.content.startsWith(prefix)) {
    switch(message.content) {
      case("!AveryBot"):
        message.channel.sendMessage('Boy, do I sure LOVE Bill Clinton');
        break;
      case("!HSInfo"):
        //Suffix not made yet, uncomment when finished
        //message.channel.sendMessage('Card: ' + suffix);
        break;
    }
    // send "Boy, do I sure love Bill Clinton" to the same channel.
    //message.channel.sendMessage('Boy, do I sure love Bill Clinton!');
  }
*/
});


// log our bot in
bot.login(token);
