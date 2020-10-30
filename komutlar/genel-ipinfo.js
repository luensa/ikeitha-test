const Discord = require('discord.js');
const IPinfo = require('get-ipinfo');
exports.run = async (client, message, args) => {
let ipadresi = args[0]
if(!ipadresi) return message.reply("Lütfen bir ip adresi giriniz.")
IPinfo(ipadresi, function(err, ip) {
const embed = new Discord.MessageEmbed()
    .setTitle('İp Bilgileri')
    .addField('Oturduğu Şehir:', ip.city || "BULUNAMADI")
    .addField('İp Numarası:', ip.ip || "BULUNAMADI")
    .addField('Host:', ip.hostname || "BULUNAMADI")
    .addField('Yer:', ip.region || "BULUNAMADI")
    .addField('Kordinat:', ip.loc || "BULUNAMADI")
    .addField('Şirket:', ip.org || "BULUNAMADI")
    .addField('Posta Kodu:', ip.postal || "BULUNAMADI")
    .setColor('RANDOM');
message.channel.send(embed)
          })
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ipin"],
  permLevel: 0
};

exports.help = {
    name: 'ipinfo',
    description: 'ipinfo',
    usage: 'ipinfo'
   };