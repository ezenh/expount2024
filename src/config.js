// require('dotenv').config();
// import 'dotenv/config';


// const GOOGLE_CLIENT_ID = process.env.GOOGLE_CLIENT_ID

const CONFIG = {
    API_URL: 'http://localhost:3000',
    GOOGLE_CLIENT_ID: "710446449605-j96eqitecmr9op1a2vebja92ci15m0cu.apps.googleusercontent.com",
    ALLOWED_LOCATIONS: [
        { name: 'Test Raco', lat: -26.67643, lon: -65.43406 },
        { name: 'UNT Campus Principal', lat: -26.8339, lon: -65.2260 },
        { name: 'Dpto', lat: -26.82956, lon: -65.21258 },
        // Añade más ubicaciones según sea necesario
    ],
    ALLOWED_RADIUS: 50 // en metros
};
