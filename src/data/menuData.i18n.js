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
    title: { tr: "Kahvaltı", de: "Frühstück" },
    coverImage: menuImages["1 acik bufe kahvalti"],
    panel: {
      headline: { tr: "Kahvaltı", de: "Frühstück" },
      featured: [
        {
          name: { tr: "Acik Büfe Kahvaltı", de: "Offenes Buffet Frühstück" },
          image: menuImages["1 acik bufe kahvalti"],
          description:
            { tr: "Sınırsız içerik ve sınırsız içecek ile kişi başı fiyatıdır. Haftanin her günü 09:00-15:00 saatleri arasinda sunulur. | Haftaici : 16.00€ | Haftasonu : 18.00€", de: "Preis pro Person inkl. unbegrenzter Speisen und Getränke. Täglich von 09:00 bis 15:00 Uhr. | An Wochentagen : 16.00€ | Am Wochenende : 18.00€" },
          price: 17.50,
          currency: "Euro",
        },
        {
          name: { tr: "Simit Menü", de: "Simit Menü" },
          image: menuImages["3 simit menu"],
          description:
            { tr: "Simit, Peynir, Domates, Zeytin", de: "Simit, Käse, Tomate, Oliven" },
          price: 5.99,
          currency: "Euro",
        },
        {
          name: { tr: "Kahvalti Tabagi", de: "Frühstücksteller" },
          image: menuImages["2 kahvalti tabagi"],
          description:
            { tr: "Beyaz peynir, Kaşar peynir, Zeytin, Salatalık, Domates, Reçel, Tereyağı, Bal, Patlıcan kızartması , Patates kızartması, Haşlanmış yumurta, Ekmek sepeti", de: "Weisskäse, Gouda, Oliven, Gurke, Tomate, Marmelade, Butter, Honig, frittierte Aubergine , Pommes, gekochtes Ei, Brot" },
          price: 8.50,
          currency: "Euro",
        },
        {
          name: { tr: "Sicak Kahvalti Tabağı", de: "Heißes Frühstücksteller" },
          image: menuImages["179 sicak tabak kahvalti"],
          description:{ tr: "Sucuklu yumurta, Menemen ya da Omlet. Domates, Salatalik, Zeytin, Gouda Peyniri, Beyaz Peynir, Maydonoz ve Ekmek esliginde sunulur.", de: "Ei mit Sucuk, Menemen oder Spiegelei. Tomate, Gurke, Oliven, Gouda, Weisskäse, Petersilie und Brot." },
          price: 11.90,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "sahanlar",
    title: { tr: "Sahanlar", de: "Pfannengerichte" },
    coverImage: menuImages["4 sahanda yumurta"],
    panel: {
      headline: { tr: "Sahanlar", de: "Pfannengerichte" },
      featured: [
        {
          name: { tr: "Sahanda Yumurta", de: "Pfannen- Ei" },
          image: menuImages["4 sahanda yumurta"],
          description:
            { tr: "Kızdırılmış tereyağına 4 adet yumurta ile", de: "4 Spiegelei in Butter angebraten" },
          price: 6.90,
          currency: "Euro",
        },
        {
          name: { tr: "Sahanda Sucuklu Yumurta", de: "Ei mit Sucuk in Pfanne" },
          image: menuImages["5 sahanda sucuklu yumurta"],
          description:
            { tr: "Dana kasap sucuk ve 4 yumurta ile", de: "Sucuk und 4 Spiegelei in Butter angebraten" },
          price: 7.90,
          currency: "Euro",
        },
        {
          name: { tr: "Sahanda Kiymali Yumurta", de: "Ei mit Hackfleisch in Pfanne" },
          image: menuImages["6 sahanda kiymali yumurta"],
          description:
            { tr: "Taze dana kıyma ve 4 yumurta ile", de: "Rindhackfleisch und 4 Spiegelei in Butter angebraten" },
          price: 8.50,
          currency: "Euro",
        },
        {
          name: { tr: "Sahanda Menemen", de: "Menemen in Pfanne" },
          image: menuImages["6 sahanda menemen"],
          description:
            { tr: "Taze Domates, Biber ve 2 yumurta ile", de: "Frische Tomaten, Paprika und 2 Eier" },
          price: 7.90,
          currency: "Euro",
        },
        {
          name: { tr: "Sahanda Sucuklu Menemen", de: "Menemen mit Sucuk in Pfanne" },
          image: menuImages["7 sahanda sucuklu menemen"],
          description:
            { tr: "Taze Domates, Biber, Dana kasap sucuk ve 2 yumurta ile", de: "Frische Tomaten, Paprika, Sucuk und 2 Eier" },
          price: 7.90,
          currency: "Euro",
        },
        {
          name: { tr: "Sahanda Kiymali Menemen", de: "Menemen mit Hackfleisch in Pfanne" },
          image: menuImages["8 kiymakli menemen"],
          description:
            { tr: "Taze Domates, Biber, Dana kıyma ve 2 yumurta ile", de: "Frische Tomaten, Paprika, Rindhackfleisch und 2 Eier" },
          price: 8.50,
          currency: "Euro",
        },
        {
          name: { tr: "Ilave Malzeme", de: "Extra" },
          image: menuImages["9 SAHANDA ilave malzeme"],
          description:
            { tr: "Beyaz peynir, Kaşar peynir, Yumurta, Sucuk, Kıyma", de: "Weisskäse, Gouda, Ei, Sucuk, Rindhackfleisch" },
          price: 1.00,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "tostlar",
    title: { tr: "Tostlar", de: "Toast & Sandwiches" },
    coverImage: menuImages["10 sucuklu tost"],
    panel: {
      headline: { tr: "Tostlar", de: "Toast & Sandwiches" },
      featured: [
        {
          name: { tr: "Sucuklu Tost", de: "Toast mit Sucuk" },
          image: menuImages["10 sucuklu tost"],
          description:
            { tr: "Dana sucuklu tost", de: "Toast mit Sucuk" },
          price: 6.00,
          currency: "Euro",
        },
        {
          name: { tr: "Kasarli Tost", de: "Toast mit Gouda" },
          image: menuImages["11 kasarli tost"],
          description:
            { tr: "Taze süt kaşarı", de: "Mit Gouda" },
          price: 6.00,
          currency: "Euro",
        },
        {
          name: { tr: "Karisik Tost", de: "Mix Toast" },
          image: menuImages["12 karisik tost"],
          description:
            { tr: "Taze kaşar peynir ve Dana kasap sucuğu", de: "Gouda und Sucuk" },
          price: 6.90,
          currency: "Euro",
        },
        {
          name: { tr: "Ilave Malzeme", de: "Extra" },
          image: menuImages["18 gozleme ilave malzeme"],
          description:
            { tr: "Beyaz peynir, Kaşar peynir, Mozarella, Yumurta, Sucuk, Kıyma, Patates, Ispanak, Çikolata", de: "Weisskäse, Gouda, Mozarella, Ei, Sucuk, Hackfleisch, Kartoffel, Spinat, Schokolade" },
          price: 1.00,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "gözlemeler",
    title: { tr: "Gözlemeler", de: "Gözleme" },
    coverImage: menuImages["13 peynirli gozleme"],
    panel: {
      headline: { tr: "Gözlemeler", de: "Gözleme" },
      featured: [
        {
          name: { tr: "Peynirli Gözleme", de: "Gözleme mit Käse" },
          image: menuImages["13 peynirli gozleme"],
          description:
            { tr: "Taze beyaz peynir", de: "Weisskäse" },
          price: 6.00,
          currency: "Euro",
        },
        {
          name: { tr: "Ispanakli ve Peynirli Gözleme", de: "Gözleme mit Käse und Spinat" },
          image: menuImages["14 ispanak peynir gozleme"],
          description:
            { tr: "Taze ıspanak ve beyaz peynir", de: "Spinat und Weisskäse" },
          price: 6.00,
          currency: "Euro",
        },
        {
          name: { tr: "Patatesli Gözleme", de: "Gözleme mit Kartoffel" },
          image: menuImages["15 patatesli gozleme"],
          description:
            { tr: "Haşlanmış pul biber, tuz ve sogan ile marine edilmis patates", de: "Kartoffel mit Chilli, Salz und Zwiebel" },
          price: 6.00,
          currency: "Euro",
        },
        {
          name: { tr: "Kiymali ve Kasarli Gözleme", de: "Gözleme mit Hackfleisch und Gouda" },
          image: menuImages["16 kiymali kasarli gozleme"],
          description:
            { tr: "Dana kıyma ve taze kaşar peyniri", de: "Hackfleisch und Gouda" },
          price: 7.90,
          currency: "Euro",
        },
        {
          name: { tr: "Cikolatali Gözleme", de: "Gözleme mit Schokolade" },
          image: menuImages["17 cikilatali gozleme"],
          description:
            { tr: "Sütlü çikolata ile", de: "Schokolade" },
          price: 7.90,
          currency: "Euro",
        },
        {
          name: { tr: "Ilave Malzeme", de: "Extra" },
          image: menuImages["18 gozleme ilave malzeme"],
          description:
            { tr: "Beyaz peynir, Kaşar peynir, Mozarella, Yumurta, Sucuk, Kıyma, Patates, Ispanak, Çikolata", de: "Weisskäse, Gouda, Mozarella, Ei, Sucuk, Hackfleisch, Kartoffel, Spinat, Schokolade" },
          price: 1.00,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "corbalar",
    title: { tr: "Corbalar", de: "Suppen" },
    coverImage: menuImages["19 mercimek corbasi"],
    panel: {
      headline: { tr: "Corbalar", de: "Suppen" },
      featured: [
        {
          name: { tr: "Mercimek Corbasi", de: "Linsensuppe" },
          image: menuImages["19 mercimek corbasi"],
          description:
            { tr: "Taze süzme mercimek çorbası kızarmış ekmek ve garnitür ile servis edilir", de: "Linsensuppe, Brott(gebraten) und Garnitur wird serviert" },
          price: 6.00,
          currency: "Euro",
        },
        {
          name: { tr: "Kelle Paca Corbasi", de: "Kelle-Paca Suppe" },
          image: menuImages["20 kellepaca"],
          description:
            { tr: "Şefimizin elinden günlük hazırlanan taze kellepaça çorbası kızarmış ekmek ve garnitür ile servis edilir", de: "Kelle-Paca Suppe, Brott(gebraten) und Garnitur werden serviert" },
          price: 7.50,
          currency: "Euro",
        },
        {
          name: { tr: "Iskembe Corbasi", de: "Kuttelsuppe" },
          image: menuImages["21 iskembe corbasi"],
          description:
            { tr: "Şefimizin elinden günlük hazırlanan taze işkembe çorbası kızarmış ekmek ve garnitür ile servis edilir. GÜNE ÖZELDIR.", de: "Kuttelsuppe, Brott(gebraten) und Garnitur werden serviert. Tagesspezialität." },
          price: 7.50,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "atistirmaliklar",
    title: { tr: "Atistirmaliklar", de: "Snacks" },
    coverImage: menuImages["22 icli kofte"],
    panel: {
      headline: { tr: "Atistirmaliklar", de: "Snacks" },
      featured: [
        {
          name: { tr: "Citir Tavuk Mix", de: "Crispy Chicken Mix" },
          image: menuImages["167 crispy mix"],
          description:
            { tr: "2 adet Sogan halkasi, 2 Tavuk Nuggets, 2 Mozzarella Cubugu, 2 Tavuk Filesi, 2 Krokette, 2 Chili Cheese Nuggets, Patates Kizartmasi, Ketchup & Mayonnaise", de: "2 Zwiebelringe, 2 Chicken Nuggets, 2 Mozzarella Sticks, 2 Chicken Filet Bites, 2 Kroketten, 2 Chili Cheese Nuggets, Pommes frites, Ketchup & Mayonnaise" },
          price: 10.90,
          currency: "Euro",
        },
        {
          name: { tr: "Citir Kanat Menü", de: "Crispy Wing Menü" },
          image: menuImages["168 crispy kanat"],
          description:
            { tr: "6 adet pane edilmis citir tavuk kanadi, Patates kizartmasi, Ketchup & Mayonnaise", de: "6 panierte Hähnchenflügel, Pommes frites, Ketchup & Mayonnaise" },
          price: 11.90,
          currency: "Euro",
        },
        {
          name: { tr: "Citir Tavuk Fileto", de: "Chicken Filet Bites" },
          image: menuImages["169 crispy gogus"],
          description:
            { tr: "6 adet pane edilmis citir tavuk parcasi, Patates kizartmasi, Ketchup & Mayonnaise", de: "6 panierte Hähnchenbrustfilet-Stücke, Pommes frites, Ketchup & Mayonnaise" },
          price: 12.90,
          currency: "Euro",
        },
        {
          name: { tr: "Citir Tavuk Parcalari", de: "Chicken Filet" },
          image: menuImages["173 citir parca"],
          description:
            { tr: "6 adet pane edilmis citir tavuk parcasi, Patates kizartmasi, Ketchup & Mayonnaise", de: "6 panierte Hähnchenbrustfilet-Stücke, Pommes frites, Ketchup & Mayonnaise" },
          price: 12.90,
          currency: "Euro",
        },
        {
          name: { tr: "Icli Köfte", de: "Icli Köfte" },
          image: menuImages["22 icli kofte"],
          description:
            { tr: "2 adet 7,50€ | \n4 adet 12,90€", de: "2 Stück 7,50€ | \n4 Stück 12,90€" },
          price: 3.90,
          currency: "Euro",
        },
        {
          name: { tr: "Aile Boyu Cig Köfte", de: "Cig Köfte Familienpaket" },
          image: menuImages["158 aile boyu"],
          description:
            { tr: "1 Kilo, lavaş ve yeşillikle beraber servis edilir", de: "1 Kilo, Brott(Teig) und Salat" },
          price: 22.90,
          currency: "Euro",
        },
        {
          name: { tr: "Cigköfte Porsiyon", de: "Cigköfte Portion" },
          image: menuImages["23 cigkofte 8 sikim"],
          description:
            { tr: "10 adet, lavaş ve yeşillikle beraber servis edilir", de: "10 Stück, Brott(Teig) und Salat" },
          price: 8.90,
          currency: "Euro",
        },
        {
          name: { tr: "Porsiyon Falafel", de: "Portion Falafel" },
          image: menuImages["49 porsiyon falafel"],
          description:
            { tr: "8 adet falafel, Salata ve Patates Kızartması ile servis edilir", de: "8 Stück Falafel, Salat und Pommes" },
          price: 12.90,
          currency: "Euro",
        },
        {
          name: { tr: "Nuggets", de: "Nuggets" },
          image: menuImages["24 nuggets"],
          description:
            { tr: "7 adet Nuggets, Patates kızartması ve sos ile servis edilir", de: "7 Stück Nuggets, Pommes und Sauce" },
          price: 9.90,
          currency: "Euro",
        },
        {
          name: { tr: "Sosis Tabagi", de: "Sosis Teller" },
          image: menuImages["25 sosis menu"],
          description:
            { tr: "Patates Kızartması, Mayonez ve Ketçap ile servis edilir", de: "Pommes, Petersilie und Ketchup" },
          price: 10.90,
          currency: "Euro",
        },
        {
          name: { tr: "Patates Kizartmasi", de: "Pommes" },
          image: menuImages["72 patates kizartmasi"],
          description:
            { tr: "Mayonez ve Ketçap ile servis edilir", de: "Mayo und Ketchup" },
          price: 4.50,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "burgerler",
    title: { tr: "Burgerler", de: "Burger" },
    coverImage: menuImages["27 double cheese burger"],
    panel: {
      headline: { tr: "Burgerler", de: "Burger" },
      featured: [
        {
          name: { tr: "Cocuk Cheeseburger", de: "Kunder Cheeseburger" },
          image: menuImages["153 cocuk burger"],
          description:
            { tr: "1 x Steak, Sauce, Cheddar Peyniri", de: "1 x Steak, Sauce, Cheddar Käse" },
          price: 6.90,
          currency: "Euro",
        },
        {
          name: { tr: "Double Cheeseburger", de: "Double Cheeseburger" },
          image: menuImages["27 double cheese burger"],
          description:
            { tr: "2x100 gr Biftek Eti, Domates, Marul, Turşu, Cheddar Peyniri ve Sos", de: "2x100 gr Rindfleisch, Tomate, Salat, Gewürzgurke, Cheddar Käse und Sauce" },
          price: 9.90,
          currency: "Euro",
        },
        {
          name: { tr: "Double Hamburger", de: "Double Hamburger" },
          image: menuImages["28 double hamburger"],
          description:
            { tr: "2x100 gr Biftek Eti, Domates, Marul, Turşu ve Sos", de: "2x100 gr Rindfleisch, Tomate, Salat, Gewürzgurke und Sauce" },
          price: 9.90,
          currency: "Euro",
        },
        {
          name: { tr: "Double Tavuk Burger", de: "Double Hähnchen Burger" },
          image: menuImages["29 double tavuk burger"],
          description:
            { tr: "2x100 gr Tavuk Eti, Domates, Marul, Turşu ve Sos", de: "2x100 gr Hühnchen Fleisch, Tomate, Salat, Gewürzgurke und Sauce" },
          price: 9.90,
          currency: "Euro",
        },
        {
          name: { tr: "Burger Menü", de: "Burger Menü" },
          image: menuImages["30 burger menu"],
          description:
            { tr: "Burgerinizin yanına ilave patates kızartması ve seçeceğiniz içecek ile menüye çevirin!", de: "Ein Menü mit zusätzlichen Pommes und einem Getränk nach Wahl" },
          price: 14.90,
          currency: "Euro",
        },
        {
          name: { tr: "Patates Kizartmasi (Ekstra)", de: "Pommes(Extra)" },
          image: menuImages["72 patates kizartmasi"],
          description:
            { tr: "Burgerinizin yanına ilave patates kızartması", de: "Extra Pommes" },
          price: 2.50,
          currency: "Euro",
        },
        {
          name: { tr: "Ilave Malzeme", de: "Ilave Malzeme" },
          image: menuImages["32 burger extra"],
          description:
            { tr: "Burgerinize ilave Karamelize Soğan, Patlıcan Ezmesi veya Mantar", de: "Zusätzliche Zutaten für Ihren Burger: karamellisierte Zwiebeln, Auberginenpüree oder Champignons" },
          price: 1.00,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "pideler",
    title: { tr: "Pideler", de: "Pide & Lahmacun" },
    coverImage: menuImages["33 lahmacun"],
    panel: {
      headline: { tr: "Pideler", de: "Pide & Lahmacun" },
      featured: [
        {
          name: { tr: "Lahmacun", de: "Lahmacun" },
          image: menuImages["33 lahmacun"],
          description:
            { tr: "Dana ve kuzu kıymalı lahmacun, limon ve maydanoz ile servis edilir", de: "Lahmacun aus Rinder- und Lammhackfleisch, dazu Zitrone und frische Petersilie" },
          price: 4.90,
          currency: "Euro",
        },
        {
          name: { tr: "Lahmacun Menü", de: "Lahmacun Menü" },
          image: menuImages["34 lahmacun menu"],
          description:
            { tr: "Ekstra Salata ve meze ile servis edilir", de: "Extra Salat und Beilagen" },
          price: 6.90,
          currency: "Euro",
        },
        {
          name: { tr: "Dönerli Lahmacun Menü", de: "Dönerli Lahmacun Menü" },
          image: menuImages["35 donerli lahmacun"],
          description:
            { tr: "Lahmacun üstüne döner eklenir. Salata ve meze ile servis edilir", de: "Lahmacun mit Döner. Dazu noch Salat und Beilagen" },
          price: 9.90,
          currency: "Euro",
        },
        {
          name: { tr: "Karadeniz Usülü Pide", de: "Karadeniz Usülü Pide" },
          image: menuImages["36 kiymali pide"],
          description:
            { tr: "Dana kıymadan yapılan karadeniz usulü pide, Salata ve meze ile servis edilir", de: "Karadeniz Pide mit Rindhackfleisch, Salat und Beilagen" },
          price: 11.90,
          currency: "Euro",
        },
        {
          name: { tr: "Konya Usülü Pide", de: "Konya Usülü Pide" },
          image: menuImages["160 pide konya"],
          description:
            { tr: "Dana kıymadan yapılan karadeniz usulü pide, Salata ve meze ile servis edilir", de: "Konya Pide mit Rindhackfleisch, Salat und Beilagen" },
          price: 12.90,
          currency: "Euro",
        },
        {
          name: { tr: "Kusbasili Pide", de: "Kusbasili Pide" },
          image: menuImages["37 kusbasili pide"],
          description:
            { tr: "Dana kuşbaşı etinden yapılan pide, Salata ve meze ile servis edilir", de: "Pide mit Rindfleisch Stücke, Salat und Beilagen" },
          price: 13.90,
          currency: "Euro",
        },
        {
          name: { tr: "Konya Usulü Kusbasili Pide", de: "Kusbasili Pide Konya Art" },
          image: menuImages["174 konya kusbasi"],
          description:
            { tr: "Dana kuşbaşı etinden yapılan pide, Salata ve meze ile servis edilir", de: "Pide mit Rindfleisch Stücke, Salat und Beilagen" },
          price: 14.90,
          currency: "Euro",
        },
        {
          name: { tr: "Kasarli Pide", de: "Pide mit Gouda" },
          image: menuImages["38 kasarli pide"],
          description:
            { tr: "Taze kaşarli pide, Salata ve meze ile servis edilir", de: "Pide mit Gouda, Salat und Beilagen" },
          price: 11.90,
          currency: "Euro",
        },
        {
          name: { tr: "Sucuklu Kasarli Pide", de: "Pide mit Gouda und Sucuk" },
          image: menuImages["39 sucuklu kasarli"],
          description:
            { tr: "Dana sucuklu ve taze kasarli pide , Salata ve meze ile servis edilir", de: "Pide mit Gouda und Sucuk, Salat und Beilagen" },
          price: 11.90,
          currency: "Euro",
        },
        {
          name: { tr: "Dönerli Kasarli Pide", de: "Pide mit Döner und Gouda" },
          image: menuImages["40 donerli kasarli pide"],
          description:
            { tr: "Dana döner ve taze süt kaşarli pide, Salata ve meze ile servis edilir", de: "Pide mit Döner und Gouda, Salat und Beilagen" },
          price: 11.90,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "pizzalar",
    title: { tr: "Pizzalar", de: "Pizza" },
    coverImage: menuImages["41 margarita pizza"],
    panel: {
      headline: { tr: "Pizzalar", de: "Pizza" },
      featured: [
        {
          name: { tr: "Margarita Pizza", de: "Margarita Pizza" },
          image: menuImages["41 margarita pizza"],
          description:
            { tr: "Domates soslu mozzarella peynirli pizza", de: "Pizza mit Tomatensauce und Mozzarella" },
          price: 9.90,
          currency: "Euro",
        },
        {
          name: { tr: "Ton Balikli Pizza", de: "Thunfisch Pizza" },
          image: menuImages["42 ton balikli pizza"],
          description:
            { tr: "Ustamızın elinden ton balıklı pizza", de: "Thunfisch Pizza" },
          price: 11.90,
          currency: "Euro",
        },
        {
          name: { tr: "Funghi Pizza", de: "Funghi Pizza" },
          image: menuImages["43 Funghi pizza"],
          description:
            { tr: "Taze mantarlı pizza", de: "Pizza mit Champignons" },
          price: 11.90,
          currency: "Euro",
        },
        {
          name: { tr: "Sucuklu Pizza", de: "Pizza mit Sucuk" },
          image: menuImages["44 sucuklu pizza"],
          description:
            { tr: "Dana sucuklu pizza", de: "Pizza mit Sucuk" },
          price: 12.90,
          currency: "Euro",
        },
        {
          name: { tr: "Dönerli Pizza", de: "Pizza mit Döner" },
          image: menuImages["154 donerli pizza"],
          description:
            { tr: "Özel dönerli pizza", de: "Pizza mit Döner" },
          price: 12.90,
          currency: "Euro",
        },
        {
          name: { tr: "Karisik Pizza", de: "Pizza Gemischt" },
          image: menuImages["46 karisik pizza"],
          description:
            { tr: "İsteğe göre seçeceğiniz malzemelerle karışık pizza", de: "Pizza mit ausgewählten Zutaten" },
          price: 13.90,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "makarnalar",
    title: { tr: "Makarnalar", de: "Nudeln" },
    coverImage: menuImages["50 manti"],
    panel: {
      headline: { tr: "Makarnalar", de: "Nudeln" },
      featured: [
        {
          name: { tr: "Sarimsakli Yogurtlu Manti", de: "Manti mit Jogurth-Knoblauch" },
          image: menuImages["50 manti"],
          description:
            { tr: "Taze mantı, salçalı sos ve sarımsaklı yoğurt", de: "Manti, Tomatensosse und Knoblauchjogurt" },
          price: 11.90,
          currency: "Euro",
        },
        {
          name: { tr: "Kremali Makarna", de: "Nudeln mit Sahne" },
          image: menuImages["51 kremali makarna"],
          description:
            { tr: "Penne makarna ile servis edilir", de: "Penne Nudeln mit Sahnesosse" },
          price: 9.90,
          currency: "Euro",
        },
        {
          name: { tr: "Kremali Mantarli Makarna", de: "Nudeln mit Pilzen und Sahne" },
          image: menuImages["52 kremali mantarli makarna"],
          description:
            { tr: "Penne makarna ile servis edilir", de: "Penne Nudeln mit Pilzen und Sahne" },
          price: 10.90,
          currency: "Euro",
        },
        {
          name: { tr: "Kremali Tavuklu Makarna", de: "Nudeln mit Hühnchen und Sahne" },
          image: menuImages["53 kremali mantarli makarna"],
          description:
            { tr: "Penne makarna ile servis edilir", de: "Penne Nudeln mit Hühnchen und Sahne" },
          price: 10.90,
          currency: "Euro",
        },
        {
          name: { tr: "Kiymali Bolonez Makarna", de: "Bolonez Nudeln" },
          image: menuImages["54 kiymali bolonez makarna"],
          description:
            { tr: "Penne makarna ile servis edilir", de: "Penne Nudeln mit Tomaten-Hackfleisch Sosse" },
          price: 10.90,
          currency: "Euro",
        },
        {
          name: { tr: "Domates Soslu Makarna", de: "Nudeln mit Tomatensosse" },
          image: menuImages["55 domates soslu makarna"],
          description:
            { tr: "Penne makarna ile servis edilir", de: "Penne Nudeln mit Tomatensosse" },
          price: 9.90,
          currency: "Euro",
        },
        {
          name: { tr: "Peynirli Makarna", de: "Nudeln mit Käse" },
          image: menuImages["56 pernirli makarna"],
          description:
            { tr: "Penne makarna, 3 çeşit peynir kulanılarak oluşturulan özel sos ile", de: "Penne Nudeln mit einer Käsesosse aus 3 verschiedenen Käsesorten" },
          price: 10.90,
          currency: "Euro",
        },
        {
          name: { tr: "Ilave Firinda Kasar", de: "Überbacken" },
          image: menuImages["57 firinda makarna"],
          description:
            { tr: "Makarnanızın üzerine fırında eritilmiş ve kızartılmış taze kaşar peyniri ilavesi", de: "Käseüberbacken" },
          price: 2.00,
          currency: "Euro",
        },
        {
          name: { tr: "Ilave Ek Malzeme", de: "Extra" },
          image: menuImages["157 ilave"],
          description:
            { tr: "Makarnanızın üzerine talep edeceğiniz her bir ek malzeme için", de: "Zusätzliche Zutaten nach Wunsch" },
          price: 1.00,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "izgaralar",
    title: { tr: "Izgaralar", de: "Grillgerichte" },
    coverImage: menuImages["58 porsiyon kofte"],
    panel: {
      headline: { tr: "Izgaralar", de: "Grillgerichte" },
      featured: [
        {
          name: { tr: "Porsiyon Köfte", de: "Portion Köfte" },
          image: menuImages["58 porsiyon kofte"],
          description:
            { tr: "6 adet (300 gr) ızgara köfte, lavas, Salata, Patates kızartması ve Meze ile servis edilir", de: "6 Stück (300 gr) Gegrillte Köfte, Brott(Teig), Salat, Pommes und Beilagen" },
          price: 17.90,
          currency: "Euro",
        },
        {
          name: { tr: "Dürüm Köfte", de: "Dürüm Köfte" },
          image: menuImages["59 durum kofte"],
          description:
            { tr: "Lavaşta 4 adet ızgara köfte, Salata, Patates kızartması ve meze", de: "Brott(Teig) 4 Stück Izgara Köfte, Salat, Pommes und Beilagen" },
          price: 13.90,
          currency: "Euro",
        },
        {
          name: { tr: "Ekmek Arası Köfte", de: "Köfte Sandwich" },
          image: menuImages["60 ekmek arasi kofte"],
          description:
            { tr: "Büyük sandviç ekmeğine 4 adet (200 gr) Kasap köfte, Salata, Patates kızartması, Meze ve Sos", de: "4 Stück (200 gr) Köfte, Salat, Pommes, Beilagen und Sauce" },
          price: 13.90,
          currency: "Euro",
        },
        {
          name: { tr: "Porsiyon Tavuk Sis", de: "Portion Hähnchenspiess" },
          image: menuImages["61 porsiyon tavuk sis"],
          description:
            { tr: "260 gr Izgara tavuk parçaları, Salata, Patates kızartması ve Lavaş ile servis edilir", de: "260 gr Gegrillte Hühnerstücke, Salat, Pommes und Brott(Teig)" },
          price: 17.90,
          currency: "Euro",
        },
        {
          name: { tr: "Dürüm Tavuk Sis", de: "Dürüm Hähnchenspiess" },
          image: menuImages["62 durum tavuk sis"],
          description:
            { tr: "Lavaşta 180 gr ızgara tavuk, Salata, Patates kızartması", de: "9 Stück Gegrillte Hühnerstücke, Salat, Pommes" },
          price: 13.90,
          currency: "Euro",
        },
        {
          name: { tr: "Ekmek Arası Tavuk Sis", de: "Köfte Sandwich" },
          image: menuImages["63 ekmek arasi tavuk sis"],
          description:
            { tr: "Büyük sandviç ekmeğine 180 gr Izgara tavuk, Salata, Patates kızartması", de: "180 gr Gegrillte Hühnerstücke, Salat, Pommes" },
          price: 13.90,
          currency: "Euro",
        },
        {
          name: { tr: "Tavuk Sote", de: "Hähnchenpfanne" },
          image: menuImages["65 tavuk sote"],
          description:
            { tr: "Izgara tavuk, Salata, Makarna ya da Patates kızartması, Sos ve Tırnaklı pide", de: "Gegrillte Hühnerstücke, Salat, Nudeln oder Pommes, Sauce und Brott" },
          price: 15.90,
          currency: "Euro",
        },
        {
          name: { tr: "Mantar Sote", de: "Gebratene Pilze in Tomatensauce" },
          image: menuImages["68 mantar sote"],
          description:
            { tr: "Kızarmış mantar, Salata, Patates kızartması ile servis edilir", de: "Gegrillte Pilze, Salat und Pommes" },
          price: 12.90,
          currency: "Euro",
        },
        {
          name: { tr: "Tavuk Sac Tava", de: "Hähnchenpfanne nach türkischer Art (Sac-Tava)" },
          image: menuImages["66 tavuk sac tava"],
          description:
            { tr: "260 gr Izgara tavuk, Salata, Sos ve Tırnaklı pide", de: "260 gr Gegrillte Hühnerstücke, Salat, Sauce und Brott" },
          price: 17.90,
          currency: "Euro",
        },
        {
          name: { tr: "Et Sac Tava", de: "Rindfleischpfanne nach türkischer Art (Sac-Tava)" },
          image: menuImages["67 et sac tava"],
          description:
            { tr: "260 gr Dana bonfile, Salata, Sos ve Tırnaklı pide", de: "260 gr Rindfleisch, Salat, Sauce und Brott" },
          price: 18.90,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "dönerler",
    title: { tr: "Dönerler", de: "Döner" },
    coverImage: menuImages["69 ekmek arasi doner"],
    panel: {
      headline: { tr: "Dönerler", de: "Döner" },
      featured: [
        {
          name: { tr: "Dürüm Döner", de: "Dürüm Döner" },
          image: menuImages["70 doner durum"],
          description:
            { tr: "170 gram Et veya Tavuk Döner, Kokteyl sos, Acı sos, Cacık , Kırmızı lahana, Beyaz lahana, Soğan, Salatalık, Domates", de: "170 gram Döner, Cocktail-Sauce, scharfe Sauce, Cacık , Rotkohl, Weißkohl, Zwiebel, Gurke, Tomate" },
          price: 8.90,
          currency: "Euro",
        },
        {
          name: { tr: "Porsiyon Döner", de: "Portion Döner" },
          image: menuImages["71 porsiyon doner"],
          description:
            { tr: "300 gram Et Döner, Patates Kizartmasi, Salata ve Sos", de: "300 gram Döner, Pommes, Salat und Sauce" },
          price: 16.90,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "salatalar",
    title: { tr: "Salatalar", de: "Salate" },
    coverImage: menuImages["74 mevsim salata"],
    panel: {
      headline: { tr: "Salatalar", de: "Salate" },
      featured: [
        {
          name: { tr: "Mevsim Salata", de: "Gemischter Salat" },
          image: menuImages["74 mevsim salata"],
          description:
            { tr: "Mevsime özel, taze sebzelerden oluşan salata", de: "Salat aus frischem, saisonalem Gemüse" },
          price: 7.90,
          currency: "Euro",
        },
        {
          name: { tr: "Tavuklu Salata", de: "Salat mit Hähnchen" },
          image: menuImages["75 tavuklu salata"],
          description:
            { tr: "Izgara tavuk parçalarıyla zenginleştirilmiş salata", de: "Salat mit Gegrillten Hühnerstücke" },
          price: 12.90,
          currency: "Euro",
        },
        {
          name: { tr: "Ton Balıklı Salata", de: "Salat mit Thunfisch" },
          image: menuImages["76 tonbalikli salata"],
          description:
            { tr: "Ton balığı, taze sebzeler ve yeşilliklerle bir araya getirilerek hazırlanan salata", de: "Salat mit Thunfisch, frischem Gemüse und Kräutern" },
          price: 11.90,
          currency: "Euro",
        },
        {
          name: { tr: "Meze Tabagi", de: "Meze Teller" },
          image: menuImages["176 meze tabak"],
          description:
            { tr: "Güne özel mezelerimiz", de: "Tagesspezialität" },
          price: 7.90,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "Waffel",
    title: { tr: "Waffel", de: "Waffeln" },
    coverImage: menuImages["140 Waffel Puderzucker"],
    panel: {
      headline: { tr: "Waffel", de: "Waffeln" },
      featured: [
        {
          name: { tr: "Pudra Sekerli Waffel", de: "Waffel mit Puderzucker" },
          image: menuImages["140 Waffel Puderzucker"],
          description:
            { tr: "", de: "" },
          price: 5.90,
          currency: "Euro",
        },
        {
          name: { tr: "Kremali ve sicak Visneli Waffel", de: "Waffel mit Sahne und Kirschen" },
          image: menuImages["141 visne waffel"],
          description:
            { tr: "Kremali ve Sicak Visneli Waffel", de: "Waffel mit Sahne und Kirschen" },
          price: 7.50,
          currency: "Euro",
        },
        {
          name: { tr: "Kremali Cilekli Waffel", de: "Waffel mit Sahne und Erdbeeren" },
          image: menuImages["151 cilekli waffel"],
          description:
            { tr: "", de: "" },
          price: 6.50,
          currency: "Euro",
        },
        {
          name: { tr: "Cikolatali Waffel", de: "Waffel mit Schokolade" },
          image: menuImages["152 waffel karisik"],
          description:
            { tr: "Cikolata Cesitlerimiz: Lotus - Fistik", de: "Schoko Sorten: Lotus - Pistazien" },
          price: 7.90,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "künefe",
    title: { tr: "Künefe & Katmer", de: "Künefe & Katmer" },
    coverImage: menuImages["77 peynirli kunefe"],
    panel: {
      headline: { tr: "Künefe & Katmer", de: "Künefe & Katmer" },
      featured: [
        {
          name: { tr: "Peynirli Künefe", de: "Künefe mit Käse" },
          image: menuImages["77 kunefe normal"],
          description:
            { tr: "", de: "" },
          price: 8.90,
          currency: "Euro",
        },
        {
          name: { tr: "Peynirli ve Fistikli Künefe", de: "Künefe mit Käse und Pistazien" },
          image: menuImages["77 peynirli kunefe"],
          description:
            { tr: "YAKINDA", de: "KOMMT BALD" },
          price: "",
          currency: "Euro",
        },
        {
          name: { tr: "Katmer", de: "Katmer" },
          image: menuImages["156 katmer"],
          description:
            { tr: "Ince hamurdan yapilmis, fistik ve kaymak dolgulu, firinda pisirilen geleneksel tatlimiz. Sicak servis edilir.", de: "Traditionelles türkisches Dessert aus hauchdünnem Teig, gefüllt mit Pistazien und Kaymak, knusprig gebacken und warm serviert" },
          price: 8.90,
          currency: "Euro",
        },
        {
          name: { tr: "Cikolatali Katmer", de: "Katmer mit Schokolade" },
          image: menuImages["155 cikolatali katmer"],
          description:
            { tr: "Ince hamurdan yapilmis, fistik ve kaymak dolgulu, firinda pisirilen geleneksel tatlimiz. Sicak servis edilir. Cikolata cesitlerimiz : Standart Cikolata - Fistik Aromali Cikolata - Lotus Aromali Cikolata - Dubai Cikolata.", de: "Knusprig gebackener, hauchdünner Teig, gefüllt mit zartschmelzender Schokolade und Kaymak warm serviert. Schoko Sorten : Standart Schoko - Schoko mit Pistazien - Schoko mit Lotus - Dubai Schoko" },
          price: 9.90,
          currency: "Euro",
        },
        {
          name: { tr: "Maras Dondurma", de: "Maras Eis" },
          image: menuImages["78 maras dondurmasi"],
          description:
            { tr: "", de: "" },
          price: 2.50,
          currency: "Euro",
        },
        {
          name: { tr: "Kaymak", de: "Kaymak" },
          image: menuImages["79 kaymak"],
          description:
            { tr: "", de: "" },
          price: 1.50,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "serbetli",
    title: { tr: "Serbetli Tatlılar", de: "Syrup-Desserts" },
    coverImage: menuImages["121 fistik sarma"],
    panel: {
      headline: { tr: "Serbetli Tatlılar", de: "Syrup-Desserts" },
      featured: [
        {
          name: { tr: "Fistikli Sarma", de: "Fistikli Sarma" },
          image: menuImages["121 fistik sarma"],
          description:
            { tr: "Dilim", de: "Dilim" },
          price: 2.50,
          currency: "Euro",
        },
        {
          name: { tr: "Fistikli Kuru Baklava", de: "Kuru Baklava mit Pistazien" },
          image: menuImages["122 kuru baklava"],
          description:
            { tr: "Dilim", de: "Dilim" },
          price: 2.20,
          currency: "Euro",
        },
        {
          name: { tr: "Fistikli Havuc Dilimi", de: "Havuc Dilimi mit Pistazien" },
          image: menuImages["123 havuc dilimi"],
          description:
            { tr: "Dilim", de: "Dilim" },
          price: 5.50,
          currency: "Euro",
        },
        {
          name: { tr: "Fistikli Dondurmali Havuc Dilimi", de: "Havuc Dilimi mit Eis und Pistazien" },
          image: menuImages["124 dondurmali havuc dilimi"],
          description:
            { tr: "Dilim", de: "Dilim" },
          price: 7.90,
          currency: "Euro",
        },
        {
          name: { tr: "Fistikli Baklava", de: "Baklava mit Pistazien" },
          image: menuImages["125 fistikli baklava"],
          description:
            { tr: "Dilim", de: "Dilim" },
          price: 2.20,
          currency: "Euro",
        },
        {
          name: { tr: "Fistikli Midye", de: "Midye mit Pistazien" },
          image: menuImages["126 fistikli midye"],
          description:
            { tr: "Dilim", de: "Dilim" },
          price: 2.20,
          currency: "Euro",
        },
        {
          name: { tr: "Fistikli Söbiyet", de: "Söbiyet mit Pistazien" },
          image: menuImages["127 fistikli sobiyet"],
          description:
            { tr: "Dilim", de: "Dilim" },
          price: 2.20,
          currency: "Euro",
        },
        {
          name: { tr: "Findikli Soguk Baklava", de: "Kalter Baklava mit Haselnüssen" },
          image: menuImages["177 soguk findik baklava"],
          description:
            { tr: "Findikli ve cikolatali, dilim", de: "Haselnuss und Schokolade, dilim" },
          price: 2.50,
          currency: "Euro",
        },
        {
          name: { tr: "Fistikli Soguk Baklava", de: "Kalter Baklava mit Pistazien" },
          image: menuImages["178 soguk fistik baklava"],
          description:
            { tr: "Fistikli ve Cikolatali, dilim", de: "Pistazien und Schokolade, dilim" },
          price: 2.90,
          currency: "Euro",
        },
        {
          name: { tr: "Findikli Sarma", de: "Findikli Sarma" },
          image: menuImages["129 findikli sarma"],
          description:
            { tr: "Dilim", de: "Dilim" },
          price: 2.00,
          currency: "Euro",
        },
        {
          name: { tr: "Cevizli Ev Baklavasi", de: "Ev Baklavasi mit Walnüssen" },
          image: menuImages["130 cevizli baklava"],
          description:
            { tr: "Dilim", de: "Dilim" },
          price: 2.00,
          currency: "Euro",
        },
        {
          name: { tr: "Cevizli Baklava", de: "Baklava mit Walnüssen" },
          image: menuImages["130 cevizli baklava"],
          description:
            { tr: "Dilim", de: "Dilim" },
          price: 2.00,
          currency: "Euro",
        },
        {
          name: { tr: "Fistikli Burma Kadayıf", de: "Burma Kadayif mit Pistazien" },
          image: menuImages["131 FISTIKLI BURMA KADAYIF"],
          description:
            { tr: "Dilim", de: "Dilim" },
          price: 3.00,
          currency: "Euro",
        },
        {
          name: { tr: "Fistikli Düz Kadayif", de: "Düz Kadayif mit Pistazien" },
          image: menuImages["132 FISTIKLI DUZ KADAYIF"],
          description:
            { tr: "Dilim", de: "Dilim" },
          price: 5.90,
          currency: "Euro",
        },
        {
          name: { tr: "Sambali", de: "Sambali" },
          image: menuImages["166 sambali"],
          description:
            { tr: "Dilim", de: "Stück" },
          price: 2.00,
          currency: "Euro",
        },
        {
          name: { tr: "Ilave Maras Dondurma", de: "Extra Maras Eis" },
          image: menuImages["78 maras dondurmasi"],
          description:
            { tr: "", de: "" },
          price: 2.50,
          currency: "Euro",
        },
        {
          name: { tr: "Ilave Kaymak", de: "Extra Kaymak" },
          image: menuImages["79 kaymak"],
          description:
            { tr: "", de: "" },
          price: 1.50,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "geleneksel",
    title: { tr: "Geleneksel Tatlılar", de: "Traditionelle Desserts" },
    coverImage: menuImages["80 firin sutlac"],
    panel: {
      headline: { tr: "Geleneksel Tatlılar", de: "Traditionelle Desserts" },
      featured: [
        {
          name: { tr: "Firin Sütlac", de: "Firin Sütlac" },
          image: menuImages["80 firin sutlac"],
          description:
            { tr: "Fırında üstü kızartılmış, soğuk servis edilen özel fırın sütlaç", de: "Firin sütlac wird kalt serviert" },
          price: 5.90,
          currency: "Euro",
        },
        {
          name: { tr: "Asure", de: "Asure" },
          image: menuImages["81 asure"],
          description:
            { tr: "Güne özel", de: "speziell für den Tag" },
          price: 6.90,
          currency: "Euro",
        },
        {
          name: { tr: "Irmik Helvasi", de: "Irmik Helvasi" },
          image: menuImages["82 irmik helvasi"],
          description:
            { tr: "", de: "" },
          price: 4.90,
          currency: "Euro",
        },
        {
          name: { tr: "Dondurmali Irmik Helvasi", de: "Irmik Helvasi mit Eis" },
          image: menuImages["83 dondurmali irmik helvasi"],
          description:
            { tr: "", de: "" },
          price: 6.90,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "dondurmalar",
    title: { tr: "Dondurmalar", de: "Eis" },
    coverImage: menuImages["78 maras dondurmasi"],
    panel: {
      headline: { tr: "Dondurmalar", de: "Eis" },
      featured: [
        {
          name: { tr: "Dilim Maras Dondurmasi", de: "Stück Maras Dondurmasi" },
          image: menuImages["78 maras dondurmasi"],
          description:
            { tr: "1 dilim sade maraş dondurması", de: "1 Stück maraş dondurması" },
          price: 2.50,
          currency: "Euro",
        },
        {
          name: { tr: "Kup Dondurma", de: "Eisbecher" },
          image: menuImages["84 kup dondurma"],
          description:
            { tr: "Sade, Çikolatalı ve Çilekli maraş dondurmasi", de: "Milch, Schokolade und Erdbeere" },
          price: 3.00,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "pastalar",
    title: { tr: "Pastalar", de: "Kuchen & Torten" },
    coverImage: menuImages["85 ekler pasta"],
    panel: {
      headline: { tr: "Pastalar", de: "Kuchen & Torten" },
      featured: [
        {
          name: { tr: "Ekler Pasta", de: "Ekler Kuchen" },
          image: menuImages["85 ekler pasta"],
          description:
            { tr: "", de: "" },
          price: 2.20,
          currency: "Euro",
        },
        {
          name: { tr: "Ekler Lotus", de: "Ekler mit Lotus" },
          image: menuImages["149 lotuslu ekler"],
          description:
            { tr: "", de: "" },
          price: 2.20,
          currency: "Euro",
        },
        {
          name: { tr: "Brownie", de: "Brownie" },
          image: menuImages["86 browni"],
          description:
            { tr: "", de: "" },
          price: 5.90,
          currency: "Euro",
        },
        {
          name: { tr: "Dondurmali Brownie", de: "Brownie mit Eis" },
          image: menuImages["87 dondurmali browni"],
          description:
            { tr: "1 dilim sade maraş dondurması ile", de: "1 Stück Eis und Brownie" },
          price: 8.50,
          currency: "Euro",
        },
        {
          name: { tr: "Tiramisu", de: "Tiramisu" },
          image: menuImages["88 tramisu"],
          description:
            { tr: "", de: "" },
          price: 6.90,
          currency: "Euro",
        },
        {
          name: { tr: "Medovik Pasta", de: "Medovik Kuchen" },
          image: menuImages["89 mevodik"],
          description:
            { tr: "", de: "" },
          price: 6.90,
          currency: "Euro",
        },
        {
          name: { tr: "Lotus Cheesecake", de: "Lotus Cheesecake" },
          image: menuImages["90 lotus cheese"],
          description:
            { tr: "", de: "" },
          price: 6.90,
          currency: "Euro",
        },
        {
          name: { tr: "San Sebastian Cheesecake", de: "San Sebastian Cheesecake" },
          image: menuImages["91 sansebastian"],
          description:
            { tr: "Sıcak Belçika çikolatası ile servis edilir", de: "Es wird mit heißer belgischer Schokolade serviert" },
          price: 6.90,
          currency: "Euro",
        },
        {
          name: { tr: "Trilece", de: "Trilece" },
          image: menuImages["92 tralice"],
          description:
            { tr: "Karamelli", de: "Karamelli" },
          price: 5.90,
          currency: "Euro",
        },
        {
          name: { tr: "Cilekli Kare Pasta", de: "Kuchen mit Erdbeere" },
          image: menuImages["93 cilekli kare"],
          description:
            { tr: "", de: "" },
          price: 5.90,
          currency: "Euro",
        },
        {
          name: { tr: "Ibiza Pasta", de: "Ibiza Kuchen" },
          image: menuImages["146 Ibiza"],
          description:
            { tr: "Muzlu", de: "Muzlu" },
          price: 5.90,
          currency: "Euro",
        },
        {
          name: { tr: "Oreolu Dilim Pasta", de: "Stück Kuchen mit Oreo" },
          image: menuImages["95 kare oreo"],
          description:
            { tr: "", de: "" },
          price: 5.90,
          currency: "Euro",
        },
        {
          name: { tr: "Cikolatali Dilim Pasta", de: "Stück Kuchen mit Schokolade" },
          image: menuImages["94 cikolatali kare"],
          description:
            { tr: "", de: "" },
          price: 5.90,
          currency: "Euro",
        },
        {
          name: { tr: "Cappuccino Findikli Dilim Pasta", de: "Stück Kuchen mit Cappuccino und Haselnüssen" },
          image: menuImages["95 kare kapicinolu"],
          description:
            { tr: "", de: "" },
          price: 5.90,
          currency: "Euro",
        },
        {
          name: { tr: "Opera Pasta", de: "Opera Kuchen" },
          image: menuImages["96 opera pasta"],
          description:
            { tr: "", de: "" },
          price: 5.90,
          currency: "Euro",
        },
        {
          name: { tr: "Ugur Böcegi Pasta", de: "Ugur Böcegi Kuchen" },
          image: menuImages["97 ugur bocegi"],
          description:
            { tr: "", de: "" },
          price: 4.90,
          currency: "Euro",
        },
        {
          name: { tr: "Mini Cilekli Kalp Pasta", de: "Mini Herz Kuchen mit Erdbeeren" },
          image: menuImages["98 kalp pasta cilek"],
          description:
            { tr: "", de: "" },
          price: 6.90,
          currency: "Euro",
        },
        {
          name: { tr: "Mini Cikolatali Kalp Pasta", de: "Mini Herz Kuchen mit Schokolade" },
          image: menuImages["175 kalp pasta schoko"],
          description:
            { tr: "", de: "" },
          price: 6.90,
          currency: "Euro",
        },
        {
          name: { tr: "Creamy Dubai Baklava", de: "Creamy Dubai Baklava" },
          image: menuImages["148 creamy dubai baklava"],
          description:
            { tr: "", de: "" },
          price: 9.90,
          currency: "Euro",
        },
        {
          name: { tr: "Cedric Fistik Pasta", de: "Cedric Fistik Kuchen" },
          image: menuImages["142 Cedric"],
          description:
            { tr: "Fistikli ve cikolatali enfes lezzet", de: "Fistikli ve cikolatali enfes lezzet" },
          price: 9.90,
          currency: "Euro",
        },
        {
          name: { tr: "Dubai Cheesecake", de: "Dubai Cheesecake" },
          image: menuImages["147 dubai cheese"],
          description:
            { tr: "", de: "" },
          price: 8.90,
          currency: "Euro",
        },
        {
          name: { tr: "Cikolata Bomba", de: "Cikolata Bombe" },
          image: menuImages["145 cikolata bomba"],
          description:
            { tr: "", de: "" },
          price: 8.90,
          currency: "Euro",
        },
        {
          name: { tr: "Dubai Magnolia", de: "Dubai Magnolia" },
          image: menuImages["143 Dubai magnolia"],
          description:
            { tr: "", de: "" },
          price: 8.90,
          currency: "Euro",
        },
        {
          name: { tr: "Cilekli Magnolia", de: "Magnolia mit Erdbeeren" },
          image: menuImages["159 cilekli magnolya"],
          description:
            { tr: "", de: "" },
          price: 6.90,
          currency: "Euro",
        },
        {
          name: { tr: "Cikolatali Magnolia", de: "Magnolia mit Schokolade" },
          image: menuImages["161 ciko magnolya"],
          description:
            { tr: "", de: "" },
          price: 6.90,
          currency: "Euro",
        },
        {
          name: { tr: "Profiterollü Magnolia", de: "Profiterollü Magnolia" },
          image: menuImages["164 profiterol magnolya"],
          description:
            { tr: "", de: "" },
          price: 6.90,
          currency: "Euro",
        },
        {
          name: { tr: "Lotuslu Magnolia", de: "Magnolia mit Lotus" },
          image: menuImages["165 lotuslu magnolya"],
          description:
            { tr: "", de: "" },
          price: 6.90,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "sicak",
    title: { tr: "Sicak Icecekler", de: "Heißgetränke" },
    coverImage: menuImages["100 buyuk cay"],
    panel: {
      headline: { tr: "Sicak Icecekler", de: "Heißgetränke" },
      featured: [
        {
          name: { tr: " Bardak Cay", de: " Tasse Tee" },
          image: menuImages["99 kucuk cay"],
          description:
            { tr: "", de: "" },
          price: 1.60,
          currency: "Euro",
        },
        {
          name: { tr: "Büyük Cay", de: "Groß Tee" },
          image: menuImages["100 buyuk cay"],
          description:
            { tr: "", de: "" },
          price: 2.90,
          currency: "Euro",
        },
        {
          name: { tr: "Türk Kahvesi", de: "Türkischer Kaffee" },
          image: menuImages["101 turk kahbesi"],
          description:
            { tr: "", de: "" },
          price: 3.90,
          currency: "Euro",
        },
        {
          name: { tr: "Osmanli Kahvesi", de: "Osmanischer Kaffee" },
          image: menuImages["102 osmanli kahvesi"],
          description:
            { tr: "", de: "" },
          price: 3.90,
          currency: "Euro",
        },
        {
          name: { tr: "Menengic Kahvesi", de: "Menengic Kaffee" },
          image: menuImages["103 menengec kahvesi"],
          description:
            { tr: "", de: "" },
          price: 3.90,
          currency: "Euro",
        },
        {
          name: { tr: "Salep", de: "Salep" },
          image: menuImages["104 salep"],
          description:
            { tr: "", de: "" },
          price: 3.90,
          currency: "Euro",
        },
        {
          name: { tr: "Espresso", de: "Espresso" },
          image: menuImages["105 espresso"],
          description:
            { tr: "Büyük Boy: 3,90", de: "Gross: 3,90" },
          price: 3.00,
          currency: "Euro",
        },
        {
          name: { tr: "Kaffe Creme", de: "Kaffe Creme" },
          image: menuImages["106 kaffe creme"],
          description:
            { tr: "" },
          price: 3.50,
          currency: "Euro",
        },
        {
          name: { tr: "Cappuccino", de: "Cappuccino" },
          image: menuImages["106 CAPPUCCINO"],
          description:
            { tr: "" },
          price: 3.90,
          currency: "Euro",
        },
        {
          name: { tr: "Latte Macchiato", de: "Latte Macchiato" },
          image: menuImages["107 LATTE MACCHIATO"],
          description:
            { tr: "", de: "" },
          price: 3.90,
          currency: "Euro",
        },
        {
          name: { tr: "Sütlü Kahve", de: "Milchkaffee" },
          image: menuImages["106 CAPPUCCINO"],
          description:
            { tr: "", de: "" },
          price: 3.90,
          currency: "Euro",
        },
        {
          name: { tr: "Sicak Cikolata", de: "Heiße Schokolade" },
          image: menuImages["108 sicak cikilata"],
          description:
            { tr: "", de: "" },
          price: 3.90,
          currency: "Euro",
        },
        {
          name: { tr: "Meyve Cayi", de: "Früchte Tee" },
          image: menuImages["109 meyve cayi"],
          description:
            { tr: "", de: "" },
          price: 2.90,
          currency: "Euro",
        },
        {
          name: { tr: "Nane Cayi", de: "Minztee" },
          image: menuImages["111 TAZE NANE CAYI"],
          description:
            { tr: "Bal ile servis edilir.", de: "Es wird mit Honig serviert." },
          price: 3.90,
          currency: "Euro",
        },
        {
          name: { tr: "Oralet", de: "Oralet" },
          image: menuImages["110 ORALET"],
          description:
            { tr: "", de: "" },
          price: 2.90,
          currency: "Euro",
        },
        {
          name: { tr: "Taze Sicak Limon", de: "Frische Zitronentee" },
          image: menuImages["111 sicak su ve limonn"],
          description:
            { tr: "Bal ile servis edilir.", de: "Es wird mit Honig serviert." },
          price: 3.90,
          currency: "Euro",
        },
      ],
    },
  },
  {
    id: "soguk",
    title: { tr: "Soğuk Icecekler", de: "Kaltgetränke" },
    coverImage: menuImages["112 limonata"],
    panel: {
      headline: { tr: "Soğuk Icecekler", de: "Kaltgetränke" },
      featured: [
        {
          name: { tr: "Limonata", de: "Limonade" },
          image: menuImages["112 limonata"],
          description:
            { tr: "Ev Yapimi", de: "Ev Yapimi" },
          price: 3.90,
          currency: "Euro",
        },
        {
          name: { tr: "Cilekli Limonata", de: "Limonade mit Erdbeeren" },
          image: menuImages["134 Cocktail Strawberry"],
          description:
            { tr: "Ev Yapimi", de: "Ev Yapimi" },
          price: 4.90,
          currency: "Euro",
        },
        {
          name: { tr: "Ahududulu Limonata", de: "Limonade mit Himbeeren" },
          image: menuImages["163 ahududu limo"],
          description:
            { tr: "Ev Yapimi", de: "Ev Yapimi" },
          price: 4.90,
          currency: "Euro",
        },
        {
          name: { tr: "Taze Sıkılmıs Portakal Suyu", de: "Frisches Orangensaft" },
          image: menuImages["113 portakal suyu"],
          description:
            { tr: "", de: "" },
          price: 4.90,
          currency: "Euro",
        },
        {
          name: { tr: "Cola", de: "Cola" },
          image: menuImages["114 cola"],
          description:
            { tr: "Cola | Cola Zero", de: "Cola | Cola Zero" },
          price: 3.30,
          currency: "Euro",
        },
        {
          name: { tr: "Ice Tea", de: "Ice Tea" },
          image: menuImages["115 ice tea"],
          description:
            { tr: "Kiraz, Şeftali, Yeşil çay, Çarkıfelek, Nar, Limon, Yaban mersini, Çilek, Mango, Karpuz, Gül suyu", de: "Pfirsich, Aprikose, Grüner Tee, Kirsch, Granatapfel, Zitrone, Himmelsbeere, Erdbeere, Mango, Melone, Rosenwasser" },
          price: 3.30,
          currency: "Euro",
        },
        {
          name: { tr: "Gazoz", de: "Gazoz" },
          image: menuImages["116 gazoz"],
          description:
            { tr: "Sade, Portakallı", de: "Sade, Portakallı" },
          price: 3.00,
          currency: "Euro",
        },
        {
          name: { tr: "Soda", de: "Soda" },
          image: menuImages["117 soda"],
          description:
            { tr: "Sade, Limon, Elma, Nar, Mango, Ananas, Portakal", de: "Zitronen, Apfel, Granatapfel, Mango, Ananas, Orangen" },
          price: 2.50,
          currency: "Euro",
        },
        {
          name: { tr: "Ayran", de: "Ayran" },
          image: menuImages["118 ayran"],
          description:
            { tr: "", de: "" },
          price: 2.50,
          currency: "Euro",
        },
        {
          name: { tr: "Cocktail Raspberry", de: "Cocktail Raspberry" },
          image: menuImages["133 Cocktail Raspberry"],
          description:
            { tr: "", de: "" },
          price: 7.90,
          currency: "Euro",
        },
        {
          name: { tr: "Cocktail Strawberry", de: "Cocktail Strawberry" },
          image: menuImages["162 cocktail strawberry"],
          description:
            { tr: "", de: "" },
          price: 7.90,
          currency: "Euro",
        },
        {
          name: { tr: "Cocktail Passionsfrucht", de: "Cocktail Passionsfrucht" },
          image: menuImages["137 Cocktail Passionsfrucht"],
          description:
            { tr: "", de: "" },
          price: 7.90,
          currency: "Euro",
        },
        {
          name: { tr: "Redbull Moktail Minze", de: "Redbull Moktail Minze" },
          image: menuImages["136 Redbull Moktail Minze"],
          description:
            { tr: "", de: "" },
          price: 8.90,
          currency: "Euro",
        },
        {
          name: { tr: "Redbull Moktail Limette", de: "Redbull Moktail Limette" },
          image: menuImages["138 Redbull Moktail Limette"],
          description:
            { tr: "", de: "" },
          price: 8.90,
          currency: "Euro",
        },
        {
          name: { tr: "Mojito", de: "Mojito" },
          image: menuImages["139 Mojito"],
          description:
            { tr: "", de: "" },
          price: 7.90,
          currency: "Euro",
        },
        {
          name: { tr: "Enerji Icecegi", de: "Energygetränke" },
          image: menuImages["119 enerji icecegi"],
          description:
            { tr: "", de: "" },
          price: 3.50,
          currency: "Euro",
        },
        {
          name: { tr: "Su", de: "Wasser" },
          image: menuImages["120 su"],
          description:
            { tr: "", de: "" },
          price: 2.00,
          currency: "Euro",
        },
      ],
    },
  },
];

