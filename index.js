const btns = document.querySelectorAll('.btn')

/// language title
const headerText1 = document.querySelector('.home_text1')
const headerText2 = document.querySelector('.home_text2')
const headerText3 = document.querySelector('.home_text3')

btns.forEach(e => {
    e.addEventListener('click', () => {
      const til = e.getAttribute("lang")
      headerText1.textContent = translate[til].text1
      headerText2.textContent = translate[til].text2
      headerText3.textContent = translate[til].text3
    }) });


var translate = {
   Uzb: {
   text1: "Uy",
   text2: "Biz haqimizda",
   text3: "Rejangizni yarating",
  },
  
Eng: {
text1: "Home",
text2: "About",
text3: "Create your plan",
}
}