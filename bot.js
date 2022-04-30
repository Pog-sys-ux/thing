
            module.exports = async function s4d(){
                    const Discord = require("discord.js");
                    const Database = require("easy-json-database");
                    const moment = require('moment');
                    const { DB } = require("quickmongo");
		    const canvas = require("discord-canvas")
                    const { MessageEmbed, MessageButton, MessageActionRow, Intents, Permissions, MessageSelectMenu } = require('discord.js')
                    const devMode = typeof __E_IS_DEV !== "undefined" && __E_IS_DEV;
                    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
                    const s4d = {
                        Discord,
                        database: new Database(`${devMode ? S4D_NATIVE_GET_PATH : "."}/db.json`),
                        joiningMember:null,
                        reply:null,
                        tokenInvalid:false,
                        tokenError: null,
                        player:null,
                        client:null,
                        checkMessageExists() {
                            if (!s4d.client) throw new Error('You cannot perform message operations without a Discord.js client')
                            if (!s4d.client.readyTimestamp) throw new Error('You cannot perform message operations while the bot is not connected to the Discord API')
                        }
                    };
                    s4d.client = new s4d.Discord.Client({
                        intents: [Object.values(s4d.Discord.Intents.FLAGS).reduce((acc, p) => acc | p, 0)],
                        partials: ["REACTION"]
                    });
                    const { Player,QueueRepeatMode } = require("discord-player")
                    s4d.player = new Player(s4d.client)
                    var arguments2, command, volume, onoff;

function colourBlend(c1, c2, ratio) {
  ratio = Math.max(Math.min(Number(ratio), 1), 0);
  var r1 = parseInt(c1.substring(1, 3), 16);
  var g1 = parseInt(c1.substring(3, 5), 16);
  var b1 = parseInt(c1.substring(5, 7), 16);
  var r2 = parseInt(c2.substring(1, 3), 16);
  var g2 = parseInt(c2.substring(3, 5), 16);
  var b2 = parseInt(c2.substring(5, 7), 16);
  var r = Math.round(r1 * (1 - ratio) + r2 * ratio);
  var g = Math.round(g1 * (1 - ratio) + g2 * ratio);
  var b = Math.round(b1 * (1 - ratio) + b2 * ratio);
  r = ('0' + (r || 0).toString(16)).slice(-2);
  g = ('0' + (g || 0).toString(16)).slice(-2);
  b = ('0' + (b || 0).toString(16)).slice(-2);
  return '#' + r + g + b;
}


s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == '!nnjklhnLJKHBJnh(Oh9ph9pih08h8y089HPN*(HJHLJKHHJBUHU*OOH(*&)(H&*UHU&(GHOUIHG(*OH*IUHNJ&*UHINOL') {
    s4dmessage.delete();
    s4dmessage.channel.send({content:String('*kicks down door*')});
    s4dmessage.channel.send({content:String('BRUH SHREK!')});
    await delay(Number(2)*1000);
    s4dmessage.channel.send({content:String('WAAAAAAAA😭')});
    await delay(Number(1)*1000);
    s4dmessage.channel.send({content:String('+jihJHkljNUIHbKJ8908y0ojiBHKJLHKLJHjbo8y89h978JIGOINKJLH908u <@944059382239465472>')});
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == '!dm') {
    s4dmessage.delete();
    (s4dmessage.mentions.members.first()).send(String((['Sent By ',s4dmessage.author.username,'\n','\n',(s4dmessage.content).split(' '),'\n','\n','Sent At ',s4d.client.ws.ping,' ms.'].join(''))));
    s4dmessage.channel.send({content:String((['Sent to ',s4dmessage.mentions.members.first(),'!'].join('')))});
    await delay(Number(1)*1000);
    s4dmessage.delete();
    s4dmessage.channel.send({content:String('https://cdn.discordapp.com/attachments/946240424383762473/949891441432363018/683057491990282280.gif')});
  } else if ((s4dmessage.mentions.members.first()).bot) {
    s4dmessage.channel.send({content:String('Error | The Member You Are Trying To Direct Message Is A Bot!')});
    s4dmessage.channel.send({content:String('https://cdn.discordapp.com/attachments/945860023752466432/950884070328524811/fgshdfgdfgh.gif')});
  }

});

