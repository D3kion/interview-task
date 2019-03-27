// Map setup
let map = L.map('mapid').setView([47.2408, 39.7105], 17);
L.Control.measureControl().addTo(map);
L.control.mousePosition().addTo(map);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, ' +
        '<a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets'
}).addTo(map);

// Markers
const parkIcon = L.icon({
    iconUrl: 'img/park.svg',

    iconSize:     [32, 32],
    iconAnchor:   [16, 16],
    popupAnchor:  [0, -20]
});
let park = L.marker([47.240813, 39.710641], {icon: parkIcon}).addTo(map);
park.bindPopup('Студенческий парк ДГТУ').openPopup();

const dormIcon = L.icon({
    iconUrl: 'img/dorm.svg',

    iconSize:     [32, 32],
    iconAnchor:   [16, 16],
    popupAnchor:  [0, -20]
});
let dorm = L.marker([47.2395, 39.71276], {icon: dormIcon}).addTo(map);
dorm.bindPopup('Общежитие ДГТУ')

const busIcon = L.icon({
    iconUrl: 'img/bus.svg',

    iconSize:     [32, 32],
    iconAnchor:   [16, 16],
    popupAnchor:  [0, -20]
});
let bus1 = L.marker([47.239287, 39.7137], {icon: busIcon}).addTo(map);
bus1.bindPopup('Остановка: ДГТУ')
let bus2 = L.marker([47.238664, 39.713253], {icon: busIcon}).addTo(map);
bus2.bindPopup('Остановка: ДГТУ')

const monumentIcon = L.icon({
    iconUrl: 'img/monument.svg',

    iconSize:     [32, 32],
    iconAnchor:   [16, 16],
    popupAnchor:  [0, -20]
});
let monument = L.marker([47.239319, 39.710292], {icon: monumentIcon}).addTo(map);
monument.bindPopup('Памятник студентам и преподавателям РИСХМА, погибшим в годы Великой Отечественной войны')

const churchIcon = L.icon({
    iconUrl: 'img/church.svg',

    iconSize:     [32, 32],
    iconAnchor:   [16, 16],
    popupAnchor:  [0, -20]
});
let church = L.marker([47.2393, 39.71102], {icon: churchIcon}).addTo(map);
church.bindPopup('Храм Святой Мученицы Татианы')

const toiletIcon = L.icon({
    iconUrl: 'img/toilet.svg',

    iconSize:     [32, 32],
    iconAnchor:   [16, 16],
    popupAnchor:  [0, -20]
});
let toilet = L.marker([47.239276, 39.711564], {icon: toiletIcon}).addTo(map);
toilet.bindPopup("Туалет");
