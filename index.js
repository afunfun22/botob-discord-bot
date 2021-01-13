const Discord = require("discord.js");
const NekoClient = require('nekos.life');
const config = require("./config.json");
const { Client, MessageEmbed } = require('discord.js');
const client = new Discord.Client();
const neko = new NekoClient();

const perms = new Discord.Permissions();

const currentCommands = "```help, test, fuck you, what am I, where am I, kek or cringe, catgirl , furify```";
const prefix = "botob, ";

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
    message.channel.send("My current commands are: " + currentCommands);
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
    
    //message.channel.send(message.guild.iconURL());
  }
  if(command === "catgirl")
  {
    //message.channel.send(neko.sfw.neko());
    //console.log(neko.sfw.neko()); 
      
    //const catgirl;
    
    const cgType = args;

    if(message.guild.id != 706349539207938068)
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
      message.channel.send("wrong server")
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
        console.log(owo.owo);
        message.channel.send(owo.owo);

      }
  
      furify();
    }
   
    
  }
  
}); 

client.login(config.BOT_TOKEN);

