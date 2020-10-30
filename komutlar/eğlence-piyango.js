const Discord = require('discord.js');

exports.run = (client, message) => {
    var ödül = ["Ödülünüz: **100.000 TL Hayırlı Olsun!**",
               "Ödülünüz: **100.000 TL Hayırlı Olsun!**",
                "Ödülünüz: **100.000 TL Hayırlı Olsun!**",
                "Ödülünüz: **100.000 TL Hayırlı Olsun!**",
                "Ödülünüz: **100.000 TL Hayırlı Olsun!**",
                "Ödülünüz: **100.000 TL Hayırlı Olsun!**",
                "Ödülünüz: **100.000 TL Hayırlı Olsun!**",
                "Ödülünüz: **100.000 TL Hayırlı Olsun!**",
                "Ödülünüz: **100.000 TL Hayırlı Olsun!**",
                "Ödülünüz: **250.000 TL Hayırlı Olsun!**",
                "Ödülünüz: **250.000 TL Hayırlı Olsun!**", 
                "Ödülünüz: **250.000 TL Hayırlı Olsun!**", 
                "Ödülünüz: **250.000 TL Hayırlı Olsun!**", 
                "Ödülünüz: **250.000 TL Hayırlı Olsun!**",
                "Ödülünüz: **250.000 TL Hayırlı Olsun!**",
                "Ödülünüz: **250.000 TL Hayırlı Olsun!**",
                "Ödülünüz: **250.000 TL Hayırlı Olsun!**",
                "Ödülünüz: **500.000 TL Güle Güle Kullan!**",
                "Ödülünüz: **1.000.000 TL Güle Güle Kullan!**",        
                "Ah! Amorti Çıktı Bir Dahaki Sefere...",
                "Ödülünüz: **1 TL Sana Yeterde Artar Bile!**",
                "Ödülünüz: **1 TL Sana Yeterde Artar Bile!**",
                "Ödülünüz: **1 TL Sana Yeterde Artar Bile!**",
                "Ödülünüz: **1 TL Sana Yeterde Artar Bile!**",
                "Ödülünüz: **1 TL Sana Yeterde Artar Bile!**",
                "Ödülünüz: **1 TL Sana Yeterde Artar Bile!**",
                "Ödülünüz: **1 TL Sana Yeterde Artar Bile!**",
                "Ödülünüz: **1 TL Sana Yeterde Artar Bile!**",
                "Ödülünüz: **1 TL Sana Yeterde Artar Bile!**",
                "Ödülünüz: **1 TL Sana Yeterde Artar Bile!**",
                "Ödülünüz: **1 TL Sana Yeterde Artar Bile!**",
                "Ödülünüz: **1 TL Sana Yeterde Artar Bile!**",
                "Ödülünüz: **1 TL Sana Yeterde Artar Bile!**",
                
                
        "Ödülünüz: **50 TL Bilet Parasını Geri Aldın**", 
               "Ödülünüz: **50 TL Bilet Parasını Geri Aldın**", 
                "Ödülünüz: **50 TL Bilet Parasını Geri Aldın**",
                "Ödülünüz: **50 TL Bilet Parasını Geri Aldın**",
                "Ödülünüz: **50 TL Bilet Parasını Geri Aldın**",
                "Ödülünüz: **50 TL Bilet Parasını Geri Aldın**",
                "Ödülünüz: **50 TL Bilet Parasını Geri Aldın**",
                "Ödülünüz: **50 TL Bilet Parasını Geri Aldın**",
                "Ödülünüz: **50 TL Bilet Parasını Geri Aldın**",
                "Ödülünüz: **50 TL Bilet Parasını Geri Aldın**",
                "Ödülünüz: **50 TL Bilet Parasını Geri Aldın**",
                "Ödülünüz: **50 TL Bilet Parasını Geri Aldın**",
                
        "İşte Bu.Piyango Tam Bilete Vurdu! **80.000.000 TL Hayırlı Olsun.**",
        "Maalesef Hiçbirşey Tutturamadın..."]
    var iller = [
      "İzmir","Aydın","Ankara","İstanbul","Samsun","Sinop","Zonguldak","Mersin","Hakkari","Mardin","Nevşehir","Bursa","Kocaeli","Edirne","Yalova"]

    var piyango = ödül[Math.floor(Math.random(1) * ödül.length)]
    var kazananil =[ iller[Math.floor(Math.random() * iller.length)],
    iller[Math.floor(Math.random() * iller.length)],
    iller[Math.floor(Math.random() * iller.length)],
    iller[Math.floor(Math.random() * iller.length)]]
  
    const etakan  = new Discord.MessageEmbed()
    .setThumbnail(message.author.avatarURL())
    .setColor("#FF00F0")
    .addField("**Piyangodan Çıkan**",`${piyango}`)
    .addField("Toplam Ödül",`80.000.000 TL`)
    .addField("Piyango Vuran İller:",`${kazananil}`)
    .setFooter(`Bilet Alan Kullanıcı ${message.author.username}`)
    message.channel.send(etakan);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['bilet'],
  permLevel: 0,
};
exports.help = {
  name: 'piyango',
  description: 'Yılbaşı Piyangosu!',
  usage: 'piyango'
}; 
