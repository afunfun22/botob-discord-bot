const Discord = require("discord.js");
const config = require("./config.json");
const client = new Discord.Client();

const prefix = "botob, ";

client.on("message", function(message) { 
  if(!message.content.startsWith(prefix)) return;                       

  //const commandBody = message.content.slice(prefix.length);
  //const args = commandBody.split(' ');
  const commandBody = message.content.slice(prefix.length);
  const command = commandBody.toLowerCase()         

  if (command === "ping") 
  {
    const timeTaken = Date.now() - message.createdTimestamp;
    message.reply(`Pong! I had a reaction time of ${timeTaken}ms. Faster then you! >:)`);             
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

}); 

client.login(config.BOT_TOKEN);
