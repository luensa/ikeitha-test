const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, params) => {
	if (!message.guild) {
    const ozelmesajuyari = new Discord.MessageEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Atom')
    return message.author.send(ozelmesajuyari); }
    if (message.channel.type !== '..') {
      const sunucubilgi = new Discord.MessageEmbed()
    .setAuthor('Afferim Sana Salak Bir Ülke Yi Havaya Uçurdun!')
    .setColor('#FF00F0')
    .setTimestamp()
    .setDescription('')
		.setImage(`https://cdn.discordapp.com/attachments/757167719664844863/770943953692131358/tenor_1.gif`)
    return message.channel.send(sunucubilgi);
    }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'atom',
  description: 'Atom Bombası Atarsınız.',
  usage: 'atom'
};
