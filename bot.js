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

client.user.setGame(`Bot : Beta`,"http://twitch.tv/S-F")

client.user.setStatus("dnd")

});


client.on('message', function(msg) {
        let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
        let region = {
            "brazil": "Brazil",
            "eu-central": "Central Europe",
            "singapore": "Singapore",
            "Russia": "Russia",
            "us-central": "U.S. Central",
            "sydney": "Sydney",
            "us-east": "U.S. East",
            "us-south": "U.S. South",
            "us-west": "U.S. West",
            "eu-west": "Western Europe",
            "vip-us-east": "VIP U.S. East",
            "london": "London",
            "amsterdam": "Amsterdam",
            "hongkong": "Hong Kong"
        };
      
          if (msg.content.startsWith(prefix + 'server')) {
          if (!msg.guild) return message.reply('**Only Servers | :x:**')
      console.log(`${msg.author.username} Has Ran Server Command`)
          let embed = new Discord.RichEmbed()
          .setColor('RANDOM')
          .setThumbnail(msg.guild.iconURL)
          .setTitle(`${msg.guild.name}`)
          .addField('**[❖] Server Name | اسم السيرفر**',`[** __${msg.guild.name}__ **]`,true)
          .addField('**[❖] OwnerShip | مؤسس السيرفر**',`**${msg.guild.owner}**`,true)
          .addField('**[❖] Server ID | معرف السيرفر**',`**${msg.guild.id}**`,true)
          .addField('**[❖] Members Count | عدد الاعضاء**',`[** __${msg.guild.memberCount}__ **]`,true)
          .addField('**[❖] Verification Level | مستوي الحمايه**',`[** __${verifLevels[msg.guild.verificationLevel]}__** ]`,true)
          .addField('**[❖] Region | البلد**',`[** __${region[msg.guild.region]}__** ]`,true)
          .addField('**[❖] Text Channels | رومات كتابيه**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
          .addField('**[❖] Voice Channels | رومات صوتيه**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
          .addField('**[❖] Created At | صنع في**',msg.guild.createdAt.toLocaleString())
          msg.channel.send({embed:embed});
        }
      });


client.on('message', message =>{//ping
if(message.content.startsWith(prefix  +  'ping'))  {
let start = Date.now(); message.channel.send('pong').then(message => { 
message.edit(`
Discord API: ${client.ping.toFixed(0)} ms`);
  });
  }
});


client.on('message', message => {
            if (message.content.startsWith("!$ownerbot1")) {
     let embed = new Discord.RichEmbed()
.addField(' عدد السيرفرات التي بها',`[${client.guilds.size}]  `)
.addField(' عدد الاعضاء ',` [${client.users.size}] `)
.addField('الغرف ',`[${client.channels.size}]`) 
.addField(' البنق ',`[${Date.now() - message.createdTimestamp}]`) 
.addField(' Devloper : ! Lost#7888 ')
.setColor('#7d2dbe')
  message.channel.sendEmbed(embed);
    }
});


client.on("message", message => {
                      if(message.content === 'رابط' ) {
						  message.channel.send('**شيك الخاص يحلو 😉**').then(msg => {
							  msg.edit('★ تم ارسال الرابط في الخاص')
						  
						  });
                        message.channel.createInvite({
                        thing: true,
                        maxUses: 10,
                        maxAge: 86400
                        }).then(invite =>
       
							   message.author.sendMessage(invite.url)
							  
                             )						 
					}});


client.on('message', async msg =>{
    var prefix = '§';//هنا البريفيكس
    if (msg.author.bot) return undefined;
    if (!msg.content.startsWith(prefix)) return undefined;
   
    let args = msg.content.split(' ');
 
    let command = msg.content.toLowerCase().split(" ")[0];
    command = command.slice(prefix.length)
 
    if(command === `ping`) {//هنا الكوماند
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle("Your Ping!!")
    .setDescription(`${client.ping} ms`)
    .setFooter(`${msg.author.tag}`);
    msg.delete().catch(O_o=>{})
    msg.channel.send(embed);
    }
});//Alpha Codes_LioNDz


client.on("message", message => {
    var prefix = "#";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
 if (!args[1]) {
                                let x5bz1 = new Discord.RichEmbed()
                                .setDescription("clear <number>")
                                .setColor("#0000FF")
                                message.channel.sendEmbed(x5bz1);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let x5bz2 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(x5bz2);
                            }
                          }
});


client.on('message', message => {
    if(message.content.startsWith(prefix+'sup')) {
  const embed = new Discord.RichEmbed()
    .setTitle("Invite Link")
    .setDescription(`suport server **[here](https://discord.gg/UfsDKM6)**`)
    .setColor('RANDOM');
    
        message.author.send(embed)
}
});


client.on('message', message => {
   let embed = new Discord.RichEmbed()

    let args = message.content.split(' ').slice(1).join(' ');
     if(!message.channel.guild) return;
if(message.content.split(' ')[0] == '$bc') {
         message.react("✔️")
          let embed = new Discord.RichEmbed()
    .setColor("#FF00FF")
    .setThumbnail(message.author.avatarURL)   
                                      .addField('تم الارسال بواسطة :', "<@" + message.author.id + ">")
                 message.channel.sendEmbed(embed);
        message.guild.members.forEach(m => {
            var bc = new Discord.RichEmbed()
.addField('**● Sender  :**', `*** → ${message.author.username}#${message.author.discriminator}***`)
            .addField('***● Server  :***', `*** → ${message.guild.name}***`)               
    .setColor('#ff0000')
                 .addField('ّ', args)
            m.send(``,{embed: bc});
        });
    }
})


client.on('message', message => {
    if (message.content === ('$iDhoom123')) {
    message.channel.send({
        embed: new Discord.RichEmbed()
            .setColor('RANDOM')
            .addField('**Servers🌐**',`__ ${client.guilds.size} __ `)
           .addField('**Users👥**',`__ ${client.users.size} __`)
             .addField('**Channels📚**',`__ ${client.channels.size} __`)
    })
}
});



client.on('message', message => {
     if (message.content === "$help") {
     let embed = new Discord.RichEmbed()
.setThumbnail(message.author.avatarURL)
.addField('     **$ping* ' ,' **سرعة إتصال البوت** ')
.addField('     **soon**  ' ,' **معلومــات عــن حســابــك** ')
.addField('     **$server** ' ,' ** معلومات عن السيرفر**')
.addField('     **soon** ' , '**صورتك في الدسكورد أو صورة الشخص المذكور**')
.addField('     **soon** ' ,' ** ** ')
.addField('     **soon** ' ,' ** أوآمر الإدآرة ** ')
.addField('     **soon ** ' ,' ** للطرد  ** ')
.addField('     **$bc ** ' ,' ** للبرودكاست ** ')
.addField('     **$bc 100** ' , '**لـ مسح الشات** ')
.addField('     **soon** ' , '**لـ اظهار الرتب الخاصة في السيرفر** ')
.addField('**لدعوة البوت للسيرفر ..**' , '**https://discordapp.com/api/oauth2/authorize?client_id=561556008556822528&permissions=0&scope=bot=0**')
.setColor('RANDOM')
  message.channel.sendEmbed(embed);
    }
});


client.on('message',async message => {


    if (message.content.startsWith(prefix + "invite")) {
        if(message.author.bot) return;
        const args = message.content.split(' ').slice(prefix.length);
    var uses = args[0];
    var age = args[1];

    if (!uses) {
        return message.reply('لقد نسيت ان تقول كم عدد المستخدمين');
    }
    if (!age) {
        message.reply('لقد نسيت ان تقول كم مده انتهاء الرابط');
        age = await 0;
    }

    uses = await uses.toString(); 

    if (uses.indexOf('.') !== -1) {
        return message.reply(''); 
    }

    age = await age.toString();

    if (age.indexOf('s') !== -1) { 
        age = await age.replace(/s.*/, '');
    } else if (age.indexOf('m') !== -1) { 
        var agemin = await age.replace(/m.*/, '');
        age = await agemin * 60;
    } else if (age.indexOf('h') !== -1) { 
        var agehour = await age.replace(/h.*/, '');
        age = await agehour * 60 * 60;
    } else if (age.indexOf('d') !== -1) { 
        var ageday = await age.replace(/d.*/, '');
        age = await ageday * 60 * 60 * 24;
    } else {
        if (age.indexOf('.') !== -1) {
            return message.reply('لا. فقط ارقام'); 
        }
        age = await age; 
    }

    message.channel.createInvite({ maxUses: uses, maxAge: age }).then((invite) => {

        message.channel.send(`**
هذا رابطك:  \`${invite}\`
المستخدمين : \`${5}\`
مده الانتهى : \`${age}\`
**`);
    });
};
});


client.on("message", (message) => {

   if (message.content.startsWith("$تذكرة")) {   
        const reason = message.content.split(" ").slice(1).join(" ");  
        if (!message.guild.roles.exists("name", "Support Team")) return message.channel.send(`لازم تسوي رتبة اسمها \`Support Team\` وتنطي البوت ادمنيتر حتا يقدر يسوي الرومات ويعدل برمشنات`);
        if (message.guild.channels.exists("name", "ticket-{message.author.id}" + message.author.id)) return message.channel.send(`You already have a ticket open.`);    /// ALPHA CODES
        message.guild.createChannel(`ticket-${message.author.username}`, "text").then(c => {
            let role = message.guild.roles.find("name", "Support Team");
            let role2 = message.guild.roles.find("name", "@everyone");
            c.overwritePermissions(role, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });   
            c.overwritePermissions(role2, {
                SEND_MESSAGES: false,
                READ_MESSAGES: false
            });
            c.overwritePermissions(message.author, {
                SEND_MESSAGES: true,
                READ_MESSAGES: true
            });
            message.channel.send(`:white_check_mark: تم انشاء تذكرتك, #${c.name}.`);
            const embed = new Discord.RichEmbed()
                .setColor(0xCF40FA)
                .addField(`Hey ${message.author.username}!`, `:white_check_mark:  تم انشاء تذكرتك, #ticket`)
                .setTimestamp();
            c.send({
                embed: embed
            });
        }).catch(console.error);
    }
 
 
  if (message.content.startsWith("$close")) {
        if (!message.channel.name.startsWith(`$yas`)) return message.channel.send(`You can't use the close command outside of a ticket channel.`);
 
       message.channel.send(`لأغلاق التذكرة قم بكتابة الأمر التالي | $yas`)
           .then((m) => {
               message.channel.awaitMessages(response => response.content === '.confirm', {
                       max: 1,
                       time: 10000,
                       errors: ['time'],
                   })  
                   .then((collected) => {
                       message.channel.delete();
                   })   
                   .catch(() => {
                       m.edit('Ticket close timed out, the ticket was not closed.').then(m2 => {
                           m2.delete();
                       }, 3000);
                   });
           });
   }
 
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

  if (msg.content === prefix + '123123123123') { ///////////// Galal , ALPHA CODES  
      msg.channel.send(at_reply + msg.author.id); ///////////// Galal , ALPHA CODES 
  };

  if (msg.content === prefix + '123123123123123123123123') { ///////////// Galal , ALPHA CODES 
      msg.channel.send(at_reply + msg.channel.name + '  ' + '<' + msg.channel.id + '>'); ///////////// Galal , ALPHA CODES 
  }; ///////////// Galal , ALPHA CODES 
 
}); ///////////// Galal , ALPHA CODES


});


client.login(process.env.BOT_TOKEN);
