const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   message.delete();

   let question = args.join(' ');

   let user = message.author.username

   if (!question) return message.channel.Embed(

     new Discord.MessageEmbed()

     .addField(`Yazı Yazman Gerek`)).then(m => m.delete(5000));

     console.log("oylama komutu " + message.author.username + '#' + message.author.discriminator + " tarafından kullanıldı.")
     message.channel.send(

       new Discord.MessageEmbed()

       .setColor("#FF00F0")
       .setThumbnail(client.user.avatarURL())
       .setTimestamp()
       .setFooter('iKeitha', client.user.avatarURL())

       .addField(`**iKeitha | Duyuru**`, `**${question}**`)).then(function(message) {

       });

     };

     exports.conf = {
       enabled: true,
       guildOnly: false,
       aliases: ['o'],

  permLevel: 2
};

exports.help = {
  name: 'duyuru',
  description: 'Oylama yapmanızı sağlar.',
  usage: 'duyuru <oylamaismi>'
};
