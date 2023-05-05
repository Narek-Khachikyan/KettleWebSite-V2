const swiper = new Swiper('.slider-swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.slider-btn-next',
    prevEl: '.slider-btn-prev',
  },
});

const swiper2 = new Swiper('.sells-swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.sells-next-button',
    prevEl: '.sells-prev-button',
  },
});



const burger = document.querySelector('.burger');
const navMenu = document.querySelector('.header__list');
const body = document.querySelector('body')

burger.addEventListener('click', () => {
  burger.classList.toggle('active');
  navMenu.classList.toggle('active');
  body.classList.toggle('lock')
})

const burgerMenuLinks = navMenu.getElementsByTagName("a");
for (let i = 0; i < burgerMenuLinks.length; i++) {
  burgerMenuLinks[i].addEventListener("click", function () {
    navMenu.classList.remove('active');
    burger.classList.remove('active');
    body.classList.remove('lock')
  });
}
const selectedLanguage = document.querySelector('.selected-language');
const languageList = document.querySelector('.language-list');
const languageListItems = languageList.querySelectorAll('li');
const selectedLanguageText = selectedLanguage.querySelector('span');
const selectedLanguageImage = selectedLanguage.querySelector('img');

selectedLanguage.addEventListener('click', () => {
  languageList.classList.toggle('show');
});

languageListItems.forEach(item => {
  item.addEventListener('click', () => {
    const value = item.getAttribute('data-value');
    const text = item.textContent.trim();
    const imageSrc = item.querySelector('img').getAttribute('src');

    selectedLanguageText.textContent = text;
    selectedLanguageImage.setAttribute('src', imageSrc);
    languageList.classList.remove('show');

    // Do something with the selected language value
    console.log(value);
  });
});

const selectedLanguage2 = document.querySelector('.selected-language-mobile');
const languageList2 = document.querySelector('.language-list-mobile');
const languageListItems2 = languageList2.querySelectorAll('li');
const selectedLanguageText2 = selectedLanguage2.querySelector('span');
const selectedLanguageImage2 = selectedLanguage2.querySelector('img');

selectedLanguage2.addEventListener('click', () => {
  languageList2.classList.toggle('show');
});

languageListItems2.forEach(itemMobile => {
  itemMobile.addEventListener('click', () => {
    const valueMobile = itemMobile.getAttribute('data-value-mobile');
    const textMobile = itemMobile.textContent.trim();
    const imageSrcMobile = itemMobile.querySelector('img').getAttribute('src');

    selectedLanguageText2.textContent = textMobile;
    selectedLanguageImage2.setAttribute('src', imageSrcMobile);
    languageList2.classList.remove('show');

    console.log(valueMobile);
  });
});


const parents = document.querySelectorAll('.goods__card-btnWrapepr');
const children = document.querySelectorAll('.goods__card-link');

for (let i = 0; i < children.length; i++) {
  children[i].addEventListener('mouseover', () => {
    parents[i].style.backgroundColor = '#216F61';
  });

  children[i].addEventListener('mouseout', () => {
    parents[i].style.backgroundColor = '#0D3F36';
  });
}

