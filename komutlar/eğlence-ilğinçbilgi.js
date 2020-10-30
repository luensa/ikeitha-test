const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var ilgincsöz = [
        "'Inside' isimli video oyununun ses tasarımcıları oyunun soundtrack'inin daha ürpertici ve etkili olması için gerçek bir insan kafatası kullanmışlardır.",
        "Sultan I. İbrahim, cariyelerinden hangisinin başka bir adamla ilişkisini olduğunu öğrenemeyince 280 cariyesinin hepsini birden boğdurduğu iddia ediliyor.",
        "Yaklaşık olarak insanların %80'ini doğdukları yerin 80 km yakınlarında öldüğü iddia edilmektedir.",
        "Fregoli Sendromuna sahip kişiler tanıştıkları insanlarının hepsinin aynı kişi olduğuna ama görünüşlerini değiştirdiklerine inanır.",
        "Güney Kore'de bulunan Mapo Köprüsü'ndeki intiharları azaltmak için köprünün adı **Yaşam Köprüsü** olarak değiştirilmiş ve üzerine pozitif mesajlar eklenmiştir. Ancak bu değişikliklerden sonra intihar oranı 6 kat artmıştır.",
        "Her yıl yeni örümcek türleri keşfedilir. Dışarda hala bulunmayı bekleyen yüzlerce binlerce tür vardır...",
        "Titanik'in inşasına 7 milyon dolar harcanmıştı. Filmin maliyeti ise 200 milyon dolardı.",
        "Gülmek, stres hormonunu azaltır ve bağışıklık sistemini güçlendirir. 6 yaşındaki bir çocuk günde ortalama 300 kez gülerken, yetişkinler yalnızca 15-100 kez gülerler.",
        "Antik Yunan'da zengin aile çocukları hayatları boyunca kılsız olmaları için doğdukları anda zeytinyağına batırılırlardı.",
        "Her gün 12 yeni doğan bebek yanlış aileye veriliyor.",
        "Dünyanın en geniş yolu olan Brezilya'daki Anıtsal Eksen'de 160 araba yan yana gidebilir.",
        "İnsanlar, yılda ortalama 5 milyon kez nefes alırlar.",
        "Atlı insan heykellerinde, atın iki ön ayağı da havadaysa kişi savaşta ölmüştür, atın tek ayağı havadaysa kişi savaşta aldığı yaralar yüzünden ölmüştür, atın tüm ayakları yere değiyorsa o kişi doğal sebeplerden ölmüştür.",
        "Bozuk bir parayı yazı tura için 10.000 kez attığınızda, 5.000 kez tura gelmez; sayı yaklaşık 4.950'dir. Çünkü tura yüzündeki resim ağırlığı artırır ve dolayısıyla altta kalır.",
        "İnsanlar 300 kemikle doğarlar; yetişkin olduklarında ise bu sayı 206'ya düşer.",
        "Bir yılda basılan Monopoly paralarının sayısı, dünya genelinde basılan gerçek para sayısından daha fazla.",
        "Her yıl uçak kazalarında ölen insan sayısından daha fazla insan eşekler tarafından öldürülüyor.",
        "Kaju olarak bildiğimiz çerez aslında kaju meyvesinin sapıdır.",
        "Ananas aslında meyve değildir ve tarlada bu şekilde büyür.",
        "Su aygırının sütü pembe renklidir.",
        "Mavi balinaların kalbi o kadar büyüktür ki bir insan atardamarları içerisinde rahatlıkla yüzebilir.",
        "Kuzey Kore ile Finlandiya'yı ayıran tek ülke Rusya'dır.",
        "'Duck Hunt' aslında iki kişilik bir oyundur.İkinci oyuncu ördeği kontrol eder.",
        "Plüton keşfedildiği tarihten itibaren bir kez bile güneşin etrafında tam tur dönmemiştir. Bu yüzden artık bir gezegen olarak kabul edilmiyor.",
        "Bal güneş görmediği sürece asla bozulmaz.",
        "Mario blokları eliyle kırar, kafasıyla değil",
        "19. yüzyıldaki tüm insanlar, şuan 2 dakikada çekilen fotoğraflar kadar fotoğraf çekememişti.",
        "Yer fıstığı aslında bir baklagildir ve toprağın altında büyür.",
        "Her 5000 bebekten birisi anüsü olmadan (imperforate anus) doğuyor ve hastane ortamında anüs yapılması gerekiyor.",
        "Gökyüzündeki yıldız sayısı dünya üzerindeki tüm plajlardaki kum tanesi sayısından fazladır.",
        "Bin saniye yaklaşık 16 dakika, bir milyon saniye yaklaşık 11 gün, bir milyar saniye yaklaşık 32 yıl ve bir trilyon saniye yaklaşık 32.000 yıl eder.",
        "İnsan DNA'sı %50 oranında muz DNA'sı ile aynıdır.",
        "İlk 'Star Wars' Filmi yayınlandığında (25 Mayıs 1977) Fransa'da hala giyotin ile idam yasaldı. Giyotin, kelle vurdurtmaya benzer bişeydir.",
        "Rusya, Pluto'dan daha büyük bir yüzölçümüne sahiptir.",
        "Ahtapotların üç tane kalbi vardır.",
        "Fareler ve atlar kusamaz.",
        "Yasalara göre; Belçika'da her ilkokul öğrencisinin mızıka dersi alması zorunludur.",
        "Şayet soğan doğrarken sakız çiğnerseniz; evet, ağlamazsınız.",
        "İnsanoğlunun vücudundaki en güçlü kas, çene kasıdır.",
        "Bir okyanusun en derin yerinde, demir bir topun dibe çökmesi bir saatten uzun sürer.",
        "Bugüne kadar ölçülmüş en büyük buz dağı, 200 mil uzunluğunda ve 60 mil genişliğindedir ve Belçika'dan daha büyük bir yüzölçümüne sahiptir.",
        "İnsanın gözü tam olarak 576 megapikseldir.",
        "Işık saniyede 300.000 km yol alıyor.",
        "Su samurları el ele tutuşarak uyuyorlar.",
       "Dünyanın en uzun süren trafik sıkışıklığı 12 gün sürdü, 100 km kuyruk oluştu ve araçlar günde 1 kilometre ilerleyebildiler",
      "Taklitçi ahtapot isimli ahtapot, sadece renk değiştirmekle kalmıyor, aynı zamanda dil balığı, aslan balığı ve deniz yılanı gibi hayvanların şekline de bürünebiliyor.",
        "Kadın Memesi Ellemek Stresi Erkeklerde %70 Azaltıyor."
        
    ]
    var ilgincsöz = ilgincsöz[Math.floor(Math.random(1) * ilgincsöz.length)]
    const ilgincsözembed = new Discord.MessageEmbed()
    .setColor("#FF00F0")
    .setAuthor(`İlginç Bilgi`, message.author.avatarURL())
    .setFooter(`${message.author.username} bir ilginç bilgi öğrendi.`)
  .setDescription(`${ilgincsöz}`)
    return message.channel.send(ilgincsözembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ib","ilgincbilgi"],
  permLevel: 0
};

exports.help = {
  name: 'ilginçbilgi',
  description: 'Bilmediginiz bir sürü ilginc bilgi verir.',
  usage: 'ilginçbilgi'
}