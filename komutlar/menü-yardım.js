const db = require("quick.db");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => {
let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix
let eklenti = new Discord.MessageEmbed()
.setAuthor(`iKeitha Yardım Menüsü`, client.user.avatarURL())
.setColor('#FF00F0')
.setDescription(`<a:davet:764130237549903893> iKeitha botumuzu eklemek için \`${prefix}davet\` yazabilirsiniz.`)
.addField(`__Genel Komutlar__`,`<a:pinkhype:768205774009925664> \`${prefix}genel\``,true)
.addField(`__Mod Komutları__`,`<a:pinkcark:768206121101164635> \`${prefix}moderasyon\` `,true)
.addField(`__Güvenlik Komutları__`,`<a:pinkcark:768206121101164635> \`${prefix}koruma\`  `,true)
.addField(`__Sunucu Komutları__`,`<a:pinkpartner:768205245582278666> \`${prefix}sunucu\` `,true)
.addField(`__Eğlence Komutları__`,`<a:pinkcheer:768213449217146900> \`${prefix}eğlence\`  `,true)
.addField(`__Eğlence Komutları 2__`,`<a:pinkcheer:768213449217146900> \`${prefix}eğlence2\`  `,true)
.addField(`__Prefix Değiştir__`,`<a:pinkhype:768205774009925664> \`${prefix}prefix\` `,true)
.addField(`__Müzik__`,`<a:pinkmuzic:771083060153810944> \`${prefix}yardım-müzik\` `,true)
.addField(`__Logo__`,`<a:pinkhype:768205774009925664> \`${prefix}yardım-logo\` `,true)
.addField(`__Bilgilendirme__`,`<a:davet:764130237549903893> \`${prefix}davet\` | iKeitha'yi Sunucunuza Davet Edersiniz\n<a:bilgilendirme:764076361396387851> \`${prefix}botbilgi\` | Botun İstatistiklerini Gösterir `)
  .setImage(`https://cdn.discordapp.com/attachments/757167719664844863/768212014475771924/Text2_00000.gif`)
 message.channel.send(eklenti)
  };
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["yardım","help"],
    permLevel: 0
  };
  exports.help = {
    name: 'yardım'
  };
