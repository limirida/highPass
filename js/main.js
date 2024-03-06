document.querySelector(".header-form__search").addEventListener("click", function () {
  document.querySelector(".form").classList.add("form-active");
  this.classList.add("active");
})
document.addEventListener("click", function (e) {
  let target = e.target;
  let form = document.querySelector(".form");
  if (!target.closest(".header-form")) {
    form.classList.remove("form-active");
    form.querySelector("input").value = "";
    document.querySelector(".header-form__search").classList.remove("active")
  }
})
document.querySelector('.map-info__close').addEventListener("click", function () {
  document.querySelector(".map-info").classList.add("close");
})

document.querySelector(".burger").addEventListener("click", function () {
  document.querySelector(".menu-mobil").classList.add("active");
})
document.addEventListener("click", function (e) {
  let target = e.target;
  let form = document.querySelector(".burger");
  if (!target.closest(".menu-mobil")) {
    form.classList.remove("active");
    document.querySelector(".header-form__search").classList.remove("active")
  }
})
document.querySelector('.header-menu__close').addEventListener("click", function () {
  document.querySelector(".menu-mobil").classList.remove("active");
})

document.querySelector(".search-button").addEventListener("click", function () {
  document.querySelector(".header-search").classList.add("header-form__active");
  this.classList.add("active");
})


document.addEventListener("click", function (e) {
  let target = e.target;
  let form = document.querySelector(".header-search");
  if (!target.closest(".form-container")) {
    form.classList.remove("header-form__active");
    form.querySelector("input").value = "";
    document.querySelector(".search-button").classList.remove("active")
  }
})
ymaps.ready(init);
function init() {
  // Создание карты.
  var myMap = new ymaps.Map("map", {
    // Координаты центра карты.
    // Порядок по умолчанию: «широта, долгота».
    // Чтобы не определять координаты центра карты вручную,
    // воспользуйтесь инструментом Определение координат.
    center: [55.758916, 37.6038700],
    // Уровень масштабирования. Допустимые значения:
    // от 0 (весь мир) до 19.
    zoom: 13.4,

  });
  var myPlacemark = new ymaps.Placemark([55.76933, 37.638521], { style: "z-index:10; cursor:pointer;" }, {
    iconLayout: 'default#image',
    iconImageHref: 'images/ellipse.svg',
    iconImageSize: [12, 12],
    iconImageOffset: [-16, -29]
  });

  // Размещение геообъекта на карте.
  myMap.geoObjects.add(myPlacemark);
  myMap.controls.remove("searchControl");
  myMap.controls.remove("trafficControl");
  myMap.controls.remove("typeSelector");
  myMap.controls.remove("fulscrenControlControl");
  myMap.controls.remove("zoomControl");
}


// рабочий
new JustValidate('.studio-form', {
  rules: {
    mail: {
      required: true,
      email: true,
    },
  },
  messages: {
    mail: 'Неверный формат'
  },
});

new JustValidate('.application-form', {
  rules: {
    name: {
      required: true,
      customRegexp: /^[а-яА-ЯёЁa-zA-Z]+$/,
      minLength: 2,
      maxLenght: 30,
    },
    mail: {
      required: true,
      email: true,
    },
  },
  messages: {
    name: 'Неверный формат',
    mail: 'Неверный формат'
  },
});
