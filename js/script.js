let navLink = document.querySelectorAll(".nav__link")

navLink.forEach(elem => {
    elem.addEventListener("click", () => {
        for(e of navLink) {
            e.classList.remove("activeNav")
        }
        elem.classList.add("activeNav")
    })
})

swiper = new Swiper('.nav', {
	slidesPerGroup: 1,
    slidesPerView: "auto",
	spaceBetween: 37,
	loop: true,
	navigation: {
		nextEl: '.nav__next'
		},
    // breakpoints: {
    //     0: {
    //         spaceBetween: 35
    //     }
    // }
  })