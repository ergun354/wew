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

**=====          ${client.user.username} Eğlence Menüsü=====**

[Bot Davet Linki : https://is.gd/gCtPGB](${davet}) <|> [https://discord.gg/aWTYHEf](${destek}) ══════════════════════ 
[DBL Profil](${dbl})

**═════════════════════════════════════════════════**

**▷ Adam-asmaca**
════════════════════
**▷ Kahveiç**
════════════════════
**▷ Google**
════════════════════
**▷ Banner-yazı**
════════════════════
**▷ Sarıl**
════════════════════
**▷ Wasted**
════════════════════
**▷ 1vs1 [@kullanıcı] [@kullanıcı]**

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
    name: 'eğlence',
    description:"ToolSAre"
};