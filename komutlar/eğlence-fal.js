const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var ilgincsöz = [
        "**32 Yaşında evleniceksin, Evleneceğin kişinin isminin içinde A ve Y harfleri var.**",
        "**Sangoeri Sevmiyorsan ayıp ettin reis.**",
        "**Hayatında hiç evlenmiceksin, Evliliğe karşı çıkacaksın.**",
        "**Kendine dikkat et bak sende göz var, dur dur hem de iki tane.**",
        "**Fortesi Sevmiyosan Ayıp Ettin Reis.**",
        "**Çok yakın zamanda havalar ısınacak, sende yavaş yavaş terleyeceksin.**",
        "**Kısa bir süre içinde beklediğin bir yerden iyi bir haber alacaksın.**",
        "**Kahve falında balık para demekse; en büyük hazinemdir gözlerindeki okyanus.**",
        "**Barmene fal baktırdım, dört dubleden sonra her şey güzel olacak dedi.**",
        "**Fallara baktım çıkmıyorsun, yollara baktım gelmiyorsun, bende yattım uyudum.**",
        "**Karanlık bir gece geçireceksin ve ondan sonra güzel bir haber alacaksın.**",
        "**Kahve içtikten sonra fal bakma için çevrilen fincanın içinde tek şey vardır. O da kahvenin telvesi.**",
        "**Eşek gitmez yolların var, yap yap bitmez işlerin var, uçan kuşta gelecek haberin var.**",
        "**Bak bak bak görüyor musun? Kaplumbağa var. Ay kızım sen ilerde çok mutlu bir yuva kuracaksın.**",
        "**Arkadaşlar gelince köpüklü kahveler içilir, fincanlar ter çevrilir fala bakmak için açılır.**",
        "**Sözümüzün eri olmalıyız: kırılacak kafaları kırmalıyız. Bize acınmadığı için acımamalıyız. Oğuz Atay**",
        "**Sarışın mı desem, esmer mi desem, kumrala da benziyor, yok yok demeyim en iyisi.**",
        "**Gel senin falına bakayım, çıkmayanı çıkarayım, görmediklerini göstereyim, cebindeki son kuruşunu da alayım.**",
        "**Kahve muhabbetiyle her zaman güzel olur. Hele bir de üstüne fal muhabbeti olursa daha da iyi gelir.**",
        "**KeremRK yı sevmiyosan Ayıp Ettin Reis.**",
        "**İki tane yolun var ikisi de aynı yere çıkıyor ama dikkat et birisi engellerle dolu, diğeri aydınlık. Seçim senin elinde olacak.**",
        "**Papatya kızmadı hiçbir zaman yapraklarından fal bakılmasına. Gün olur belki sevmeyi de öğretebilirim umuduyla.**",
        "**Sana gece şişip sabah sönen bir şey görüyorum, balon gibi ama balona benzemiyor, salam gibi ama salama da benzemiyor.**",
        "**Seni çok seven birisi var, senin için yanıyor, ölüp kavruluyor. İsminin de baş harfi a ile z arasında bir harf.**",
        "**Çevrende birisi var, sana dolanıp durur, üç vakte kadar gelip seni babandan isteyecek, çok mutlu olacaksınız, üç çocuğunuz olacak.**",
        "**Falcıya, büyücüye, kahine giderek, onların söylediklerine inanan, Kur’an-ı kerime inanmamış olur. Hadisi Şerif**",
        "**Papatya fallarının her zaman tek bir sonucu vardır; elinize bakarsanız ve size kalan tek şeyin bir sap olduğunu görürsünüz.**",
        "**Çok üzülmüşsün sen çok gözyaşı dökmüşsün ama şimdi iyisin. Hatta sen üzüldüğün zaman gözlerinden yaş gelmiş.**",
        "**Bak görüyorum, hem de çok iyi görüyorum şükürler olsun Allah’ım bana bunları gösterdiğin için. Havuç ye göze çok iyi geliyor.**",
        "**Bir uzak bir kısa yolun var. Kısa yoldan gidersen ite dalanırsın, uzak yoldan gidersen çalıya dolanırsın en güzeli sen evde otur.**",
        "**Boş yere papatya fallarında sen aramışım, boş yere papatyanın çiçeklerini koparmışım, kahve fincanlarında hep sana giden yollar aramışım.**",
        "**Sana bir haber gelecek ama sen kapıda, bacada pencere de bekleme, haber olmadık anda, olmadık yerde gelebilir, olmadı gelmeyebilir de.**",
        "**Bak burada bir yol var hem de hem gidiş hem geliş, hız sınırı 110 km, bak bak az ilerde radar var, hah işte o radar arabasının içindeki polis sana aşık olacak.**"
    ]
    var ilgincsöz = ilgincsöz[Math.floor(Math.random(1) * ilgincsöz.length)]
    const ilgincsözembed = new Discord.MessageEmbed()
    .setColor("#FF00F0")
    .setAuthor(`Fal`, message.author.avatarURL())
    .setFooter(`${message.author.username} Falın..`)
  .setDescription(`${ilgincsöz}`)
    return message.channel.send(ilgincsözembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["fl","fal"],
  permLevel: 0
};

exports.help = {
  name: 'falbak',
  description: 'Falını Gösterir...',
  usage: 'fal'
}