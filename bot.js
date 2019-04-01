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
