const Discord = require('discord.js');
const client = new Discord.Client();

const prefix = '!'

client.on('ready', () => {
    console.log('bot is ready');

});

client.login('config.BOT_TOKEN');