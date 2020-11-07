const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;
exports.run = (client, message, params) => {
let davet = ""//botunuzun davet linki
let destek = ""//destek sunucusu linki
let dbl = ""//botunuz dbl ye ekli ise dbl profil linki
let site = ""//varsa site linki
    const ToolSAre = new Discord.RichEmbed()
   .setColor("GREEN")
   .setDescription(`

**=====          ${client.user.username} Kullanıcı Menüsü=====**

[Bot Davet Linki : https://is.gd/gCtPGB](${davet}) <|> [https://discord.gg/aWTYHEf](${destek}) ══════════════════════ 
[DBL Profil](${dbl})

**═════════════════════════════════════════════════**

**▷ İstatistik**
════════════════════
**▷ Hava-durumu [Lokasyon]**
════════════════════
**▷ Ping**
════════════════════
**▷ Hesapla [işlem]**
════════════════════
**▷ Google [Aratmak İstediğin Şey]**
════════════════════
**▷ Youtube [Aratmak İstediğin Şey]**
════════════════════
**▷ Korona**

**═════════════════════════════════════════════════**
`)
    if (!params[0]) {
        const commandNames = Array.from(client.commands.keys());
        message.channel.send(ToolSAre);
    }
};
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["help"],
    permLevel: 0
};
exports.help = {
    name: 'kullanıcı',
    description:"ToolSAre"
};