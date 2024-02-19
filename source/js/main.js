document.addEventListener('DOMContentLoaded', function() {

	var optimalButton = document.getElementById('optimal-btn'),
		profiButton = document.getElementById('profi-btn'),
		moreButton = document.getElementById('more-btn'),
		orderPopUp = document.querySelector('.order-overlay'),
		orderClose = document.getElementById('order-close'),
		bodyTag = document.getElementById('body'),
		
		switcher = document.querySelector('.plans__switcher-switch'),
		switcherElem = document.querySelector('.plans__switcher-state'),
		
		priceOptimal = document.getElementById('price-opt'),
		priceProfi = document.getElementById('price-prof'),

		mobileNav = document.querySelector('.header__nav-mobile'),
		mobileNavItems = document.querySelectorAll('.header__nav-mobile-item'),
		hamburger = document.getElementById('hamburger'),

		orderFormTitle = document.querySelector('.order__form-title'),
		orderFormDesc = document.querySelector('.order__form-desc'),
		orderFormFields = document.querySelector('.order__form-fileds'),
		orderFormAgreement = document.querySelector('.order__form-agreement'),

		videoPlayButton = document.querySelector('.video__play'),
		videoPlayer = document.getElementById('video-player');

	var switcherState = 'annual';	

	var btnArray = [optimalButton, profiButton, moreButton];

	//*** Форма заявки ***
	
	btnArray.forEach( function(item) {
		item.addEventListener('click', function() {
			orderPopUp.style.display = 'block';
			bodyTag.style.overflow = 'hidden';
		});
		
	});	

	orderClose.addEventListener('click', function(e) {
		e.preventDefault();
		orderPopUp.style.display = 'none';
		bodyTag.style.overflow = 'auto';
	});

	document.addEventListener('submit', function(e) {
		e.preventDefault();
		orderFormTitle.textContent = 'Спасибо за заявку';
		orderFormDesc.textContent = 'Наши менеджеры свяжутся с вами в течении 5 минут';
		orderFormFields.style.display = 'none';
		orderFormAgreement.style.display = 'none';
	});

	//*** Переключатель ***	

	switcher.addEventListener('click', function() {
		
		if (switcherState == 'annual') {
			this.style.backgroundColor = '#ABABAB';
			switcherElem.style.transform = 'translate(0)';
			switcherState = 'monthly';
			priceOptimal.textContent = '890₽';
			priceProfi.textContent = '1590₽';
		} else {
			this.style.backgroundColor = '#25DAC5';
			switcherElem.style.transform = 'translate(12px)';
			switcherState = 'annual';
			priceOptimal.textContent = '500₽';
			priceProfi.textContent = '1000₽';
		}
		
	});

	//*** Мобильное меню ***

	hamburger.addEventListener('click', function() {
		
		mobileNav.classList.toggle('header__nav-mobile_on');
		
		mobileNavItems.forEach( function(elem) {
			elem.classList.toggle('header__nav-mobile-item_on');
		});

	});

	mobileNavItems.forEach( function(elem) {
		
		elem.addEventListener('click', function() {
			mobileNav.classList.toggle('header__nav-mobile_on');
			mobileNavItems.forEach( function(elem) {
				elem.classList.toggle('header__nav-mobile-item_on');
			});
		});

	});

	//*** Видео ***

	videoPlayButton.addEventListener('click', function() {
		videoPlayer.play();
		videoPlayButton.style.display = 'none';

	});

});