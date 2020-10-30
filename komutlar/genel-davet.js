const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()

        .setTitle(`${client.user.username} Davet Menüsü `)
        .setDescription(`<a:pinkhype:768205774009925664> **Botun Davet Linki İçin** [TIKLA](https://discord.com/oauth2/authorize?client_id=282793270524772352&scope=bot&permissions=805829694) \n <a:pinkhype:768205774009925664> **Destek Sunucusu İçin** [TIKLA](https://discord.gg/bHKBUE8) \n <a:pinkhype:768205774009925664> **Web Sitemizi Ziyaret etmek İçin** [TIKLA](http://ikeithabot.cf/)`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix} Davet Sistemi Kullandı`, message.author.avatarURL())
    .setColor(`#FF00F0`)
    return message.channel.send(embed);


};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'davet',
  description: '',
  usage: 'davet'
};
