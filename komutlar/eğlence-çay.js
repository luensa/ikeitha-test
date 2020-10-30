const Discord = require('discord.js');

exports.run = async(client, message) => {
     
      const vatan = new Discord.MessageEmbed()
    .setAuthor('Koca Yürekli ' + message.author.username + ' Herkese Çay Aldı!')
    .setColor(3447003)
        .setImage(`https://cdn.discordapp.com/attachments/739168895323078667/771159504451534848/cay-002.gif`)
    return message.channel.send(vatan);
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'çay',
  description: '',
  usage: ''
};