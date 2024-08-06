require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// mongoose.connect('mongodb+srv://ezenh87:niZek8lQJ0CpQzSX@expount.ph9wkxg.mongodb.net/expount2024');
const MONGODB_URI = process.env.MONGODB_URI;
const SECRET_KEY = process.env.JWT_SECRET;

mongoose.connect(MONGODB_URI).
    then(() => {
    console.log('Conectado a MongoDB');
}).catch(err => {
    console.error('Error al conectar a MongoDB:', err.message);
});


const UserSchema = new mongoose.Schema({
    dni: { type: Number, unique: true, required: true },
    photo: String,
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    gender: { type: String, required: true },
    birthDate: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    school: { type: String, required: true },
});

const User = mongoose.model('User', UserSchema);

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
        res.json({ success: true, token, user: { name: user.name, email: user.email } });
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
            res.json({ success: true, token, user: { name: user.name, email: user.email } });
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
        res.json({ success: true, token, user: { name: user.name, email: user.email } });
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

app.get('/user/:id', authenticateToken, async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (user) {
            res.json({ success: true, user: { name: user.name, email: user.email } });
        } else {
            res.status(404).json({ success: false, error: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(400).json({ success: false, error: error.message });
    }
});

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

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});

