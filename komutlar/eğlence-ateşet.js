const Discord = require('discord.js');
exports.run = (client, message, args) => {
    if (!message.guild) {
        const ozelmesajuyari = new Discord.MessageEmbed()
            .setColor(0xFF0000)
            .setTimestamp()
            .setAuthor(message.author.username, message.author.avatarURL)
            .addField('⚠ Uyarı ⚠', '`ateşet` adlı komutu özel mesajlarda kullanamazsın.');
        return message.author.sendEmbed(ozelmesajuyari);
    }
    let guild = message.guild
    let reason = args.slice(1).join(' ');
    let user = message.mentions.users.first();
    if (message.mentions.users.size < 1) return message.reply('Kime ateş edeceksen etiketlemelisin.').catch(console.error);
    message.channel.send('Ateş ediliyor....')
        .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
        .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
        .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
        .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
        .then(nmsg => nmsg.edit('https://goo.gl/fWHUqt'))
        .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
        .then(nmsg => nmsg.edit('https://goo.gl/91Y2az'))
        .then(nmsg => nmsg.edit(`${Random[kafasınasık]}`));
    var Random = [
        'https://tenor.com/view/the-ghost-s%C4%B1f%C4%B1r-bir-adana-merkez-patl%C4%B1yo-gif-18460757',
        'Ahh bee Çok Yakındı Tekrar Denememek İstermisin!',
    ];
    var kafasınasık = Math.floor(Math.random() * Random.length);
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: [],
    permLevel: 0
};

exports.help = {
    name: 'ateş-et',
    description: 'İstediğiniz kişinin kafasına sıkar.',
    usage: 'ateş-et [kullanıcı]'
};