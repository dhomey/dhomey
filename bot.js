const Discord = require("discord.js");

const client = new Discord.Client();

var prefix = "$";

client.on('ready', () => {

   console.log(`----------------`);

      console.log(`Desert Bot- Script By : i1Suhaib`);

        console.log(`----------------`);

      console.log(`ON ${client.guilds.size} Servers '     Script By : i1Suhaib ' `);

    console.log(`----------------`);

  console.log(`Logged in as ${client.user.tag}!`);

client.user.setGame(`Bot Onilne`,"http://twitch.tv/S-F")

client.user.setStatus("dnd")

});

client.on('message', message => {
if(!message.channel.guild) return;
if (message.content.startsWith("$ping")) {
    message.channel.sendMessage(`Pong ! `${Date.now() - message.createdTimestamp} ms`:watch:`);
    }
});


client.login(process.env.BOT_TOKEN);
