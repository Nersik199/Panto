const infoBtns = document.querySelectorAll('.info-dot')

const infoHints = document.querySelectorAll('.info-hint')
// клик по кнопками с подскаской
for (let btn of infoBtns) {
	btn.addEventListener('click', function (e) {
		e.stopPropagation()
		//hide all hint
		for (let hint of infoHints) {
			hint.classList.add('none')
		}
		//show current all
		this.parentNode.querySelector('.info-hint').classList.toggle('none')
	})
}

// закрите подкаски
document.addEventListener('click', function () {
	for (let hint of infoHints) {
		hint.classList.add('none')
	}
})

//запрешаем вслыте сабите клика при клике на подсказки

for (let hint of infoHints) {
	hint.addEventListener('click', e => e.stopPropagation())
}

//swiper

const swiper = new Swiper('.swiper', {
	//loop: true,
	//freeMode: true,

	slidesPerView: 1,
	spaceBetween: 42,

	breakpoints: {
		600: {
			slidesPerView: 2,
			spaceBetween: 20,
		},
		920: {
			slidesPerView: 3,
			spaceBetween: 20,
		},
		1230: {
			slidesPerView: 4,
			spaceBetween: 42,
		},
	},

	// Navigation arrows
	navigation: {
		nextEl: '#sliderNext',
		prevEl: '#sliderPrev',
	},
})

//TABS
const tabsBtns = document.querySelectorAll('[data-tab]')
const tabsProducts = document.querySelectorAll('[data-tab-value]')

for (let btn of tabsBtns) {
	btn.addEventListener('click', function () {
		//убераем активный классы у всех кноп
		for (let btn of tabsBtns) {
			btn.classList.remove('tab-controls__btn--active')
		}

		//дабавлаем активниый класс к текущей кнопке
		this.classList.add('tab-controls__btn--active')

		//отабразить нужние тавари скрить не нужние
		for (let product of tabsProducts) {
			if (this.dataset.tab === 'all') {
				product.classList.remove('none')
			} else {
				if (product.dataset.tabValue === this.dataset.tab) {
					product.classList.remove('none')
				} else {
					product.classList.add('none')
				}
			}
		}
		// update swiper
		swiper.update()
	})
}

//mobile nav .mobile-nav-wrapper
const mobileNavOpenBtn = document.querySelector('#open-mobile-nav-btn')

const mobileNavCloseBtn = document.querySelector('#close-mobile-nav-btn')

const mobileNav = document.querySelector('#mobile-nav')

mobileNavOpenBtn.onclick = function () {
	mobileNav.classList.add('mobile-nav-wrapper--open')
}

mobileNavCloseBtn.onclick = function () {
	mobileNav.classList.remove('mobile-nav-wrapper--open')
}

//mobile nav close-mobile-nav-btn
