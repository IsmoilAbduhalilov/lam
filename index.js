const btns = document.querySelectorAll('.btn')

/// language title
const headerText1 = document.querySelector('.home_text1')
const headerText2 = document.querySelector('.home_text2')
const headerText3 = document.querySelector('.home_text3')
const headerText4 = document.querySelector('.home_text4')
const headerText5 = document.querySelector('.home_text5')
const headerText6 = document.querySelector('.home_text6')
const headerText7 = document.querySelector('.home_text7')
const headerText8 = document.querySelector('.home_text8')
const headerText9 = document.querySelector('.home_text9')
const headerText10 = document.querySelector('.home_text10')
const headerText11 = document.querySelector('.home_text11')
const headerText12 = document.querySelector('.home_text12')
const headerText13 = document.querySelector('.home_text13')
const headerText14 = document.querySelector('.home_text14')
const headerText15 = document.querySelector('.home_text15')
const headerText16 = document.querySelector('.home_text16')
const headerText17 = document.querySelector('.home_text17')
const headerText18 = document.querySelector('.home_text18')
const headerText19 = document.querySelector('.home_text19')
const headerText20 = document.querySelector('.home_text20')
const headerText21 = document.querySelector('.home_text21')
const headerText22 = document.querySelector('.home_text22')
const headerText23  = document.querySelector('.home_text23')
const headerText24  = document.querySelector('.home_text24')
const headerText25  = document.querySelector('.home_text25')
const headerText26  = document.querySelector('.home_text26')
const headerText27  = document.querySelector('.home_text27')
const headerText28  = document.querySelector('.home_text28')
const headerText29  = document.querySelector('.home_text29')
const headerText30  = document.querySelector('.home_text30')
const headerText31  = document.querySelector('.home_text31')

btns.forEach(e => {
    e.addEventListener('click', () => {
      const til = e.getAttribute("lang")
      headerText1.textContent = translate[til].text1
      headerText2.textContent = translate[til].text2
      headerText3.textContent = translate[til].text3
      headerText4.textContent = translate[til].text4
      headerText5.textContent = translate[til].text5
      headerText6.textContent = translate[til].text6
      headerText7.textContent = translate[til].text7
      headerText8.textContent = translate[til].text8
      headerText9.textContent = translate[til].text9
      headerText10.textContent = translate[til].text10
      headerText11.textContent = translate[til].text11
      headerText12.textContent = translate[til].text12
      headerText13.textContent = translate[til].text13
      headerText14.textContent = translate[til].text14
      headerText15.textContent = translate[til].text15
      headerText16.textContent = translate[til].text16
      headerText17.textContent = translate[til].text17
      headerText18.textContent = translate[til].text18
      headerText19.textContent = translate[til].text19
      headerText20.textContent = translate[til].text20
      headerText21.textContent = translate[til].text21
      headerText22.textContent = translate[til].text22
      headerText23.textContent = translate[til].text23
      headerText24.textContent = translate[til].text24
      headerText25.textContent = translate[til].text25
      headerText26.textContent = translate[til].text26
      headerText27.textContent = translate[til].text27
      headerText28.textContent = translate[til].text28
      headerText29.textContent = translate[til].text29
      headerText30.textContent = translate[til].text30
      headerText31.textContent = translate[til].text31
    }) });


