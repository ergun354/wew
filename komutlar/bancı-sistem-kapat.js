const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {
  if(message.author.id !== message.guild.owner.user.id) return message.channel.send('Yeterli Yetkiye Sahip Görünmüyorsun! '+client.emojis.get('647760202875142154'))
  if (!db.fetch(`yasaklamaKanal_${message.guild.id}`))
  if (!db.fetch(`yasaklamaRol_${message.guild.id}`))
  if (!db.fetch(`banlimit_${message.guild.id}`)) return message.channel.send(`${client.emojis.get('647760202875142154')} Olmayan Birşeyi Silemem :)
Kısaca Zaten Kapalıymış Kanka :rose:
Ayarlı Olsa Bile Tüm !banözelliği Ayarlı Değil! ${client.emojis.get('647760202875142154')}`)
  db.delete(`yasaklamaKanal_${message.guild.id}`)
  db.delete(`yasaklamaRol_${message.guild.id}`)
  db.delete(`banlimit_${message.guild.id}`)
  message.channel.send(`🙂Ban Sistemi Sunucunuz İçin Veritabanından Silinmiştir!🙂`);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'Ban-Limit-Kapat',
  description: 'Ban limiti.',
  usage: 'banlimit',
  kategori: 'yetkili'
};