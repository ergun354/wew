const Discord = require('discord.js');

exports.run = (client, message, args) => {
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('> **Yazmam için herhangi bir şey yazın!**');
message.channel.send(mesaj);
message.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 5
};

exports.help = {
  name: 'yaz',
  description: '[Admin Komutu]',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};