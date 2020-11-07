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

**=====          ${client.user.username} Moderasyon Menüsü=====**

[Bot Davet Linki : https://is.gd/gCtPGB](${davet}) <|> [https://discord.gg/aWTYHEf](${destek}) ══════════════════════ 
[DBL Profil](${dbl})

**═════════════════════════════════════════════════**

**▷ Reklam Engel** 
════════════════════
**▷ Küfür Engel**
════════════════════
**▷ Sil**
════════════════════
**▷ Sayaç**
════════════════════
**▷ Dm-hg-ayarla**
════════════════════
**▷ Dm-bb-ayarla**
════════════════════
**▷ Otorol**
════════════════════
**▷ Anti-Raid**
════════════════════
**▷ Capslock-Engelleme**
════════════════════
**▷ Resimli-giriş-çıkış**
════════════════════
**▷ Sa-As**
════════════════════
**▷ 

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
    name: 'moderasyon',
    description:"ToolSAre"
};