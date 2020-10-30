const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
    if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(FF00F0)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== 'dm') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor(message.author.username +  ' Off, Çok sevimli dayanamıyorum!!')
    .setColor(3447003)
    .setTimestamp()
    .setDescription('')
    .setImage(`https://2.bp.blogspot.com/-dobGk_XFJRs/Vvt1JGxgV1I/AAAAAAAAAMw/S6mb5hrEhgIO7EOMf-3unQZKXKw_T6BoQ/s400/tumblr_nh91d5zOQe1scerdko1_500.gif`)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sevimlibak'],
  permLevel: 0
};

exports.help = {
  name: 'sevimlibakış',
  description: 'Sevimli bakış atarsınız!',
  usage: 'sevimlibakış'
}; 