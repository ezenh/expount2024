require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const path = require('path'); // Nuevo: Para manejar rutas correctamente

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Conexión a MongoDB
const MONGODB_URI = process.env.MONGODB_URI;
const SECRET_KEY = process.env.JWT_SECRET;

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('Conectado a MongoDB');
    })
    .catch(err => {
        console.error('Error al conectar a MongoDB:', err.message);
    });

// Schema y Modelos de Mongoose
const UserSchema = new mongoose.Schema({
    dni: { type: Number, unique: true, required: true },
    photo: String,
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, required: true },
    birthDate: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    school: { type: String, required: true },
    sorteo: { type: Boolean, default: false, required: true },
});

const User = mongoose.model('User', UserSchema);

// Servir archivos estáticos desde la carpeta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Servir archivos JavaScript desde la carpeta 'src'
app.use('/src', express.static(path.join(__dirname, 'src')));


// Rutas de la API
app.get('/users', async (req, res) => {
    try {
        const users = await User.find(); // Encuentra todos los usuarios en la base de datos
        res.json(users); // Envía los usuarios como respuesta JSON
    } catch (error) {
        res.status(500).json({ error: error.message }); // Maneja errores
    }
});

app.post('/users', async (req, res) => {
    try {
        const userData = req.body;
        console.log('Datos recibidos:', userData);

        // Verificar si ya existe un usuario con el mismo DNI
        const existingUserDNI = await User.findOne({ dni: userData.dni });
        if (existingUserDNI) {
            return res.status(400).json({ success: false, error: 'Ya existe un usuario con este DNI' });
        }

        // Verificar si ya existe un usuario con el mismo email
        const existingUserEmail = await User.findOne({ email: userData.email });
        if (existingUserEmail) {
            return res.status(400).json({ success: false, error: 'Ya existe un usuario con este email' });
        }

        const user = new User(userData);
        await user.save();
        const token = jwt.sign({ userId: user._id }, SECRET_KEY);
        res.json({ success: true, token, user: { user } });
    } catch (error) {
        console.error('Error al guardar el usuario:', error);
        res.status(400).json({ success: false, error: error.message });
    }
});

app.post('/check-dni', async (req, res) => {
    try {
        const { dni } = req.body;
        const user = await User.findOne({ dni });
        if (user) {
            const token = jwt.sign({ userId: user._id }, SECRET_KEY);
            res.json({ success: true, token, user: { user } });
        } else {
            res.json({ success: false, message: 'DNI no registrado' });
        }
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
});

app.post('/login-google', async (req, res) => {
    try {
        const { email } = req.body;
        let user = await User.findOne({ email });
        if (!user) {
            // Si el usuario no existe, lo creamos
            user = new User(req.body);
            await user.save();
        }
        const token = jwt.sign({ userId: user._id }, SECRET_KEY);
        res.json({ success: true, token, user: { user } });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

app.get('/user/:id', authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            res.json({ success: true, user: { user } });
        } else {
            res.status(404).json({ success: false, error: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

app.post('/participar', authenticateToken, async (req, res) => {
    console.log('Solicitud recibida en /participar');

    try {
        const userId = req.body.userId; // Extrae userId desde el cuerpo de la solicitud
        const user = await User.findByIdAndUpdate(
            userId,
            { sorteo: true },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ error: 'Usuario no encontrado' });
        }

        res.json({ message: 'Participación registrada con éxito', user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


app.get('/qr-login/:dni', (req, res) => {
    const dni = req.params.dni;
    res.redirect(`/?qr=true&dni=${dni}`);
});




// Añade esta nueva ruta en tu server.js
app.post('/reset-sorteo', authenticateToken, async (req, res) => {
    try {
        if (req.user.role !== 'admin') {
            return res.status(403).json({ error: 'No tienes permiso para realizar esta acción' });
        }

        const result = await User.updateMany({}, { sorteo: false });

        res.json({ 
            message: 'Estado de sorteo reiniciado para todos los usuarios',
            modifiedCount: result.modifiedCount 
        });
    } catch (error) {
        console.error('Error al reiniciar sorteo:', error);
        res.status(500).json({ error: 'Error interno del servidor' });
    }
});





// Middleware para autenticación con JWT
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.sendStatus(401);

    jwt.verify(token, SECRET_KEY, (err, user) => {
        if (err) return res.sendStatus(403);
        req.user = user;
        next();
    });
}

// Servir el archivo index.html para cualquier otra ruta
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});