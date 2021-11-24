const Discord = require('discord.js');
const tpoints = {};
const prefix = "¬"
const vpoints = {};
const jimp = require("jimp");
const client = new Discord.Client();

client.on("ready", () =>{

  console.log(` Online bot ${client.user.tag}!`);

  client.user.setPresence({

    status: "idle",

    game: {

       name: "Music Mixer ✨",

       type: "Playing",

    }

  });

});



client.login("Token lera dane");