s4d.client.on('ready', async () => {
  s4d.client.user.setPresence({status: "online",activities:[{name:'Connected!',type:"LISTENING"}]});
  await delay(Number(2)*1000);

          while(s4d.client && s4d.client.token) {
              await delay(50);
                s4d.client.user.setPresence({status: "online",activities:[{name:(['Frogie SMP Discord     ','\n','\n','By frogie#7554','',''].join('')),type:"LISTENING"}]});
    await delay(Number(5)*1000);
    s4d.client.user.setPresence({status: "online",activities:[{name:'Minecraft - Frogie SMP',type:"PLAYING"}]});
    await delay(Number(10)*1000);
    s4d.client.user.setPresence({status: "dnd",activities:[{name:'with FrogBot2',type:"PLAYING"}]});
    await delay(Number(4)*1000);
    s4d.client.user.setPresence({status: "online",activities:[{name:'Roblox',type:"PLAYING"}]});
    await delay(Number(4)*1000);

              console.log('ran')
          }

});

await s4d.client.login('OTQ2NDQyMzU5MjE2OTMwODI4.YhexIg.S5SvPRcABUKRIj_i3xsSvxq1FDE').catch((e) => { s4d.tokenInvalid = true; s4d.tokenError = e.code; });

s4d.player.on("trackStart", (queue, track) => {
   let embed = new Discord.MessageEmbed()
     embed.setTitle((['now playing ',track.title,'\n','author: ',track.author,'\n','url: ',track.url,'\n','views: ',track.views,'\n','duration: ',track.duration].join('')));
    embed.setImage((track.thumbnail));
    (queue.metadata.channel).send({embeds:[embed]});


})

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '.FrogBot') {
    s4dmessage.channel.send({content:String('My day be so fine, then boom. user ping.')});
    s4dmessage.channel.send({content:String('https://cdn.discordapp.com/attachments/946240424383762473/949891441432363018/683057491990282280.gif')});
  }

});

s4d.player.on("queueEnd", (queue) => {
   (queue.metadata.channel).send({ content: String('queue finished')});

})

