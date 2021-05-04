//яндекс карты
var objectsMap;
var locations = [
  [59.893782, 30.331068, '<p>196006, г. Санкт-Петербург, ул. Цветочная, 2В</p>'],
  [55.784045, 37.584748, '<p>125040, г. Москва, 1-я ул. Ямского поля, дом 17, корпус 12, этаж 1, оф. № 10</p>'],
];

setTimeout(function() {
  var elem = document.createElement('script');
  elem.type = 'text/javascript';
  elem.src = 'https://api-maps.yandex.ru/2.1/?apikey=924459a1-8139-46f3-a1ad-99fdf8abf9a4&lang=ru_RU&onload=init';
  document.getElementById('contacts_map').appendChild(elem);
}, 2000);

function init() {
  objectsMap = new ymaps.Map('contacts_map', {
    center: [59.893782, 30.331068],
    zoom: 9
  }, {
    searchControlProvider: 'yandex#search'
  });

  objectsMap.behaviors.disable('scrollZoom');

  var i, placemark;

  for (i = 0; i < locations.length; i++) {
    placemark = new ymaps.Placemark([locations[i][0], locations[i][1]], {
      hintContent: locations[i][2],
      balloonContentBody: locations[i][2]
    }, {
      balloonMaxWidth: 560,
      iconLayout: 'default#image',
      iconImageHref: 'images/icons/map_pin.svg',
      iconImageSize: [10, 10],
      iconImageOffset: [-5, -5]
    });

    objectsMap.geoObjects.add(placemark);
  }

  objectsMap.setBounds(objectsMap.geoObjects.getBounds(), {
    checkZoomRange: true,
    zoomMargin: 35
  });

  var body = document.querySelector('body');
  if (body.offsetWidth < 768) {
    //objectsMap.behaviors.disable('drag');
    objectsMap.behaviors.enable('MultiTouch');
  }
}
