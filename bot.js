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

client.user.setGame(`Stats Bot : BETA`,"http://twitch.tv/S-F")

client.user.setStatus("dnd")

});



client.on('message', message =>{
  if(message.content.startsWith(prefix + 'stats')){
  if(!message.guild.member(message.author).hasPermissions('MANAGE_CHANNELS')) return message.reply('❌ **لا تملك صلاحية**');
  if(!message.guild.member(client.user).hasPermissions(['MANAGE_CHANNELS'])) return message.reply('❌ **البوت لا يمتلك صلاحية**');
  message.guild.createChannel(`👑معلومات السيرفر👌:` , 'category')
  
    message.guild.createChannel(`"انتظر قليلا` , 'voice').then(time => {
    time.overwritePermissions(message.guild.id, {
      CONNECT: false,
      SPEAK: false
    });
  
  setInterval(() => {
      time.setName(`${message.guild.memberCount} <== عدد الكل `);
 },1000);
    });

 message.guild.createChannel(`"انتظر قليلا` , 'voice').then(time => {
  time.overwritePermissions(message.guild.id, {
    CONNECT: false,
    SPEAK: false
  });
setInterval(() => {
    time.setName(`${message.guild.members.filter(m =>!m.user.bot).size} <==  عدد الاعضاء `);
},1500);
});

message.guild.createChannel(`"انتظر قليلا` , 'voice').then(time => {
  time.overwritePermissions(message.guild.id, {
    CONNECT: false,
    SPEAK: false
  });
setInterval(() => {
    time.setName(`${message.guild.members.filter(m=>m.user.bot).size} <==  عدد البوتات `);
},2000);
});
}
});


client.on("message",async msg => {
    if(msg.content.startsWith(prefix + "clear")){
      let args = msg.content.split(" ").slice(1).join(" ");
      if(!args)  return msg.reply(`**${msg.content} <Number Messages Deleted?>**`)
      msg.reply("**Are You Sure Of The Deleted Messages?**").then(o => {
        o.react("✅")
        .then(()=> o.react('❎'))
        .then(()=> o.react("✅"))
        let reaction1 = (reaction,user) => reaction.emoji.name === "✅" && user.id === msg.author.id
        let reaction2 = (reaction,user) => reaction.emoji.name === "❎" && user.id === msg.author.id
        let react3 = o.createReactionCollector(reaction1, { time: 12300})
        let react4 = o.createReactionCollector(reaction2, { time: 12300})
        react3.on("collect", r => {
         msg.channel.bulkDelete(args)
          msg.reply(`**Done Deleted Messages ${args}**`).then(op => {
          op.delete(1200)
         o.delete(1200)
         msg.delete(1200)
       })
       react4.on("collect", r => {
        msg.reply(`**Done Deleted Messages Has Been Cancel**`).then(ob => {
          ob.delete(1200)
          o.delete(1200)
          msg.delete(1200)
        })
        })
      })
    })
    
    }
  });


client.on('message',async message => {
  if(message.content.startsWith(prefix + "server")) {
    let embed = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle(``${message.guild.name}``)
    .setThumbnail(message.guild.iconURL)
    .addField('• iD:', `- ${message.guild.id}`,true)
    .addField('• Owner:', `- ${message.guild.owner}`, true)
    .addField('• Channels:', ``#` ${message.guild.channels.filter(a => a.type === 'text').size} - `🎤` ${message.guild.channels.filter(a => a.type === 'voice').size}`, true)
    .addField('• Members:', ``Count` ${message.guild.memberCount} - `Last` ${Array.from(message.channel.guild.members.values()).sort((a, b) => b.joinedAt - a.joinedAt).map(m => `${m}`).splice(0, 1)}`, true)
    .addField('• AFK Channel:', `${message.guild.afkChannel || 'None'}`, true)
    .addField('• Other:', ``Roles` ${message.guild.roles.size} - `Emojis` ${message.guild.emojis.size} `[` ${message.guild.emojis.map(m => m).join(' **|** ')} `]``,true)
    .addField('• Region:', `${message.guild.region}`, true);

    message.channel.send(embed);
  }
});


client.login(process.env.BOT_TOKEN);
