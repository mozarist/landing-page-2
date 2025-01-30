
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

function showHemat(){
  document.getElementById('hemat').classList.remove('hidden')
  document.getElementById('hemat0').classList.remove('hidden')
  document.getElementById('hemat1').classList.remove('hidden')
  document.getElementById('hemat2').classList.remove('hidden')
  document.getElementById('hemat3').classList.remove('hidden')
  document.getElementById('hemat4').classList.remove('hidden')
  document.getElementById('hemat5').classList.remove('hidden')
  document.getElementById('ekonomis').classList.add('hidden')
  document.getElementById('ekonomis0').classList.add('hidden')
  document.getElementById('ekonomis1').classList.add('hidden')
  document.getElementById('ekonomis2').classList.add('hidden')
  document.getElementById('ekonomis3').classList.add('hidden')
  document.getElementById('ekonomis4').classList.add('hidden')
  document.getElementById('ekonomis5').classList.add('hidden')
  document.getElementById('bisnis').classList.add('hidden')
  document.getElementById('bisnis0').classList.add('hidden')
  document.getElementById('bisnis1').classList.add('hidden')
  document.getElementById('bisnis2').classList.add('hidden')
  document.getElementById('bisnis3').classList.add('hidden')
  document.getElementById('bisnis4').classList.add('hidden')
  document.getElementById('bisnis5').classList.add('hidden')
}
function showEkonomis(){
  document.getElementById('hemat').classList.add('hidden')
  document.getElementById('hemat0').classList.add('hidden')
  document.getElementById('hemat1').classList.add('hidden')
  document.getElementById('hemat2').classList.add('hidden')
  document.getElementById('hemat3').classList.add('hidden')
  document.getElementById('hemat4').classList.add('hidden')
  document.getElementById('hemat5').classList.add('hidden')
  document.getElementById('ekonomis').classList.remove('hidden')
  document.getElementById('ekonomis0').classList.remove('hidden')
  document.getElementById('ekonomis1').classList.remove('hidden')
  document.getElementById('ekonomis2').classList.remove('hidden')
  document.getElementById('ekonomis3').classList.remove('hidden')
  document.getElementById('ekonomis4').classList.remove('hidden')
  document.getElementById('ekonomis5').classList.remove('hidden')
  document.getElementById('bisnis').classList.add('hidden')
  document.getElementById('bisnis0').classList.add('hidden')
  document.getElementById('bisnis1').classList.add('hidden')
  document.getElementById('bisnis2').classList.add('hidden')
  document.getElementById('bisnis3').classList.add('hidden')
  document.getElementById('bisnis4').classList.add('hidden')
  document.getElementById('bisnis5').classList.add('hidden')
}
function showBisnis(){
  document.getElementById('hemat').classList.add('hidden')
  document.getElementById('hemat0').classList.add('hidden')
  document.getElementById('hemat1').classList.add('hidden')
  document.getElementById('hemat2').classList.add('hidden')
  document.getElementById('hemat3').classList.add('hidden')
  document.getElementById('hemat4').classList.add('hidden')
  document.getElementById('hemat5').classList.add('hidden')
  document.getElementById('ekonomis').classList.add('hidden')
  document.getElementById('ekonomis0').classList.add('hidden')
  document.getElementById('ekonomis1').classList.add('hidden')
  document.getElementById('ekonomis2').classList.add('hidden')
  document.getElementById('ekonomis3').classList.add('hidden')
  document.getElementById('ekonomis4').classList.add('hidden')
  document.getElementById('ekonomis5').classList.add('hidden')
  document.getElementById('bisnis').classList.remove('hidden')
  document.getElementById('bisnis0').classList.remove('hidden')
  document.getElementById('bisnis1').classList.remove('hidden')
  document.getElementById('bisnis2').classList.remove('hidden')
  document.getElementById('bisnis3').classList.remove('hidden')
  document.getElementById('bisnis4').classList.remove('hidden')
  document.getElementById('bisnis5').classList.remove('hidden')
}