var translate = {
   Uzb: {
   text1: "Uy",
   text2: "Biz haqimizda",
   text3: "Rejangizni yarating",
   text4: "Ajoyib kofe oddiy qilingan.",
   text5: "Ertalabki dunyoning eng yaxshi qahvalari bilan boshlang. Bizni sinab ko'ring bizning eng yaxshi qovuruvchilarimizdan tayyorlangan hunarmand qahvalari Sizning jadvalingiz bo'yicha to'g'ridan-to'g'ri eshigingizga yetkazib beriladi.",
   text6: "Rejangizni yarating",
   text7: "Gran Espresso",
   text8: "Kakao bilan engil va mazali aralash va qizg'in uchun qora qalampir tajriba",
   text9: "Planalto",
   text10: "To'yingan va baxmal tanasi, meva va yong'oqlarning ishoralari bilan braziliyalik quyuq qovurilgan",
   text11: "Pikkollo",
   text12: "Qovurilgan bodom va quritilgan olcha notalarini o'z ichiga olgan yumshoq va silliq aralash",
   text13: "Danche",
   text14: "Efiopiya qo'lda yig'ib olingan aralashmasi jonli meva notalari bilan zich o'ralgan",
   text15: "Nega bizni tanlaysiz?",
   text16: "Bizning rolimizning katta qismi bizning assortimentimizda qaysi kofelar namoyish etilishini tanlashdir. Bu sizga har bir darajada ta'sirchanroq tajriba berish uchun eng yaxshi qahva ishlab chiqaruvchilar bilan yaqindan hamkorlik qilishni anglatadi.",
   text17: "Eng yaxshi sifat",
   text18: "Bizning qovuruvchilarimizdan dunyodagi eng yaxshi hunarmand qahvalarining cheksiz xilma-xilligini kashf eting",
   text19: "Eksklyuziv imtiyozlar.",
   text20: "Obuna bo'lganingizda maxsus takliflar va sovg'alar, shu jumladan birinchi jo'natishingiz uchun 30% chegirma.",
   text21: "Yetkazib berish bepul",
   text22: "Biz xarajatlarni qoplaymiz va qahva tez yetkazib berildi. Eng yuqori tazelik: kafolatlangan.",
   text23: "U qanday ishlaydi",
   text24: "O'zingizni tanlang kofe",
   text25: "Bizning rivojlanayotgan hunarmand qahvalarimizdan tanlang. Bizning loviyalarimiz axloqiy jihatdan olinadi va biz adolatli to'laymiz ular uchun narxlar. Hammasida yangi kofelar bor har oy sinash uchun profillar.",
   text26: "ni tanlang chastota",
   text27: "Buyurtma chastotasi, miqdori, hatto qovurish uslubingiz va maydalash turini sozlang. Onlayn portalimiz orqali hech qanday majburiyatsiz obunangizni pauza qiling, o'tkazib yuboring yoki bekor qiling.",
   text28: "Qabul qilish va rohatlaning!",
   text29: "Paketingizni 48 soat ichida yangi qovurilgan holda jo'natamiz. Orqaga oʻtirib, oʻziga xos taʼmni taʼminlash uchun jahon darajasidagi mukofotga sazovor boʻlgan qahvalardan bahramand boʻling.",
   text30: "Rejangizni yarating",
   text31: "Rejangizni yarating",
  },
  
Eng: {
text1: "Home",
text2: "About",
text3: "Create your plan",
text4: "Great coffee made simple." ,
text5: "Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.",
text6: "Create your plan",
text7: "Gran Espresso",
text8: "Light and flavorful blend with cocoa and black pepper for an intense experience",
text9: "Planalto",
text10: "Brazilian dark roast with rich and velvety body,  and hints of fruits and nuts",
text11: "Piccollo",
text12: "LMild and smooth blend featuring notes of toasted almond and dried cherry",
text13: "Danche",
text14: "Ethiopian hand-harvested blend  densely packed with vibrant fruit  notes",
text15: "Why choose us?",
text16: "A large part of our role is choosing which particular coffees will be featured  in our range. This means working closely with the best coffee growers to give  you a more impactful experience on every level.",
text17: "Best quality",
text18: "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
text19: "Exclusive benefits",
text20: "Special offers and swag when you subscribe, including 30% off your first shipment.",
text21: "Free shipping",
text22: "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
text23: "How it works",
text24: "Pick your coffee",
text25: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.",
text26: "Choose the frequency",
text27: "Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.",
text28: "Receive and enjoy! ",
text29: "We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.",
text30: "Create your plan",
text31: "Create your plan",
}
}