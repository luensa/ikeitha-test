const Discord = require('discord.js');
exports.run = async (client, message, args) => {
    if (!message.guild.member(client.user).hasPermission("SEND_MESSAGES")) return message.author.send('Mesaj Gönderme iznim yok. Lütfen görevim için mesaj gönderme özelliğini etkinleştirin');

    let slots = ["🍎", "🍌", "🍒", "🍓", "🍈"];
    let result1 = Math.floor((Math.random() * slots.length));
    let result2 = Math.floor((Math.random() * slots.length));
    let result3 = Math.floor((Math.random() * slots.length));
    let name = message.author.displayName;
    let aicon = message.author.displayAvatarURL;

    if (slots[result1] === slots[result2] && slots[result3]) {
        let wEmbed = new Discord.MessageEmbed()
            .setFooter("Kazandın!", aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Result:', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#FF00F0");
        message.channel.send(wEmbed);
    } else {
        let embed = new Discord.MessageEmbed()
            .setFooter('Kaybettin dostum!', aicon)
            .setTitle(':slot_machine:Slots:slot_machine:')
            .addField('Result', slots[result1] + slots[result2] + slots[result3], true)
            .setColor("#FF00F0");
        message.channel.send(embed);
    }

}


exports.conf = {
    aliases: []
};

exports.help = {
    name: 'slots',
    description: 'Slot Machine',
    usage: 'slots'
}