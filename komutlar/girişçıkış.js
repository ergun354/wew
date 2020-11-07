const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require("../ayarlar.json")

exports.run = (client, message, params, args) => {
     if (!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(':no_entry: Giriş Çıkış Kanalı ayarlamak için `Yönetici` yetkisine sahip olman gerek.')
     let giriş = message.mentions.channels.first();
     if (!giriş) return message.channel.send(':no_entry: Giriş Çıkış Kanalı Ayarlamak İçin Bir Kanal Etiketlemelisin. `girişçıkış #kanal`')
     db.set(`giriş_${message.guild.id}`, message.mentions.channels.first().id).then(i => {
        message.channel.send(`${ayarlar.başarılı} Giriş Çıkış, <#${i}> olarak ayarlandı.`)    
    })         
};

exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: [],
 permLevel: 0
};

exports.help = {
 name: 'girişçıkış',
 description: 'neblm',
 usage: 'girişçıkış'
};
