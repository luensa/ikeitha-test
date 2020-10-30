const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
//codeworld
exports.run = (client, message, params) => {
  
  const TA = new Discord.MessageEmbed()
  .setColor("#ff0000")
  .setTitle(`${message.guild.name}`)
  .setImage(message.guild.iconURL())
  message.channel.send(TA)
}
//codeworld
exports.conf = {
  enabled: true, 
  guildOnly: false, 
    aliases: ["sunucupp"],
}

//codeworld
exports.help = {
  name: 'sunucuresmi',
  description: 'CodeWorld İyi Günler Diler',
  usage: 'sunucuresmi',
};