const Discord = require('discord.js')
const db = require('quick.db');
const ayarlar = require('../ayarlar.json')

exports.run = async (client, message, args) => {
  const giris = args[0]
  const ozelmesaj = await db.fetch(`ozelhosgeldin_${message.guild.id}`); //Dcs
  
  let prefix = await require('quick.db').fetch(`prefix_${message.guild.id}`) || ayarlar.prefix
 
  if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(`Bu komutu kullanabilmek için "\`Sunucuyu Yönet\`" yetkisine sahip olmalısın.`);
  
  let mesaj = args.slice(0).join(' ')
  
      if (!mesaj) {
        return message.channel.send(new Discord.RichEmbed()
                                    .setColor("PURPLE")
                                    .setAuthor(`Sunucunuza birisi girdiğinde ona botun özelden göndereceği mesajı yazınız.`, message.guild.iconURL)
                                    .setDescription(`Sunucu adınız için **-sunucu-** , Giren kişinin adı için **-kullanıcı-**` +"\n"+`Örnek kullanım: \`${prefix}özelhoşgeldin Merhaba -kullanıcı- -sunucu- adlı sunucumuza hoşgeldin!\`\nİptal etmek için \`${prefix}özelhoşgeldin sıfırla\` komutunu kullanabilirsiniz`))
    }
  
   if(giris === "sıfırla" || giris === "kapat" || giris === "durdur") {
    if(!ozelmesaj) return message.channel.send(`Ayarlanmayan şeyi kapatamazsın!`)
    db.delete(`ozelhosgeldin_${message.guild.id}`)
    message.channel.send(`Özel Hoşgeldin Mesajı özelliği başarıyla devredışı bırakıldı!`)
    return
  }
  
    db.set(`ozelhosgeldin_${message.guild.id}`, mesaj)
    message.channel.send(new Discord.RichEmbed()
                         .setColor("PURPLE")
                         .setTimestamp()
                         .setDescription(`Özel hoşgeldin mesajı başarıyla ayarlandı!` +"\n"+`Mesajınız: \`${mesaj}\` olarak ayarlandı.`))
}
    
exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ["dm-hg"],
    permLevel: 2
} //Dcs 

exports.help = {
    name: 'özelhoşgeldin',
    description: 'Sunucuya giren kişiye özelden gönderilecek mesajı ayarlar.',
    usage: 'özelhoşgeldin <yazı>'
}
