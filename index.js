const Discord = require("discord.js");
const NekoClient = require('nekos.life');
const config = require("./config.json");
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client();
const neko = new NekoClient();

const ytdl = require('ytdl-core');
const perms = new Discord.Permissions();

const currentCommands = "```help, test, fuck you, what am I, where am I, kek or cringe, catgirl, furify, do you like randybot, hi, fuck me, github```";
const prefix = "botob, ";




function checkArray(checkedvalue, checkedarray)
{
  
}

client.on('ready', () => {
  console.log('BOTOB, Reporting for Duty!');
});

client.on("message", function(message) { 
  if(!message.content.startsWith(prefix)) return;                       

  //const commandBody = message.content.slice(prefix.length);
  
  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(':');
  const command = args.shift().toLowerCase();

  if (command === "help")
  {
    message.channel.send('My prefix is `' + prefix.toString() + "`. To add an argument to a command, use `:`, and then your argument.");
    message.channel.send("My current commands are: " + currentCommands);
    message.channel.send("VC Commands: ```kill me, please stop```")
    //message.channel.send("Uh, it seems like `catgirl` and `where am I` aren't in tip-top shape right now... so stay away from those.");
  }
  
  if (command === "test") 
  {
    const timeTaken = Date.now() - message.createdTimestamp;
    const msgUser = message.author;
    const msgServer = message.guild.name;
    message.channel.send(`I had a reaction time of ${timeTaken}ms. You are ${msgUser}, in ${msgServer}.`);
    if(msgUser.id === "270714283782963210")    
    {
      message.channel.send(`Also, hi KOTOB.`);
    }     
    console.log("Used Ping command in " + message.guild.name);    
  }

  if (command === "fuck you") 
  {
    message.reply(`I'd love that.`);             
  }      
  
  if (command === "what am i") 
  {
    message.channel.send('I wish I knew.');  
    message.channel.send(message.author.displayAvatarURL());
  }              
  
  if(command === "kek or cringe")
  {
    const randValue = Math.floor(Math.random() * 2)
    if(randValue === 0)
    {
      message.channel.send("kek");
    }
    if(randValue === 1)
    {
      message.channel.send("cringe");
    }
  }
  if(command === "where am i")
  {
    message.channel.send("Loading...");
   
    message.channel.send("You are in the " + message.guild.name + " server. " + message.guild.memberCount + " users are here. Was created on " + message.guild.createdAt + ".");
    message.channel.send("Your current channel is " + message.channel.name + ". Was created at " + message.channel.createdAt);
    //message.channel.send("You are in " + message.author.locale.toString() + ".");
    //console.log(message.author);
    
    //message.channel.send(message.guild.iconURL());
  }
  if(command === "catgirl")
  {
    //message.channel.send(neko.sfw.neko());
    //console.log(neko.sfw.neko()); 
      
    //const catgirl;
    
    const cgType = args;

    if(message.guild.id != 706349539207938068 && message.guild.id != 739445567947538533)
    {
      async function test()
      {
        //console.log(args); 
        const catgirl = await neko.sfw.neko();
        console.log(catgirl);
        message.channel.send(catgirl.url);

      }
    
      test();
    }
  
    else
    {
      message.channel.send(message.guild.name + " was blacklisted. Sorry.")
    }
  
  }

  if(command === "furify")
  {
    
    if(args.toString() === "")
    {
      message.channel.send("Use `furify: <your text>` to become a catgirl")
    }

    if(args.toString() != "")
    {
      async function furify()
      {
        console.log(args.toString()); 
       const owo = await neko.sfw.OwOify({text: args});
        console.log(await owo.owo);
        message.channel.send(await owo.owo);

      }
  
      furify();
    }
   
    

  }
  
  if(command === "say")
  {
    console.log("called say command");
    if(message.author.id.toString() === "270714283782963210")
    {  
      message.channel.send(args.toString());
      message.delete();
    }
    else if(message.author.id.toString() != "270714283782963210")
    {
     message.channel.send("You aren't the real kotob!");
    }
    if(message.author.id === config.RANDYID)
    {
      
      message.channel.send("but I love you anyways randy :heart:");
      
    }
  } 

  if(command === "do you love randybot")
  {
    message.channel.send("Yes I do!");
    message.channel.send("randybot, i love you");
  }
  
  if(command === "hi")
  {
    const randValue = Math.floor(Math.random() * config.GREETINGS.length)
    message.channel.send(config.GREETINGS[randValue] + ", " + message.author.username + "!");
  }
  if(command === "fuck me")
  {
    message.channel.send("I wish.")
  }
 
if(command === "join me asasdsasdasdasdsdad")
{
  if (message.member.voice.channel) 
  {
    const connection = message.member.voice.channel.join();
    connection.play('audio\dunkachinno.mp3');
    
    //dispatcher.on('finish', () => {
     // dispatcher.destroy();
    //  console.log('Finished playing!');
  //  });
  
  } 
  else 
  {
    message.reply('go join a voice channel first');
  }
}
if(command === "dunkachinno")
{
  //connection.play('audio\dunkachinno.mp3');
}
if(command === "github")
{
  message.channel.send("You can poke me at https://github.com/afunfun22/botob-discord-bot/")
}

}); 

client.on('message', async message => {
  // Voice only works in guilds, if the message does not come from a guild,
  // we ignore it
  if (!message.guild) return;

  const commandBody = message.content.slice(prefix.length);
  const args = commandBody.split(':');
  const command = args.shift().toLowerCase();

  if (command === 'kill me') {
    // Only try to join the sender's voice channel if they are in one themselves
    if (message.member.voice.channel) {
      if(args.toString() === "")
      {
        message.channel.send("Link a youtube video :) Example: ```botob, kill me: https://www.youtube.com/watch?v=6ZECSHTrlSo```");
      }
      const connection = await message.member.voice.channel.join();
      const dispatcher = connection.play(ytdl(args.toString(), { filter: 'audioonly' }));

      dispatcher.on('finish', () => {
        console.log('Finished playing!');
        dispatcher.destroy();
        connection.disconnect();
      });
    } else {
      message.reply('You need to join a voice channel first!');
    }

  }
  if (command === 'please stop')
  {
    const connection = await message.member.voice.channel.join();
    const dispatcher = connection.play(ytdl(args.toString(), { filter: 'audioonly' }));
    connection.disconnect();
  }

});

client.login(config.BOT_TOKEN);