s4d.player.on("trackAdd", (queue, track) => {
   (queue.metadata.channel).send({ content: String((['music ',track.title,'added to queue'].join('')))});

})

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!help') {
    s4dmessage.channel.send({content:String('!ip !help !frogie !jake .FrogBot !annoy !dm <@user> <text>!thetruth +help')});
    s4dmessage.channel.send({content:String('https://cdn.discordapp.com/attachments/946240424383762473/949891441432363018/683057491990282280.gif')});
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!jake') {
    s4dmessage.channel.send({content:String('Watch out! It\'s Jake from State Farm!')});
    s4dmessage.channel.send({content:String('https://cdn.discordapp.com/attachments/931639680104005755/949894460794368061/1920_commercial-desk.png')});
    s4dmessage.channel.send({content:String('https://cdn.discordapp.com/attachments/946240424383762473/949891441432363018/683057491990282280.gif')});
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!ip') {
    s4dmessage.channel.send({content:String('IP: frogiesmpfEBG.aternos.me Port: 43693')});
    s4dmessage.channel.send({content:String('https://cdn.discordapp.com/attachments/946240424383762473/949891441432363018/683057491990282280.gif')});
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  arguments2 = (s4dmessage.content).split(' ');
  command = arguments2.splice(0, 1)[0];
  if (command == '!play') {
    if ((s4dmessage.member.voice.channelId) == null) {
      s4dmessage.channel.send({content:String('you are not in a voice channel!')});
      return
    }
    if ((s4dmessage.guild.me.voice.channelId) != null && (s4dmessage.member.voice.channelId) != (s4dmessage.guild.me.voice.channelId)) {
      s4dmessage.channel.send({content:String('you are not in my voice channel!')});
      return
    }
    const queue = s4d.player.createQueue((s4dmessage.guild), {metadata: {channel: (s4dmessage.channel)}});
    if (!(queue.connection)) {
      await queue.connect((s4dmessage.member.voice.channel))
      ;}
    queue.play((await s4d.player.search((arguments2.join(' ')), {requestedBy: (s4dmessage.author)}).then(x => x.tracks[0])));
  }
  if (command == '!pause') {
    if ((s4dmessage.member.voice.channel) == null) {
      s4dmessage.channel.send({content:String('you are not in a voice channel!')});
      return
    }
    if ((s4dmessage.member.voice.channelId) != (s4dmessage.guild.me.voice.channelId)) {
      s4dmessage.channel.send({content:String('you are not in my voice channel!')});
      return
    }
    if (!((s4d.player.getQueue((s4dmessage.guild).id)).playing)) {
      s4dmessage.channel.send({content:String('there is no music playing!')});
      return
    }
    (s4d.player.getQueue((s4dmessage.guild).id)).setPaused(true)
    s4dmessage.channel.send({content:String('paused music')});
  }
  if (command == '!resume') {
    if ((s4dmessage.member.voice.channel) == null) {
      s4dmessage.channel.send({content:String('you are not in a voice channel!')});
      return
    }
    if ((s4dmessage.member.voice.channelId) != (s4dmessage.guild.me.voice.channelId)) {
      s4dmessage.channel.send({content:String('you are not in my voice channel!')});
      return
    }
    if (!((s4d.player.getQueue((s4dmessage.guild).id)).playing)) {
      s4dmessage.channel.send({content:String('there is no music playing!')});
      return
    }
    (s4d.player.getQueue((s4dmessage.guild).id)).setPaused(false)
    s4dmessage.channel.send({content:String('resumed the music')});
  }
  if (command == '!stop') {
    if ((s4dmessage.member.voice.channel) == null) {
      s4dmessage.channel.send({content:String('you are not in a voice channel!')});
      return
    }
    if ((s4dmessage.member.voice.channelId) != (s4dmessage.guild.me.voice.channelId)) {
      s4dmessage.channel.send({content:String('you are not in my voice channel!')});
      return
    }
    if (!((s4d.player.getQueue((s4dmessage.guild).id)).playing)) {
      s4dmessage.channel.send({content:String('there is no music playing!')});
      return
    }
    (s4d.player.getQueue((s4dmessage.guild).id)).destroy()
    s4dmessage.channel.send({content:String('stoped music')});
  }
  if (command == '!volume') {
    volume = arguments2[0];
    if ((s4dmessage.member.voice.channel) == null) {
      s4dmessage.channel.send({content:String('you are not in a voice channel!')});
      return
    }
    if ((s4dmessage.member.voice.channelId) != (s4dmessage.guild.me.voice.channelId)) {
      s4dmessage.channel.send({content:String('you are not in my voice channel!')});
      return
    }
    if (!((s4d.player.getQueue((s4dmessage.guild).id)).playing)) {
      s4dmessage.channel.send({content:String('there is no music playing!')});
      return
    }
    if ((Number(volume)) < 0) {
      s4dmessage.channel.send({content:String('the volume need to be more then 0!')});
      return
    }
    if ((Number(volume)) > 100) {
      s4dmessage.channel.send({content:String('the volume need to be less then 100!')});
      return
    }
    (s4d.player.getQueue((s4dmessage.guild).id)).setVolume(volume)
    s4dmessage.channel.send({content:String(('the volume is now ' + String(volume)))});
  }
  if (command == '!skip') {
    if ((s4dmessage.member.voice.channel) == null) {
      s4dmessage.channel.send({content:String('you are not in a voice channel!')});
      return
    }
    if ((s4dmessage.member.voice.channelId) != (s4dmessage.guild.me.voice.channelId)) {
      s4dmessage.channel.send({content:String('you are not in my voice channel!')});
      return
    }
    if (!((s4d.player.getQueue((s4dmessage.guild).id)).playing)) {
      s4dmessage.channel.send({content:String('there is no music playing!')});
      return
    }
    (s4d.player.getQueue((s4dmessage.guild).id)).skip()
    s4dmessage.channel.send({content:String(('skipped music ' + String((s4d.player.getQueue((s4dmessage.guild).id)).current)))});
  }
  if (command == '!loop') {
    onoff = arguments2[0];
    if (onoff == 'on') {
      if ((s4dmessage.member.voice.channel) == null) {
        s4dmessage.channel.send({content:String('you are not in a voice channel!')});
        return
      }
      if ((s4dmessage.member.voice.channelId) != (s4dmessage.guild.me.voice.channelId)) {
        s4dmessage.channel.send({content:String('you are not in my voice channel!')});
        return
      }
      if (!((s4d.player.getQueue((s4dmessage.guild).id)).playing)) {
        s4dmessage.channel.send({content:String('there is no music playing!')});
        return
      }
      (s4d.player.getQueue((s4dmessage.guild).id)).setRepeatMode(QueueRepeatMode.QUEUE)
      s4dmessage.channel.send({content:String('loop on')});
    } else if (onoff == 'off') {
      if ((s4dmessage.member.voice.channel) == null) {
        s4dmessage.channel.send({content:String('you are not in a voice channel!')});
        return
      }
      if ((s4dmessage.member.voice.channelId) != (s4dmessage.guild.me.voice.channelId)) {
        s4dmessage.channel.send({content:String('you are not in my voice channel!')});
        return
      }
      if (!((s4d.player.getQueue((s4dmessage.guild).id)).playing)) {
        s4dmessage.channel.send({content:String('there is no music playing!')});
        return
      }
      (s4d.player.getQueue((s4dmessage.guild).id)).setRepeatMode(QueueRepeatMode.OFF)
      s4dmessage.channel.send({content:String('loop off')});
    } else {
      s4dmessage.channel.send({content:String('you need to send !loop on/off')});
    }
  }
  if (command == '!back') {
    if ((s4dmessage.member.voice.channel) == null) {
      s4dmessage.channel.send({content:String('you are not in a voice channel!')});
      return
    }
    if ((s4dmessage.member.voice.channelId) != (s4dmessage.guild.me.voice.channelId)) {
      s4dmessage.channel.send({content:String('you are not in my voice channel!')});
      return
    }
    if (!((s4d.player.getQueue((s4dmessage.guild).id)).playing)) {
      s4dmessage.channel.send({content:String('there is no music playing!')});
      return
    }
    (s4d.player.getQueue((s4dmessage.guild).id)).back()
    s4dmessage.channel.send({content:String('playing previous music')});
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!thetruth') {
    s4dmessage.channel.send({content:String('https://cdn.discordapp.com/attachments/931641433734127626/949761316162273361/df2a95dc7867c639496f93850c777ec0675713f09feee96c3a9c192ad514ee80_1.png')});
    s4dmessage.channel.send({content:String('https://cdn.discordapp.com/attachments/946240424383762473/949891441432363018/683057491990282280.gif')});
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!frogie') {
    s4dmessage.channel.send({content:String('<@863178429213179984> get. "My day be so fine, then boom. FrogBot ping."')});
    s4dmessage.channel.send({content:String('https://cdn.discordapp.com/attachments/931641433734127626/949761316162273361/df2a95dc7867c639496f93850c777ec0675713f09feee96c3a9c192ad514ee80_1.png')});
    s4dmessage.channel.send({content:String('https://cdn.discordapp.com/attachments/946240424383762473/949891441432363018/683057491990282280.gif')});
  }

});

