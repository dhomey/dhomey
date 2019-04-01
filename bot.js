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

client.user.setGame(`Bot : BETA`,"http://twitch.tv/S-F")

client.user.setStatus("dnd")

});


client.on("message", message => {
    var prefix = "$";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
 if (!args[1]) {
                                let x5bz1 = new Discord.RichEmbed()
                                .setDescription("#clear <number>")
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



client.on("message", msg => {//Alpha Codes 
    var Alpha = '$';//البرفكس
    if(msg.content.startsWith(Alpha + "دعوة")){//Alpha Codes 
        let e = new Discord.RichEmbed()//Alpha Codes 
        .setTitle("**اضافه البوت لسيرفرك**")//Alpha Codes 
       .setDescription(`**📬 | اذا تريد البوت يرسلك الرابط بخاصك
       📇 | اذا تريد البوت يرسلك الرابط هنا بالشات**`)
        msg.channel.send(e).then(b => {
            b.react('📇')
            .then(() => b.react('📬'))
            .then(() =>b.react('📇'))
            let reaction1Filter = (reaction, user) => reaction.emoji.name === '📇' && user.id === msg.author.id;
let reaction2Filter = (reaction, user) => reaction.emoji.name === '📬' && user.id === msg.author.id;

let reaction1 = b.createReactionCollector(reaction1Filter, { time: 12000 });
let reaction2 = b.createReactionCollector(reaction2Filter, { time: 12000 });
reaction1.on("collect", r => {
msg.reply(`https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=0&scope=bot`)
b.delete(2000)
})
reaction2.on("collect", r => {
    msg.author.send(`${msg.author} https://discordapp.com/api/oauth2/authorize?client_id=${client.user.id}&permissions=0&scope=bot`)
    b.delete(2000)
    msg.reply("**تم ارسال الرابط في خاصك 📬**").then(d => {
        d.delete(2000)
    })
    })
        })
    }
});


client.on('message', function(msg) {
    if(msg.content.startsWith (prefix + 'server')) {
      if(!msg.channel.guild) return msg.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');
      let embed = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setThumbnail(msg.guild.iconURL)
      .addField('🌐 **اسم السيرفر : **' , `**[ ${msg.guild.name} ]**`,true)
      .addField('🌍 ** موقع السيرفر :**',`**[ ${msg.guild.region} ]**`,true)
      .addField('🎖** الرتب :**',`**[ ${msg.guild.roles.size} ]**`,true)
      .addField('👤** عدد الاعضاء :**',`**[ ${msg.guild.memberCount} ]**`,true)
      .addField('✅** عدد الاعضاء الاونلاين :**',`**[ ${msg.guild.members.filter(m=>m.presence.status == 'online').size} ]**`,true)
      .addField('📝** الرومات الكتابية :**',`**[ ${msg.guild.channels.filter(m => m.type === 'text').size} ]**`,true)
      .addField('🔊** رومات الصوت :**',`**[ ${msg.guild.channels.filter(m => m.type === 'voice').size} ]**`,true)
      .addField('👑** مؤسس السيرفر :**',`**[ ${msg.guild.owner} ]**`,true)
      .addField('🆔** ايدي السيرفر :**',`**[ ${msg.guild.id} ]**`,true)
      .addField('📅** تم عمل السيرفر في : **',msg.guild.createdAt.toLocaleString())
      .addField('😴** روم AFK**',`**${msg.guild.afkChannel || 'None'}**`, true)
      .addField('🙃** الايموجيات :**', `**${msg.guild.emojis.size}** \`[\` **${msg.guild.emojis.map(m => m).join('**|**')} \`]\`**`, true);
      msg.channel.send({embed:embed});
    }
  });///////////////ALPHA CODES //// MAHMOUD QUSTYLE


client.on("message", message => {
var prefix = "$" // البريفكس
    var args = message.content.substring(prefix.length).split(" ");
    if (message.content.startsWith(prefix + "مسح")) { // الامر
        if(!message.channel.guild) return message.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('**⚠  لا يوجد لديك صلاحية لمسح الشات**');
var msg;
msg = parseInt();

message.channel.fetchMessages({limit: msg}).then(messages => message.channel.bulkDelete(messages)).catch(console.error);
message.channel.sendMessage("", {embed: {
title: "``تــم مسح الشات ``",
color: 0x06DF00,
footer: {
  
}
}}).then(msg => {msg.delete(3000)});
                  }


});


client.on('message', message => {
    if (message.content === "$id") {
    let embed = new Discord.RichEmbed()
   .setColor("RANDOM")
   .setThumbnail(message.author.avatarURL)
   .setTitle(`info about ${message.guild.name}`)
   .addField("Server Owner 👑",`➥ ` + `${message.guild.owner.user.username}`, true)
   .addField('Server ID 🆔',`➥` + message.guild.id, true)
   .addField("Owner Tag",`➥ ` +  `#` + message.guild.owner.user.discriminator, true)
   .addField("Owner ID 🆔",`➥ ` + message.guild.owner.user.id, true)
   .addField("Server Region📡",`➥ ` + message.guild.region, true)
   .addField("Server Member Size🏧",`➥ ` + message.guild.members.size, true)
   .addField("Server Channels Number🏧",`➥ ` + message.guild.channels.size, true)
   .addField("Server Roels Number🏧",`➥ ` + message.guild.roles.size, true)
   .addField("AFK channel💤",`➥ ` + message.guild.afkChannel || 'Null', true)
   .addField("Server Created AT",`➥ ` + message.guild.createdAt, true)
   .addField(`info about ${message.author.username}`, `➥ `)
   .addField("Name",`➥ ` + `${message.author.username}`, true)
   .addField('Tag',`➥ ` + "#" +  message.author.discriminator, true)
   .addField("ID 🆔",`➥ ` + message.author.id, true)
   .addField(" Account Created At",`➥ ` + message.author.createdAt, true)
   .setTimestamp()
   .setFooter(message.author.tag, message.author.avatarURL)
      
      
   message.channel.sendEmbed(embed);
     }
 });


client.on("message", msg => {
  if(msg.content === '$' + "profile") {
      const embed = new Discord.RichEmbed();
  embed.addField("🔱| اسم الحساب :", `${msg.author.username}#${msg.author.discriminator}`, true)
          .addField("🆔| الاي دي :", `${msg.author.id}`, true)
          .setColor("RANDOM")
          .setFooter(msg.author.username , msg.author.avatarURL)
          .setThumbnail(`${msg.author.avatarURL}`)
          .setTimestamp()
          .setURL(`${msg.author.avatarURL}`)
          .addField('📛| الحالة :', `${msg.author.presence.status.toUpperCase()}`, true)
          .addField('🎲| بلاينج :', `${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name}`, true)
   .addField(':military_medal:  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
          .addField('📅| تم الانضمام للديسكورد في :', `${msg.createdAt}`,true);
      msg.channel.send({embed: embed})
  }
});


client.on('message', message => {
    if (message.content.startsWith("رابط")) {

  message.channel.createInvite({
        thing: true,
        maxUses: 100,
        maxAge: 86400
    }).then(invite =>
      message.author.sendMessage(invite.url)
    )
  message.channel.send("**:link:.تم ارسال الرابط برسالة خاصة**")

message.author.send(`**مدة الرابط : يـوم
عدد استخدامات الرابط : 100**`)


    }
}); 


client.login(process.env.BOT_TOKEN);
