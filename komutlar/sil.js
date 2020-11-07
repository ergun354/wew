exports.run = (bot, msg, params) => {

    let messagecount = parseInt(params[0]);
  
    if(isNaN(messagecount)) return msg.channel.send("❌ " + "| Lütfen Sayısal Bir Değer Girin!");
  
    if(messagecount > 100){
      msg.channel.send("❌ " + "| Üzgünüm, bir seferde yalnızca 100 mesaja kadar temizleyebilirsiniz.!")
    }else if(messagecount < 2 ) {
      msg.channel.send("❌ " + "| Üzgünüm, bir seferde yalnızca 100 mesaja kadar temizleyebilirsiniz.!")
    } else {
  
    }{
      msg.channel.fetchMessages({limit: messagecount}).then(messages => msg.channel.bulkDelete(messages, true));
    }

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['purge'],
  permLevel: 3,
  kategori:"YETKİLİ"
};

exports.help = {
  name: "sil",
  aciklama: "Deletes a specified amount of messages from a channel",
  kullanim: "sil [NUMBER]"
};