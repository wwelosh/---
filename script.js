// Пример функции для добавления интерактивной карты
function initializeMap() {
    const mapElement = document.getElementById("map-container");
    // Создаем карту с фиктивными данными
    const map = new google.maps.Map(mapElement, {
        zoom: 10,
        center: { lat: 42.5, lng: 76.5 },
    });

    // Добавляем маркер
    new google.maps.Marker({
        position: { lat: 42.5, lng: 76.5 },
        map: map,
        title: "Пункт приема вторсырья",
    });
}

// Загружаем карту после загрузки страницы
window.onload = initializeMap;
