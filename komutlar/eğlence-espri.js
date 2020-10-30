const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var ilgincsöz = [
        "İnsanların seni ezmesine izin verme; Ehliyet al, sen onları ez...",
        "İlahi Azrail ... Sen adamı öldürürsün!",
        "Mafya babası olmak için oğlumun adını “Mafya” koydum.",
        "Kim vurduya gittim birazdan gelecem...",
        "Zenginler et, fakirler hayalet yer.",
        "Bugünlerde gözüm çok KIZarıyor.- Benimde arıyor ya!",
        "Hava korsanı uçağı kaçıracaktı ama yapamadı çünkü uçağı kaçırdı.",
        "GİT’Arı’ getir de biraz şarkı söyleyelim. -Abi arı sokmasın!",
        "Sana bir kıllık yapayım, kıllarını koyarsın.",
        "Seven unutmaz oğlum, eight unutur.",
        "Cem Uzan, üstünü örteyim.",
        "Geçenlerde izdivaç programında adam evim, arabam, param var dedi üç hatun aynı anda elektrik aldı. Adam bildiğin üçlü priz çıktı.",
        "Haydi Unkapanı’na gidip birkaç kapan kuralım. Belki un yakalarız",
        "Saçını sarıya boyatıp kaşlarını zift karası bırakınca doğal sarışın olmuyorsun tatlım. Borussia Dortmund deplasman forması gibi oluyon.",
        "Sonuçta çubuk krakerle sigara içme taklidi yapan çocuklardık biz. Hangi ara bu kadar cool olduk.",
        "Adamın biri güneşte yanmış, ay da düz.",
        "Ben Yedigün içiyorum sen Onbeşgün iç.",
        "Sinemada on dakika ara dedi, aradım aradım açmadı.",
        "Röntgen Filmi çektirdik, yakında sinemalarda.",
        "Adamın Biri Notebook Almış, DELLenmiş.",
        "Geçen gün taksi çevirdim hala dönüyor.",
        "Ben hikâye yazarım Ebru Destan.",
        "Geçen gün geçmiş günlerimi aradım ama meşguldü.",
        "Tebrikler kazandınız, şimdi tencere oldunuz!",
        "Kaba kuvvet uygulama, kap kırılabilir.",
        "Türkiye’nin en yeni şehri – Nevşehir",
        "Ayna'nın karşısında süslenme, manga'nın karşısında süslen.",
        "Geçen ‘fil’e çorap aldım, zürafaya almadım.",
        "Yılanlardan korkma, yılmayanlardan kork.",
        "Ben kahve içiyorum, Nurgül Yeşilçay.",
        "Bak şu karşıdaki uçak PİSTİ, ama bir türlü temizlemediler.",
        "Geçen gün geçmiş günlerimi aradım ama meşguldü.",
        "Adamın birisi televizyona çıkmış bir daha indirememişler.",
        "Adamın biri gülmüş, saksıya koymuşlar.",
        "Sinüs 60, kosinüs tutmuş…",
        "Adamın biri kızmış istemeye gelmişler.",
        "Ayda 5 milyon kazanma ister misin? Evet.  O zaman Ay’a git.",
        "Funda Arar dediler ama hala daha aramadı",
        "Adamın kafası atmış bacakları eşek",
        "Uzun lafın kısası : U.L.",
        "Yağmur yağmış, kar peynir!",
        "Sakla samanı, inekler aç kalsın.",
        "Baraj dendi mi, akan sular durur.",
        "Dünya dönermiş ay da köfte…",
        "Son gülen en geç anlayandır",
        "Bu erikson, başka erik yok",
        "Seven unutmaz oğlum, eight unutur",
        "Sen kamyonu al, Leonardo da vinci",
        "Adamın biri gülmüş, bahçeye dikmişler"
    ]
    var ilgincsöz = ilgincsöz[Math.floor(Math.random(1) * ilgincsöz.length)]
    const ilgincsözembed = new Discord.MessageEmbed()
    .setColor("#FF00F0")
    .setAuthor(`Soğuk Espri`, message.author.avatarURL())
    .setFooter(`${message.author.username} soğuk espri yaptın`)
  .setDescription(`${ilgincsöz}`)
    return message.channel.send(ilgincsözembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ei","espri"],
  permLevel: 0
};

exports.help = {
  name: 'espri',
  description: 'Soğuk Espiriler Yaparım..',
  usage: 'espri'
}