s4d.client.on('messageCreate', async (s4dmessage) => {
  if ((s4dmessage.content) == '!annoy') {
    s4dmessage.channel.send({content:String('Oh really?')});
    await delay(Number(2)*1000);
    s4dmessage.channel.send({content:String('You really think that i would do that again huh?')});
    await delay(Number(3)*1000);
    s4dmessage.channel.send({content:String('Bro no and just for that.')});
    await delay(Number(2)*1000);
    s4dmessage.channel.send({content:String('Here hold this')});
    s4dmessage.channel.send({content:String('https://cdn.discordapp.com/attachments/931639680104005755/950515133258559568/download.png')});
    await delay(Number(2)*1000);
    (s4dmessage.author).roles.add((s4dmessage.author).guild.roles.cache.find((role) => role.id === '946909894727061544' || role.name === '946909894727061544' || '@'+role.name === '946909894727061544'));
    s4dmessage.channel.send({content:String('Mute Success! Time Remaining, 1:00.')});
    s4dmessage.react(':yes:');
    await delay(Number(60)*1000);
    (s4dmessage.author).roles.remove((s4dmessage.author).guild.roles.cache.find((role) => role.id === '946909894727061544' || role.name === '946909894727061544' || '@'+role.name === '946909894727061544'));
    s4dmessage.channel.send({content:String('Times Up!')});
  }

});

s4d.client.on('guildMemberAdd', async (param1) => {
s4d.joiningMember = param1;
  s4d.client.channels.cache.get('949832987476901888').send({
              embeds: [{
                  title: (['User ',s4d.joiningMember,' has joined!'].join('')),
                  color: (colourBlend('#ff0000', '#3333ff', 0.5)),
                  image: { url: null },
                  description: (['Welcome ',s4d.joiningMember,' to the Frogie SMP Discord!','\n','\n','Be sure to read <#931642317264265227>! <#931639680104005755> for chating, and <#931641433734127626> for memes!'].join('')),
                  footer: { text: 'Frogie SMP Discord | frogiee1#7554' },
                  thumbnail: { url: null }
              }],
      });
s4d.joiningMember = null
});

                    return s4d;
                    }
            