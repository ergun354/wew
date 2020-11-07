const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message, args) => {
  const cikis = args[0];
//DCS
  const ozelmesaj = await db.fetch(`ozelgorusuruz_${message.guild.id}`);

  let prefix =
    (await require("quick.db").fetch(`prefix_${message.guild.id}`)) ||
    ayarlar.prefix;

  if (!message.member.hasPermission("MANAGE_GUILD"))
    return message.channel.send(
      `Bu komutu kullanabilmek için \`Sunucuyu Yönet\` yetkisine sahip olmalısın.`
    );

  let mesaj = args.slice(0).join(" ");

  if (!mesaj) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setColor("PURPLE")
        .setAuthor(
          `Sunucunuzdan birisi çıktığında ona botun özelden göndereceği mesajı yazınız.`,
          message.guild.iconURL
        )
        .setDescription(
          `Sunucu adınız için **-sunucu-** , Çıkan kişinin adı için **-kullanıcı-**\nÖrnek kullanım: \`${prefix}özelgörüşürüz Görüşürüz -kullanıcı- , seni tekrardan -sunucu- adlı sunucumuza bekleriz.!\`\nİptal etmek için \`${prefix}özelgörüşürüz sıfırla\` komutunu kullanabilirsiniz`
        )
    );
  }

  if (cikis === "sıfırla" || cikis === "kapat" || cikis === "durdur") {
    if (!ozelmesaj)
      return message.channel.send(`Ayarlanmayan şeyi kapatamazsın!`);
    db.delete(`ozelgorusuruz_${message.guild.id}`);
    message.channel.send(
      `Özel Görüşürüz Mesajı özelliği başarıyla devredışı bırakıldı!`
    );
    return;
  }

  db.set(`ozelgorusuruz_${message.guild.id}`, mesaj);
  message.channel.send(
    new Discord.RichEmbed()
      .setColor("PURPLE")
      .setTimestamp()
      .setDescription(
        `Özel görüşürüz mesajı başarıyla ayarlandı!` +
          "\n" +
          `Mesajınız: \`${mesaj}\` olarak ayarlandı.`
      )
  );
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["dm-bb"],
  permLevel: 2
}; //DCS 

exports.help = {
  name: "özelgörüşürüz",
  description: "Sunucudan ayrılan kişiye özelden gönderilecek mesajı ayarlar.",
  usage: "özelgörüşürüz <yazı>"
};