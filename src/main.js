// import CONFIG from './config';

document.addEventListener('DOMContentLoaded', init);

function init() {
    initGoogleAuth();
    checkGeolocation()
        .then(() => {
            showLoginForm();
        })
        .catch((error) => {
            showErrorMessage("Solo los participantes de la EXPO UNT 2024 pueden acceder al contenido de este sitio.");
        });
}

function showLoginForm() {
    const container = document.getElementById('loginContainer');
    container.style.display = 'flex';
    container.innerHTML = `
        <h2>EXPO UNT 2024</h2>
        <input type="text" id="dni" placeholder="Ingresa tu DNI">
        <button onclick="checkDNI()">Ingresar</button>
        <button onclick="signInWithGoogle()"><img src="../assets/ico/googleico.webp">Iniciar sesión con Google</button>
        <span id="error-alert"></span>
        <button onclick="showRegisterForm()">Registrarse</button>

        <video src="../assets/vid/UNTbkg.mp4" autoplay muted loop>
    `;
    hideOtherContainers('loginContainer');
}

function checkDNI() {
    const dni = document.getElementById('dni').value;
    if (!dni) {
        document.getElementById("error-alert").style.display = 'flex'
        document.getElementById("error-alert").innerText = "Por favor, ingrese su DNI"
        return;
    }

    api.checkDNI(dni)
        .then(response => {
            if (response.success) {
                showCover(response.user.name);
            } else {
                document.getElementById("error-alert").style.display = 'flex'
                document.getElementById("error-alert").innerText = "El DNI ingresado no coincide con ningún usuario registrado en la EXPO UNT 2024"
            }
        })
        .catch(error => {
            console.error('Error al verificar DNI:', error);
            document.getElementById("error-alert").style.display = 'flex'
            document.getElementById("error-alert").innerText = "DNI no encontrado. Por favor, intente nuevamente."
        });
}

function showRegisterForm(userData = {}) {
    const container = document.getElementById('registerContainer');
    container.style.display = 'flex';
    container.innerHTML = `
        <h2>Registro</h2>
        <h3>EXPO UNT 2024</h3>
        <h4>Para ver todo el contenido y participar del sorteo</h4>
        <div class="photo-container">
            <img id="userPhoto" src="${userData.photo || 'placeholder.jpg'}" alt="Foto de usuario">
        </div>
        <button onclick="capturePhoto()">Tomar foto</button>
        <input type="text" id="name" placeholder="Nombre" value="${userData.name || ''}">
        <input type="text" id="lastName" placeholder="Apellido" value="${userData.lastName || ''}">
        <input type="number" id="nDni" placeholder="DNI" value="${userData.dni || ''}">

        <select id="gender">
            <option value="">Seleccione género</option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
            <option value="other">Otro</option>
        </select>
        <input type="date" id="birthDate" placeholder="Fecha de nacimiento">
        <input type="email" id="email" placeholder="Email" value="${userData.email || ''}">
        <select id="school">
            <option value="">Seleccione escuela</option>
            <option value="escuela1">Escuela 1</option>
            <option value="escuela2">Escuela 2</option>
        </select>
        <button onclick="submitRegistration()">Enviar</button>
        <video src="../assets/vid/UNTbkg.mp4" autoplay muted loop>

    `;
    hideOtherContainers('registerContainer');
}

function submitRegistration() {
    const userData = {
        dni: document.getElementById('nDni').value,
        name: document.getElementById('name').value,
        lastName: document.getElementById('lastName').value,
        gender: document.getElementById('gender').value,
        birthDate: document.getElementById('birthDate').value,
        email: document.getElementById('email').value,
        school: document.getElementById('school').value,
    };

    if (Object.values(userData).every(value => value)) {
        register(userData);
    } else {
        alert('Por favor, complete todos los campos');
    }
}

function showCover(userName) {
    const container = document.getElementById('coverContainer');
    container.style.display = 'block';
    container.innerHTML = `<h2>Bienvenido ${userName} a la EXPO UNT 2024</h2>`;
    hideOtherContainers('coverContainer');

    setTimeout(() => {
        showHome(userName);
    }, 3000);
}

function showHome(userName) {
    const container = document.getElementById('homeContainer');
    container.style.display = 'block';
    container.innerHTML = `
        <h2>Bienvenido, ${userName}</h2>
        <p>Aquí irá el contenido principal de la aplicación.</p>
        <button onclick="logout()">Cerrar sesión</button>
    `;
    hideOtherContainers('homeContainer');
}

function showErrorMessage(message) {
    const container = document.getElementById('errorContainer');
    container.style.display = 'flex';
    container.innerHTML = 
    `
        <h2>${message}</h2>
        <video src="../assets/vid/UNTbkg.mp4" autoplay muted loop>
    `;
    hideOtherContainers('errorContainer');
}

function hideOtherContainers(exceptId) {
    const containers = ['loginContainer', 'registerContainer', 'coverContainer', 'homeContainer', 'errorContainer'];
    containers.forEach(id => {
        if (id !== exceptId) {
            document.getElementById(id).style.display = 'none';
        }
    });
}

function capturePhoto() {
    // En un navegador móvil, esto abriría la cámara
    // Aquí simplemente simularemos la captura con un prompt
    const photoUrl = prompt('Ingrese URL de la foto (simulando captura de cámara):');
    if (photoUrl) {
        document.getElementById('userPhoto').src = photoUrl;
    }
}



document.addEventListener('DOMContentLoaded', () => {
    fetch(`http://localhost:3000/users`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Red de respuesta no OK');
            }
            return response.json();
        })
        .then(data => {
            console.log('Datos recibidos del servidor:', data);
        })
        .catch(error => {
            console.error('Error al conectar con el servidor:', error);
        });
});

// document.addEventListener('DOMContentLoaded', () => {
//     const userData = {
//         dni: 33139764,
//         photo: 'photo-url.jpg',
//         name: 'John',
//         lastName: 'Dowe',
//         gender: 'Male',
//         birthDate: '1990-01-01T00:00:00.000Z',  // Formato ISO 8601
//         email: 'jocchn.dsoe@example.com',
//         school: 'Some School'
//     };

//     fetch('http://localhost:3000/users', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(userData),
//     })
//     .then(response => {
//         if (!response.ok) {
//             throw new Error('Red de respuesta no OK');
//         }
//         return response.json();
//     })
//     .then(data => {
//         console.log('Usuario creado:', data);
//     })
//     .catch(error => {
//         console.error('Error al crear el usuario:', error);
//     });
// });