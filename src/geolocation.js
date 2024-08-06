// import { CONFIG } from "./config";

function checkGeolocation() {
    return new Promise((resolve, reject) => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                const userLat = position.coords.latitude;
                const userLon = position.coords.longitude;
                
                const isInAllowedLocation = CONFIG.ALLOWED_LOCATIONS.some(location => {
                    return getDistance(userLat, userLon, location.lat, location.lon) <= CONFIG.ALLOWED_RADIUS;
                });

                if (isInAllowedLocation) {
                    resolve(true);
                } else {
                    reject('Ubicación no permitida');
                }
            }, function(error) {
                reject('Error al obtener la ubicación: ' + error.message);
            });
        } else {
            reject('Geolocalización no soportada');
        }
    });
}

function getDistance(lat1, lon1, lat2, lon2) {
    const R = 6371e3; // Radio de la tierra en metros
    const φ1 = lat1 * Math.PI/180;
    const φ2 = lat2 * Math.PI/180;
    const Δφ = (lat2-lat1) * Math.PI/180;
    const Δλ = (lon2-lon1) * Math.PI/180;

    const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

    return R * c; // en metros
}