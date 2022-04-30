const Discord = require('discord.js');

const client = new Discord.Client();



client.one('ready', () => {
    console.log('Bot Online');
});



client.login('OTQ5MjkwOTU4MzA0OTg5MjA1.YiIOGQ.dwRgzxaeoBNtWtTbRtvq1WEzhhs');
