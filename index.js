/*Swiper principal*/
const swiper = new Swiper('.swiper-main', {
  speed: 400,
  slidesPerView: 1,
  autoHeight: true
})

/*Menu principal ativa swiper principal*/
const menu = document.querySelectorAll('ul li a')

for (const menubtn of menu) {
  menubtn.addEventListener('click', function () {
    if (menubtn.id === 'btnhome') {
      swiper.slideTo(0)
    }

    if (menubtn.id === 'btnservice') {
      swiper.slideTo(1)
    }
    if (menubtn.id === 'btnteam') {
      swiper.slideTo(2)
    }
  })
}

/*Menu de serviços*/
const servbtn = document.querySelectorAll('.service-button')
const texts = document.querySelectorAll('.service-text')

for (const btn of servbtn) {
  btn.addEventListener('click', function () {
    for (const btn of servbtn) {
      btn.classList.remove('active')
    }
    btn.classList.add('active')

    for (i in servbtn) {
      if (servbtn[i].classList.contains('active')) {
        for (const text of texts) {
          text.classList.add('hide')
        }
        texts[i].classList.remove('hide')
      }
    }
  })
}

/*Swiper team*/
const swiperTeam = new Swiper('.swiper-team', {
  speed: 400,
  slidesPerView: 3,
  mouseweel: true,
  pagination: {
    el: '.swiper-pagination'
  },
  loop: true,
  spaceBetween: 40,
  autoplay: {
    delay: 4000
  }
})
