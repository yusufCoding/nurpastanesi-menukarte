import logo from "../assets/logo.png";
import { menuImages } from "./images";

export const brand = {
  logo,
  title: "Nur Pastanesi",
  subtitle: "Hagen",
};

export const menuCategories = [
  {
    id: "kahvalti",
    title: "Kahvaltı",
    coverImage: menuImages["1 acik bufe"],
    panel: {
      headline: "Kahvaltı",
      featured: [
        {
          name: "Acik Büfe Kahvaltı",
          image: menuImages["1 acik bufe"],
          description:
            "Sınırsız içerik ve sınırsız içecek ile kişi başı fiyatıdır. Haftanin her günü 09:00-15:00 saatleri arasinda sunulur.",
          price: 17.50,
          currency: "Euro",
        },
        {
          name: "Simit Menü",
          image: menuImages["3 simit menu"],
          description:
            "Simit, Peynir, Domates, Zeytin",
          price: 5.99,
          currency: "Euro",
        },
        {
          name: "Kahvalti Tabagi",
          image: menuImages["2 kahvalti tabagi"],
          description:
            "Beyaz peynir, Kaşar peynir, Zeytin, Salatalık, Domates, Reçel, Tereyağı, Bal, Patlıcan kızartması , Patates kızartması, Haşlanmış yumurta, Ekmek sepeti",
          price: 8.50,
          currency: "Euro",
        },
        {
          name: "Sicak Kahvalti Tabağı",
          image: menuImages["144 sicak kahvalti"],
          description:"Sucuklu yumurta, Menemen ya da Omlet. Domates, Salatalik, Zeytin, Gouda Peyniri, Beyaz Peynir, Maydonoz ve Ekmek esliginde sunulur.",
          price: 11.90,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "sahanlar",
    title: "Sahanlar",
    coverImage: menuImages["4 sahanda yumurta"],
    panel: {
      headline: "Sahanlar",
      featured: [
        {
          name: "Sahanda Yumurta",
          image: menuImages["4 sahanda yumurta"],
          description:
            "Kızdırılmış tereyağına 4 adet yumurta ile",
          price: 6.90,
          currency: "Euro",
        },
        {
          name: "Sahanda Sucuklu Yumurta",
          image: menuImages["5 sahanda sucuklu yumurta"],
          description:
            "Dana kasap sucuk ve 4 yumurta ile",
          price: 7.90,
          currency: "Euro",
        },
        {
          name: "Sahanda Kiymali Yumurta",
          image: menuImages["6 sahanda kiymali yumurta"],
          description:
            "Taze dana kıyma ve 4 yumurta ile",
          price: 8.50,
          currency: "Euro",
        },
        {
          name: "Sahanda Menemen",
          image: menuImages["6 sahanda menemen"],
          description:
            "Taze Domates, Biber ve 2 yumurta ile",
          price: 7.90,
          currency: "Euro",
        },
        {
          name: "Sahanda Sucuklu Menemen",
          image: menuImages["7 sahanda sucuklu menemen"],
          description:
            "Taze Domates, Biber, Dana kasap sucuk ve 2 yumurta ile",
          price: 7.90,
          currency: "Euro",
        },
        {
          name: "Sahanda Kiymali Menemen",
          image: menuImages["8 kiymakli menemen"],
          description:
            "Taze Domates, Biber, Dana kıyma ve 2 yumurta ile",
          price: 8.50,
          currency: "Euro",
        },
        {
          name: "Ilave Malzeme",
          image: menuImages["9 SAHANDA ilave malzeme"],
          description:
            "Beyaz peynir, Kaşar peynir, Yumurta, Sucuk, Kıyma",
          price: 1.00,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "tostlar",
    title: "Tostlar",
    coverImage: menuImages["10 sucuklu tost"],
    panel: {
      headline: "Tostlar",
      featured: [
        {
          name: "Sucuklu Tost",
          image: menuImages["10 sucuklu tost"],
          description:
            "Dana sucuklu tost",
          price: 6.00,
          currency: "Euro",
        },
        {
          name: "Kasarli Tost",
          image: menuImages["11 kasarli tost"],
          description:
            "Taze süt kaşarı",
          price: 6.00,
          currency: "Euro",
        },
        {
          name: "Karisik Tost",
          image: menuImages["12 karisik tost"],
          description:
            "Taze kaşar peynir ve Dana kasap sucuğu",
          price: 6.90,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "gözlemeler",
    title: "Gözlemeler",
    coverImage: menuImages["13 peynirli gozleme"],
    panel: {
      headline: "Gözlemeler",
      featured: [
        {
          name: "Peynirli Gözleme",
          image: menuImages["13 peynirli gozleme"],
          description:
            "Taze beyaz peynir",
          price: 6.00,
          currency: "Euro",
        },
        {
          name: "Ispanakli ve Peynirli Gözleme",
          image: menuImages["14 ispanak peynir gozleme"],
          description:
            "Taze ıspanak ve beyaz peynir",
          price: 6.00,
          currency: "Euro",
        },
        {
          name: "Patatesli Gözleme",
          image: menuImages["15 patatesli gozleme"],
          description:
            "Haşlanmış pul biber, tuz ve sogan ile marine edilmis patates",
          price: 6.00,
          currency: "Euro",
        },
        {
          name: "Kiymali ve Kasarli Gözleme",
          image: menuImages["16 kiymali kasarli gozleme"],
          description:
            "Dana kıyma ve taze kaşar peyniri",
          price: 7.90,
          currency: "Euro",
        },
        {
          name: "Cikolatali Gözleme",
          image: menuImages["17 cikilatali gozleme"],
          description:
            "Sütlü çikolata ile",
          price: 7.90,
          currency: "Euro",
        },
        {
          name: "Ilave Malzeme",
          image: menuImages["18 gozleme ilave malzeme"],
          description:
            "Beyaz peynir, Kaşar peynir, Mozarella, Yumurta, Sucuk, Kıyma, Patates, Ispanak, Çikolata",
          price: 1.00,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "corbalar",
    title: "Corbalar",
    coverImage: menuImages["19 mercimek corbasi"],
    panel: {
      headline: "Corbalar",
      featured: [
        {
          name: "Mercimek Corbasi",
          image: menuImages["19 mercimek corbasi"],
          description:
            "Taze süzme mercimek çorbası kızarmış ekmek ve garnitür ile servis edilir",
          price: 6.00,
          currency: "Euro",
        },
        {
          name: "Kelle Paca Corbasi",
          image: menuImages["20 kellepaca"],
          description:
            "Şefimizin elinden günlük hazırlanan taze kellepaça çorbası kızarmış ekmek ve garnitür ile servis edilir",
          price: 7.50,
          currency: "Euro",
        },
        {
          name: "Iskembe Corbasi",
          image: menuImages["21 iskembe corbasi"],
          description:
            "Şefimizin elinden günlük hazırlanan taze işkembe çorbası kızarmış ekmek ve garnitür ile servis edilir",
          price: 7.50,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "atistirmaliklar",
    title: "Atistirmaliklar",
    coverImage: menuImages["22 icli kofte"],
    panel: {
      headline: "Atistirmaliklar",
      featured: [
        {
          name: "Icli Köfte",
          image: menuImages["22 icli kofte"],
          description:
            "2 adet 7,50€ | 4 adet 12,90€",
          price: 3.90,
          currency: "Euro",
        },
        {
          name: "Aile Boyu Cig Köfte",
          image: menuImages["158 aile boyu"],
          description:
            "1 Kilo, lavaş ve yeşillikle beraber servis edilir",
          price: 22.90,
          currency: "Euro",
        },
        {
          name: "Cigköfte Porsiyon",
          image: menuImages["23 cigkofte 8 sikim"],
          description:
            "10 adet",
          price: 8.90,
          currency: "Euro",
        },
        {
          name: "Porsiyon Falafel",
          image: menuImages["49 porsiyon falafel"],
          description:
            "8 adet falafel, Salata ve Patates Kızartması ile servis edilir",
          price: 12.90,
          currency: "Euro",
        },
        {
          name: "Nuggets",
          image: menuImages["24 nuggets"],
          description:
            "7 adet Nuggets, Patates kızartması ve sos ile servis edilir",
          price: 9.90,
          currency: "Euro",
        },
        {
          name: "Sosis Tabagi",
          image: menuImages["25 sosis menu"],
          description:
            "Patates Kızartması, Mayonez ve Ketçap ile servis edilir",
          price: 10.90,
          currency: "Euro",
        },
        {
          name: "Patates Kizartmasi",
          image: menuImages["72 patates kizartmasi"],
          description:
            "Mayonez ve Ketçap ile servis edilir",
          price: 4.50,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "burgerler",
    title: "Burgerler",
    coverImage: menuImages["27 double cheese burger"],
    panel: {
      headline: "Burgerler",
      featured: [
        {
          name: "Cocuk Cheeseburger",
          image: menuImages["153 cocuk burger"],
          description:
            "1 x Steak, Sauce, Cheddar Peyniri",
          price: 6.90,
          currency: "Euro",
        },
        {
          name: "Double Cheeseburger",
          image: menuImages["27 double cheese burger"],
          description:
            "2x100 gr Biftek Eti, Domates, Marul, Turşu, Cheddar Peyniri ve Sos",
          price: 9.90,
          currency: "Euro",
        },
        {
          name: "Double Hamburger",
          image: menuImages["28 double hamburger"],
          description:
            "2x100 gr Biftek Eti, Domates, Marul, Turşu ve Sos",
          price: 9.90,
          currency: "Euro",
        },
        {
          name: "Double Tavuk Burger",
          image: menuImages["29 double tavuk burger"],
          description:
            "2x100 gr Tavuk Eti, Domates, Marul, Turşu ve Sos",
          price: 9.90,
          currency: "Euro",
        },
        {
          name: "Burger Menü",
          image: menuImages["30 burger menu"],
          description:
            "Burgerinizin yanına ilave patates kızartması ve seçeceğiniz içecek ile menüye çevirin!",
          price: 14.90,
          currency: "Euro",
        },
        {
          name: "Patates Kizartmasi (Ekstra)",
          image: menuImages["72 patates kizartmasi"],
          description:
            "Burgerinizin yanına ilave patates kızartması",
          price: 2.50,
          currency: "Euro",
        },
        {
          name: "Ilave Malzeme",
          image: menuImages["32 burger extra"],
          description:
            "Burgerinize ilave Karamelize Soğan, Patlıcan Ezmesi veya Mantar",
          price: 1.00,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "pideler",
    title: "Pideler",
    coverImage: menuImages["33 lahmacun"],
    panel: {
      headline: "Pideler",
      featured: [
        {
          name: "Lahmacun",
          image: menuImages["33 lahmacun"],
          description:
            "Dana ve kuzu kıymalı lahmacun, limon ve maydanoz ile servis edilir",
          price: 4.90,
          currency: "Euro",
        },
        {
          name: "Lahmacun Menü",
          image: menuImages["34 lahmacun menu"],
          description:
            "Ekstra Salata ve meze ile servis edilir",
          price: 6.90,
          currency: "Euro",
        },
        {
          name: "Dönerli Lahmacun Menü",
          image: menuImages["35 donerli lahmacun"],
          description:
            "Lahmacun üstüne döner eklenir. Salata ve meze ile servis edilir",
          price: 9.90,
          currency: "Euro",
        },
        {
          name: "Karadeniz Usülü Pide",
          image: menuImages["36 kiymali pide"],
          description:
            "Dana kıymadan yapılan karadeniz usulü pide, Salata ve meze ile servis edilir",
          price: 11.90,
          currency: "Euro",
        },
        {
          name: "Konya Usülü Pide",
          image: menuImages["36 kiymali pide"],
          description:
            "Dana kıymadan yapılan karadeniz usulü pide, Salata ve meze ile servis edilir",
          price: 12.90,
          currency: "Euro",
        },
        {
          name: "Kusbasili Pide",
          image: menuImages["37 kusbasili pide"],
          description:
            "Dana kuşbaşı etinden yapılan pide, Salata ve meze ile servis edilir",
          price: 13.90,
          currency: "Euro",
        },
        {
          name: "Kasarli Pide",
          image: menuImages["38 kasarli pide"],
          description:
            "Taze kaşarli pide, Salata ve meze ile servis edilir",
          price: 11.90,
          currency: "Euro",
        },
        {
          name: "Sucuklu Kasarli Pide",
          image: menuImages["39 sucuklu kasarli"],
          description:
            "Dana sucuklu ve taze kasarli pide , Salata ve meze ile servis edilir",
          price: 11.90,
          currency: "Euro",
        },
        {
          name: "Dönerli Kasarli Pide",
          image: menuImages["40 donerli kasarli pide"],
          description:
            "Dana döner ve taze süt kaşarli pide, Salata ve meze ile servis edilir",
          price: 11.90,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "pizzalar",
    title: "Pizzalar",
    coverImage: menuImages["41 margarita pizza"],
    panel: {
      headline: "Pizzalar",
      featured: [
        {
          name: "Margarita Pizza",
          image: menuImages["41 margarita pizza"],
          description:
            "Domates soslu mozzarella peynirli pizza",
          price: 9.90,
          currency: "Euro",
        },
        {
          name: "Ton Balikli Pizza",
          image: menuImages["42 ton balikli pizza"],
          description:
            "Ustamızın elinden ton balıklı pizza",
          price: 11.90,
          currency: "Euro",
        },
        {
          name: "Funghi Pizza",
          image: menuImages["43 Funghi pizza"],
          description:
            "Taze mantarlı pizza",
          price: 11.90,
          currency: "Euro",
        },
        {
          name: "Sucuklu Pizza",
          image: menuImages["44 sucuklu pizza"],
          description:
            "Dana sucuklu pizza",
          price: 12.90,
          currency: "Euro",
        },
        {
          name: "Dönerli Pizza",
          image: menuImages["154 donerli pizza"],
          description:
            "Özel dönerli pizza",
          price: 12.90,
          currency: "Euro",
        },
        {
          name: "Karisik Pizza",
          image: menuImages["46 karisik pizza"],
          description:
            "İsteğe göre seçeceğiniz malzemelerle karışık pizza",
          price: 13.90,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "makarnalar",
    title: "Makarnalar",
    coverImage: menuImages["50 manti"],
    panel: {
      headline: "Makarnalar",
      featured: [
        {
          name: "Sarimsakli Yogurtlu Manti",
          image: menuImages["50 manti"],
          description:
            "Taze mantı, salçalı sos ve sarımsaklı yoğurt",
          price: 11.90,
          currency: "Euro",
        },
        {
          name: "Kremali Makarna",
          image: menuImages["51 kremali makarna"],
          description:
            "Penne makarna ile servis edilir",
          price: 9.90,
          currency: "Euro",
        },
        {
          name: "Kremali Mantarli Makarna",
          image: menuImages["52 kremali mantarli makarna"],
          description:
            "Penne makarna ile servis edilir",
          price: 10.90,
          currency: "Euro",
        },
        {
          name: "Kremali Tavuklu Makarna",
          image: menuImages["53 kremali mantarli makarna"],
          description:
            "Penne makarna ile servis edilir",
          price: 10.90,
          currency: "Euro",
        },
        {
          name: "Kiymali Bolonez Makarna",
          image: menuImages["54 kiymali bolonez makarna"],
          description:
            "Penne makarna ile servis edilir",
          price: 10.90,
          currency: "Euro",
        },
        {
          name: "Domates Soslu Makarna",
          image: menuImages["55 domates soslu makarna"],
          description:
            "Penne makarna ile servis edilir",
          price: 9.90,
          currency: "Euro",
        },
        {
          name: "Peynirli Makarna",
          image: menuImages["56 pernirli makarna"],
          description:
            "Penne makarna, 3 çeşit peynir kulanılarak oluşturulan özel sos ile",
          price: 10.90,
          currency: "Euro",
        },
        {
          name: "Ilave Firinda Kasar",
          image: menuImages["57 firinda makarna"],
          description:
            "Makarnanızın üzerine fırında eritilmiş ve kızartılmış taze kaşar peyniri ilavesi",
          price: 2.00,
          currency: "Euro",
        },
        {
          name: "Ilave Ek Malzeme",
          image: menuImages["157 ilave"],
          description:
            "Makarnanızın üzerine talep edeceğiniz her bir ek malzeme için",
          price: 1.00,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "izgaralar",
    title: "Izgaralar",
    coverImage: menuImages["58 porsiyon kofte"],
    panel: {
      headline: "Izgaralar",
      featured: [
        {
          name: "Porsiyon Köfte",
          image: menuImages["58 porsiyon kofte"],
          description:
            "6 adet (300 gr) ızgara köfte, lavas, Salata, Patates kızartması ve Meze ile servis edilir",
          price: 17.90,
          currency: "Euro",
        },
        {
          name: "Dürüm Köfte",
          image: menuImages["59 durum kofte"],
          description:
            "Lavaşta 4 adet ızgara köfte, Salata, Patates kızartması ve meze",
          price: 13.90,
          currency: "Euro",
        },
        {
          name: "Ekmek Arası Köfte",
          image: menuImages["60 ekmek arasi kofte"],
          description:
            "Büyük sandviç ekmeğine 4 adet (200 gr) Kasap köfte, Salata, Patates kızartması, Meze ve Sos",
          price: 13.90,
          currency: "Euro",
        },
        {
          name: "Porsiyon Tavuk Sis",
          image: menuImages["61 porsiyon tavuk sis"],
          description:
            "260 gr Izgara tavuk parçaları, Salata, Patates kızartması ve Lavaş ile servis edilir",
          price: 17.90,
          currency: "Euro",
        },
        {
          name: "Dürüm Tavuk Sis",
          image: menuImages["62 durum tavuk sis"],
          description:
            "Lavaşta 9 adet ızgara tavuk, Salata, Patates kızartması",
          price: 13.90,
          currency: "Euro",
        },
        {
          name: "Ekmek Arası Tavuk Sis",
          image: menuImages["63 ekmek arasi tavuk sis"],
          description:
            "Büyük sandviç ekmeğine 180 gr Izgara tavuk, Salata, Patates kızartması",
          price: 13.90,
          currency: "Euro",
        },
        {
          name: "Tavuk Pirzola",
          image: menuImages["64 tavuk pirzola"],
          description:
            "Izgara tavuk, Salata, Patates kızartması, isteğe göre ilave kremalı mantarlı sos",
          price: 17.90,
          currency: "Euro",
        },
        {
          name: "Tavuk Sote",
          image: menuImages["65 tavuk sote"],
          description:
            "Izgara tavuk, Salata, Makarna ya da Patates kızartması, Sos ve Tırnaklı pide",
          price: 17.90,
          currency: "Euro",
        },
        {
          name: "Tavuk Sac Tava",
          image: menuImages["66 tavuk sac tava"],
          description:
            "260 gr Izgara tavuk, Salata, Sos ve Tırnaklı pide",
          price: 17.90,
          currency: "Euro",
        },
        {
          name: "Et Sac Tava",
          image: menuImages["67 et sac tava"],
          description:
            "260 gr Dana bonfile, Salata, Sos ve Tırnaklı pide",
          price: 18.90,
          currency: "Euro",
        },
        {
          name: "Mantar Sote",
          image: menuImages["68 mantar sote"],
          description:
            "Kızarmış mantar, Salata, Patates kızartması ile servis edilir",
          price: 12.90,
          currency: "Euro",
        }
      ],
    },
  },
  {
    id: "dönerler",
    title: "Dönerler",
    coverImage: menuImages["69 ekmek arasi doner"],
    panel: {
      headline: "Dönerler",
      featured: [
        {
          name: "Dürüm Döner",
          image: menuImages["70 doner durum"],
          description:
            "170 gram Et veya Tavuk Döner, Kokteyl sos, Acı sos, Cacık , Kırmızı lahana, Beyaz lahana, Soğan, Salatalık, Domates",
          price: 8.90,
          currency: "Euro",
        },
        {
          name: "Porsiyon Döner",
          image: menuImages["71 porsiyon doner"],
          description:
            "300 gram Et Döner, Patates Kizartmasi, Salata ve Sos",
          price: 16.90,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "salatalar",
    title: "Salatalar",
    coverImage: menuImages["74 mevsim salata"],
    panel: {
      headline: "Salatalar",
      featured: [
        {
          name: "Mevsim Salata",
          image: menuImages["74 mevsim salata"],
          description:
            "Mevsime özel, taze sebzelerden oluşan salata",
          price: 7.90,
          currency: "Euro",
        },
        {
          name: "Tavuklu Salata",
          image: menuImages["75 tavuklu salata"],
          description:
            "Izgara tavuk parçalarıyla zenginleştirilmiş salata",
          price: 10.90,
          currency: "Euro",
        },
        {
          name: "Ton Balıklı Salata",
          image: menuImages["76 tonbalikli salata"],
          description:
            "Ton balığı, taze sebzeler ve yeşilliklerle bir araya getirilerek hazırlanan salata",
          price: 10.90,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "Waffel",
    title: "Waffel",
    coverImage: menuImages["140 Waffel Puderzucker"],
    panel: {
      headline: "Waffel",
      featured: [
        {
          name: "Pudra Sekerli Waffel",
          image: menuImages["140 Waffel Puderzucker"],
          description:
            "",
          price: 5.00,
          currency: "Euro",
        },
        {
          name: "Dondurmali ve sicak Visneli Waffel",
          image: menuImages["141 Waffel kirschen"],
          description:
            "Fistikli ve cikolatali enfes lezzet",
          price: 9.90,
          currency: "Euro",
        },
        {
          name: "Kremali Cilekli Waffel",
          image: menuImages["151 cilekli waffel"],
          description:
            "",
          price: 8.90,
          currency: "Euro",
        },
        {
          name: "Lotuslu, Fistikli ve Cikolatali Waffel",
          image: menuImages["152 karisik waffel"],
          description:
            "",
          price: 8.90,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "künefe",
    title: "Künefe",
    coverImage: menuImages["77 peynirli kunefe"],
    panel: {
      headline: "Künefe",
      featured: [
        {
          name: "Peynirli Künefe",
          image: menuImages["77 peynirli kunefe"],
          description:
            "",
          price: 8.90,
          currency: "Euro",
        },
        {
          name: "Peynirli ve Fistikli Künefe",
          image: menuImages["77 peynirli kunefe"],
          description:
            "",
          price: 11.90,
          currency: "Euro",
        },
        {
          name: "Katmer",
          image: menuImages["156 katmer"],
          description:
            "",
          price: 9.90,
          currency: "Euro",
        },
        {
          name: "Cikolatali Katmer",
          image: menuImages["155 cikolatali katmer"],
          description:
            "",
          price: 9.90,
          currency: "Euro",
        },
        {
          name: "Maras Dondurma",
          image: menuImages["78 maras dondurmasi"],
          description:
            "",
          price: 2.50,
          currency: "Euro",
        },
        {
          name: "Kaymak",
          image: menuImages["79 kaymak"],
          description:
            "",
          price: 1.50,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "serbetli",
    title: "Serbetli Tatlılar",
    coverImage: menuImages["121 fistik sarma"],
    panel: {
      headline: "Serbetli Tatlılar",
      featured: [
        {
          name: "Fistikli Sarma",
          image: menuImages["121 fistik sarma"],
          description:
            "Dilim",
          price: 2.50,
          currency: "Euro",
        },
        {
          name: "Fistikli Kuru Baklava",
          image: menuImages["122 kuru baklava"],
          description:
            "Dilim",
          price: 2.20,
          currency: "Euro",
        },
        {
          name: "Fistikli Havuc Dilimi",
          image: menuImages["123 havuc dilimi"],
          description:
            "Dilim",
          price: 5.50,
          currency: "Euro",
        },
        {
          name: "Fistikli Dondurmali Havuc Dilimi",
          image: menuImages["124 dondurmali havuc dilimi"],
          description:
            "Dilim",
          price: 7.90,
          currency: "Euro",
        },
        {
          name: "Fistikli Baklava",
          image: menuImages["125 fistikli baklava"],
          description:
            "Dilim",
          price: 2.20,
          currency: "Euro",
        },
        {
          name: "Fistikli Midye",
          image: menuImages["126 fistikli midye"],
          description:
            "Dilim",
          price: 2.20,
          currency: "Euro",
        },
        {
          name: "Fistikli Söbiyet",
          image: menuImages["127 fistikli sobiyet"],
          description:
            "Dilim",
          price: 2.10,
          currency: "Euro",
        },
        {
          name: "Soguk Baklava",
          image: menuImages["128 soguk baklava"],
          description:
            "Fistikli ve Cikolatali, dilim",
          price: 2.50,
          currency: "Euro",
        },
        {
          name: "Findikli Sarma",
          image: menuImages["129 findikli sarma"],
          description:
            "Dilim",
          price: 1.80,
          currency: "Euro",
        },
        {
          name: "Cevizli Ev Baklavasi",
          image: menuImages["130 cevizli baklava"],
          description:
            "Dilim",
          price: 1.80,
          currency: "Euro",
        },
        {
          name: "Cevizli Baklava",
          image: menuImages["130 cevizli baklava"],
          description:
            "Dilim",
          price: 1.80,
          currency: "Euro",
        },
        {
          name: "Fistikli Burma Kadayıf",
          image: menuImages["131 FISTIKLI BURMA KADAYIF"],
          description:
            "Dilim",
          price: 3.00,
          currency: "Euro",
        },
        {
          name: "Fistikli Düz Kadayif",
          image: menuImages["132 FISTIKLI DUZ KADAYIF"],
          description:
            "Dilim",
          price: 5.90,
          currency: "Euro",
        },
        {
          name: "Ilave Maras Dondurma",
          image: menuImages["78 maras dondurmasi"],
          description:
            "",
          price: 2.50,
          currency: "Euro",
        },
        {
          name: "Ilave Kaymak",
          image: menuImages["79 kaymak"],
          description:
            "",
          price: 1.50,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "geleneksel",
    title: "Geleneksel Tatlılar",
    coverImage: menuImages["80 firin sutlac"],
    panel: {
      headline: "Geleneksel Tatlılar",
      featured: [
        {
          name: "Firin Sütlac",
          image: menuImages["80 firin sutlac"],
          description:
            "Fırında üstü kızartılmış, soğuk servis edilen özel fırın sütlaç",
          price: 5.90,
          currency: "Euro",
        },
        {
          name: "Asure",
          image: menuImages["81 asure"],
          description:
            "Güne özel",
          price: 6.90,
          currency: "Euro",
        },
        {
          name: "Irmik Helvasi",
          image: menuImages["82 irmik helvasi"],
          description:
            "",
          price: 4.90,
          currency: "Euro",
        },
        {
          name: "Dondurmali Irmik Helvasi",
          image: menuImages["83 dondurmali irmik helvasi"],
          description:
            "",
          price: 6.90,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "dondurmalar",
    title: "Dondurmalar",
    coverImage: menuImages["78 maras dondurmasi"],
    panel: {
      headline: "Dondurmalar",
      featured: [
        {
          name: "Dilim Maras Dondurmasi",
          image: menuImages["78 maras dondurmasi"],
          description:
            "1 dilim sade maraş dondurması",
          price: 2.50,
          currency: "Euro",
        },
        {
          name: "Kup Dondurma",
          image: menuImages["84 kup dondurma"],
          description:
            "Sade, Çikolatalı ve Çilekli maraş dondurmasi",
          price: 3.00,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "pastalar",
    title: "Pastalar",
    coverImage: menuImages["85 ekler pasta"],
    panel: {
      headline: "Pastalar",
      featured: [
        {
          name: "Ekler Pasta",
          image: menuImages["85 ekler pasta"],
          description:
            "",
          price: 2.20,
          currency: "Euro",
        },
        {
          name: "Ekler Lotus",
          image: menuImages["149 lotuslu ekler"],
          description:
            "",
          price: 2.20,
          currency: "Euro",
        },
        {
          name: "Brownie",
          image: menuImages["86 browni"],
          description:
            "",
          price: 5.90,
          currency: "Euro",
        },
        {
          name: "Dondurmali Brownie",
          image: menuImages["87 dondurmali browni"],
          description:
            "1 dilim sade maraş dondurması ile",
          price: 8.50,
          currency: "Euro",
        },
        {
          name: "Tiramisu",
          image: menuImages["88 tramisu"],
          description:
            "",
          price: 6.90,
          currency: "Euro",
        },
        {
          name: "Medovik Pasta",
          image: menuImages["89 mevodik"],
          description:
            "",
          price: 6.90,
          currency: "Euro",
        },
        {
          name: "Lotus Cheesecake",
          image: menuImages["90 lotus cheese"],
          description:
            "",
          price: 6.90,
          currency: "Euro",
        },
        {
          name: "San Sebastian Cheesecake",
          image: menuImages["91 sansebastian"],
          description:
            "Sıcak Belçika çikolatası ile servis edilir",
          price: 6.90,
          currency: "Euro",
        },
        {
          name: "Trilece",
          image: menuImages["92 tralice"],
          description:
            "Karamelli",
          price: 5.90,
          currency: "Euro",
        },
        {
          name: "Cilekli Kare Pasta",
          image: menuImages["93 cilekli kare"],
          description:
            "",
          price: 5.90,
          currency: "Euro",
        },
        {
          name: "Malaga Pasta",
          image: menuImages["150 malaga"],
          description:
            "",
          price: 5.90,
          currency: "Euro",
        },
        {
          name: "Ibiza Pasta",
          image: menuImages["146 Ibiza"],
          description:
            "Muzlu",
          price: 5.90,
          currency: "Euro",
        },
        {
          name: "Oreolu Dilim Pasta",
          image: menuImages["95 kare oreo"],
          description:
            "",
          price: 5.90,
          currency: "Euro",
        },
        {
          name: "Cikolatali Dilim Pasta",
          image: menuImages["94 cikolatali kare"],
          description:
            "",
          price: 5.90,
          currency: "Euro",
        },
        {
          name: "Cappuccino Findikli Dilim Pasta",
          image: menuImages["95 kare kapicinolu"],
          description:
            "",
          price: 5.90,
          currency: "Euro",
        },
        {
          name: "Cilekli Dilim Pasta",
          image: menuImages["93 cilekli kare"],
          description:
            "",
          price: 5.90,
          currency: "Euro",
        },
        {
          name: "Opera Pasta",
          image: menuImages["96 opera pasta"],
          description:
            "",
          price: 5.90,
          currency: "Euro",
        },
        {
          name: "Ugur Böcegi Pasta",
          image: menuImages["97 ugur bocegi"],
          description:
            "",
          price: 4.90,
          currency: "Euro",
        },
        {
          name: "Mini Kalp Pasta",
          image: menuImages["98 kalp pasta"],
          description:
            "",
          price: 6.90,
          currency: "Euro",
        },
        {
          name: "Creamy Dubai Baklava",
          image: menuImages["148 creamy dubai"],
          description:
            "",
          price: 9.90,
          currency: "Euro",
        },
        {
          name: "Cedric Fistik Pasta",
          image: menuImages["142 Cedric"],
          description:
            "Fistikli ve cikolatali enfes lezzet",
          price: 9.90,
          currency: "Euro",
        },
        {
          name: "Dubai Cheesecake",
          image: menuImages["147 dubai cheese"],
          description:
            "",
          price: 8.90,
          currency: "Euro",
        },
        {
          name: "Cikolata Bomba",
          image: menuImages["145 cikolata bomba"],
          description:
            "",
          price: 8.90,
          currency: "Euro",
        },
        {
          name: "Dubai Magnolia",
          image: menuImages["143 Dubai magnolia"],
          description:
            "",
          price: 8.90,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "sicak",
    title: "Sicak Icecekler",
    coverImage: menuImages["100 buyuk cay"],
    panel: {
      headline: "Sicak Icecekler",
      featured: [
        {
          name: " Bardak Cay",
          image: menuImages["99 kucuk cay"],
          description:
            "",
          price: 1.50,
          currency: "Euro",
        },
        {
          name: "Büyük Cay",
          image: menuImages["100 buyuk cay"],
          description:
            "",
          price: 2.50,
          currency: "Euro",
        },
        {
          name: "Türk Kahvesi",
          image: menuImages["101 turk kahbesi"],
          description:
            "1 dilim sade maraş dondurması ile",
          price: 3.90,
          currency: "Euro",
        },
        {
          name: "Osmanli Kahvesi",
          image: menuImages["102 osmanli kahvesi"],
          description:
            "",
          price: 3.90,
          currency: "Euro",
        },
        {
          name: "Menengic Kahvesi",
          image: menuImages["103 menengec kahvesi"],
          description:
            "",
          price: 3.90,
          currency: "Euro",
        },
        {
          name: "Salep",
          image: menuImages["104 salep"],
          description:
            "",
          price: 3.90,
          currency: "Euro",
        },
        {
          name: "Espresso",
          image: menuImages["105 espresso"],
          description:
            "Büyük Boy: 3,90",
          price: 3.00,
          currency: "Euro",
        },
        {
          name: "Kaffe Creme",
          image: menuImages["106 kaffe creme"],
          description:
            "Büyük Boy: 3,90",
          price: 3.90,
          currency: "Euro",
        },
        {
          name: "Cappuccino",
          image: menuImages["106 CAPPUCCINO"],
          description:
            "Büyük Boy: 4,50",
          price: 3.50,
          currency: "Euro",
        },
        {
          name: "Latte Macchiato",
          image: menuImages["107 LATTE MACCHIATO"],
          description:
            "",
          price: 3.90,
          currency: "Euro",
        },
        {
          name: "Sütlü Kahve",
          image: menuImages["106 CAPPUCCINO"],
          description:
            "",
          price: 3.50,
          currency: "Euro",
        },
        {
          name: "Sicak Cikolata",
          image: menuImages["108 sicak cikilata"],
          description:
            "",
          price: 3.50,
          currency: "Euro",
        },
        {
          name: "Meyve Cayi",
          image: menuImages["109 meyve cayi"],
          description:
            "",
          price: 2.50,
          currency: "Euro",
        },
        {
          name: "Nane Cayi",
          image: menuImages["111 TAZE NANE CAYI"],
          description:
            "",
          price: 3.50,
          currency: "Euro",
        },
        {
          name: "Oralet",
          image: menuImages["110 ORALET"],
          description:
            "",
          price: 2.50,
          currency: "Euro",
        },
        {
          name: "Taze Sicak Limon",
          image: menuImages["111 sicak su ve limonn"],
          description:
            "",
          price: 3.50,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "soguk",
    title: "Soğuk Icecekler",
    coverImage: menuImages["112 limonata"],
    panel: {
      headline: "Soğuk Icecekler",
      featured: [
        {
          name: "Limonata",
          image: menuImages["112 limonata"],
          description:
            "Ev Yapimi",
          price: 3.90,
          currency: "Euro",
        },
        {
          name: "Taze Sıkılmıs Portakal Suyu",
          image: menuImages["113 portakal suyu"],
          description:
            "",
          price: 4.90,
          currency: "Euro",
        },
        {
          name: "Cola",
          image: menuImages["114 cola"],
          description:
            "",
          price: 3.00,
          currency: "Euro",
        },
        {
          name: "Ice Tea",
          image: menuImages["115 ice tea"],
          description:
            "Kiraz, Şeftali, Yeşil çay, Çarkıfelek, Nar, Limon, Yaban mersini, Çilek, Mango, Karpuz, Gül suyu",
          price: 3.00,
          currency: "Euro",
        },
        {
          name: "Gazoz",
          image: menuImages["116 gazoz"],
          description:
            "Sade, Portakallı",
          price: 3.00,
          currency: "Euro",
        },
        {
          name: "Soda",
          image: menuImages["117 soda"],
          description:
            "Sade, Limon, Elma, Nar, Mango, Ananas, Portakal",
          price: 2.50,
          currency: "Euro",
        },
        {
          name: "Ayran",
          image: menuImages["118 ayran"],
          description:
            "",
          price: 2.50,
          currency: "Euro",
        },
        {
          name: "Cocktail Raspberry",
          image: menuImages["133 Cocktail Raspberry"],
          description:
            "Ev Yapimi",
          price: 7.90,
          currency: "Euro",
        },
        {
          name: "Cocktail Strawberry",
          image: menuImages["134 Cocktail Strawberry"],
          description:
            "",
          price: 7.90,
          currency: "Euro",
        },
        {
          name: "Cocktail Lemonade",
          image: menuImages["135 Cocktail Lemonade"],
          description:
            "",
          price: 7.90,
          currency: "Euro",
        },
        {
          name: "Cocktail Passionsfrucht",
          image: menuImages["137 Cocktail Passionsfrucht"],
          description:
            "",
          price: 7.90,
          currency: "Euro",
        },
        {
          name: "Redbull Moktail Minze",
          image: menuImages["136 Redbull Moktail Minze"],
          description:
            "Sade, Portakallı",
          price: 3.00,
          currency: "Euro",
        },
        {
          name: "Redbull Moktail Limette",
          image: menuImages["138 Redbull Moktail Limette"],
          description:
            "Sade, Limon, Elma, Nar, Mango, Ananas, Portakal",
          price: 2.50,
          currency: "Euro",
        },
        {
          name: "Mojito",
          image: menuImages["139 Mojito"],
          description:
            "",
          price: 2.50,
          currency: "Euro",
        },
        {
          name: "Enerji Icecegi",
          image: menuImages["119 enerji icecegi"],
          description:
            "Redbull, Moloki",
          price: 3.50,
          currency: "Euro",
        },
        {
          name: "Su",
          image: menuImages["120 su"],
          description:
            "",
          price: 2.00,
          currency: "Euro",
        },
      ],
    },
  },
];

