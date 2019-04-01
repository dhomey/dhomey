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

client.user.setGame(`$help | $invite`,"http://twitch.tv/S-F")

client.user.setStatus("dnd")

});



client.on('message', msg => { ///////////// Galal , ALPHA CODES 

  const at_reply = ('<@' + msg.author.id + '>  '); ///////////// Galal , ALPHA CODES 

  if (msg.author.bot) return; ///////////// Galal , ALPHA CODES 

  if (msg.content === prefix + 'ping') { ///////////// Galal , ALPHA CODES 
      msg.channel.send(at_reply + 'pong  ' + `${ Math.round(client.ping) }` + 'ms');
      console.log('pong  ' + `${ Math.round(client.ping) }` + 'ms');
  };
 
  if (msg.content === prefix + 'avatar') { ///////////// Galal , ALPHA CODES 
      msg.channel.send(at_reply + msg.author.avatarURL); ///////////// Galal , ALPHA CODES 
  };

  if (msg.content === prefix + 'id') { ///////////// Galal , ALPHA CODES  
      msg.channel.send(at_reply + msg.author.id); ///////////// Galal , ALPHA CODES 
  };

  if (msg.content === prefix + 'ch_id') { ///////////// Galal , ALPHA CODES 
      msg.channel.send(at_reply + msg.channel.name + '  ' + '<' + msg.channel.id + '>'); ///////////// Galal , ALPHA CODES 
  }; ///////////// Galal , ALPHA CODES 
 
}); ///////////// Galal , ALPHA CODES


client.login(process.env.BOT_TOKEN);
