// import CONFIG from './config';

document.addEventListener('DOMContentLoaded', init);

let userData = {}
// 1 - CARGA DE PANTALLA LOGIN ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function init() {
    // initGoogleAuth();
    initLoginButton()
    checkGeolocation()
        .then(() => {
            showLoginForm();
        })
        .catch((error) => {
            showErrorMessage("Solo los participantes de la EXPO UNT 2024 pueden acceder al contenido de este sitio.");
        });
}
// 1A - CARGA CONTENIDO DE PANTALLA LOGIN //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function showLoginForm() {
    const container = document.getElementById('loginContainer');
    container.style.display = 'flex';
    // <h2>EXPO UNT 2024</h2>

    container.innerHTML = `
        <img src="../assets/img/expo2024_logo.png">
        <input type="number" id="dni" placeholder="Ingresa tu DNI" onclick"clean-error()">
        <button onclick="checkDNI()">Ingresar</button>
        <div id="google-login"></div>
        <span id="error-alert"></span>

        <button onclick="showRegisterForm()">Registrarse</button>

        <video src="../assets/vid/UNTbkg.mp4" autoplay muted loop>
    `;
    hideOtherContainers('loginContainer');

    setTimeout(() => {
        document.getElementById("error-alert").style.display = 'flex'
    }, 500);

    dni.addEventListener('input', () => {
        document.getElementById("error-alert").innerText = ''

    })
}

// 2 - AL CLICKEAR BOTON GOOGLE CHECKEA SI EXISTE EL USUARIO EN LA DB ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function checkUsersinDb(user) {
    fetch(`http://localhost:3000/users`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Red de respuesta no OK');
        }
        return response.json();
    })
    .then(data => {
        console.log('Datos recibidos del servidor:', data);

        let matchedUser = false
        for(userindb of data) {
            if(user.email === userindb.email || user.dni === userindb.dni) {
                console.log(user)
                matchedUser = true
            }
        }
        setTimeout(() => {
            console.log(matchedUser)
            if(matchedUser) {
                // SI LO ENCUENTRA => PANTALLA DE BIENVENIDA
                console.log('usuario encontrado')
                showCover(userindb)
            }else{
                // SI NO LO ENCUENTRA => PANTALLA PARA COMPLETAR FORMULARIO PRECARGANDO DATOS EXTRAIDOS DE LA CUENTA DE GOOGLE
                console.log('usuario no encontrado')
                showRegisterForm(userindb)
            }
        }, 500);

    })
    .catch(error => {
        console.error('Error al conectar con el servidor:', error);
    });
}

// 2A - USUARIO NO ENCONTRADO EN LA DB / CREAR NUEVO USUARIO => PANTALLA REGISTER /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function showRegisterForm(userData = {}) {
    const container = document.getElementById('registerContainer');
    container.style.display = 'flex';
    container.innerHTML = `
        <h2>Registro EXPO UNT 2024</h2>
        <h4>Para ver todo el contenido y participar del sorteo</h4>
        <div class="photo-container">
            <img id="userPhoto" src="${userData.picture|| 'placeholder.jpg'}">
        </div>
        <button id="load-photo-button" onclick="capturePhoto()">Tomar foto</button>
        <input type="text" id="name" placeholder="Nombre" value="${userData.given_name || 'eze'}">
        <input type="text" id="lastName" placeholder="Apellido" value="${userData.family_name || 'nh'}">

        <div class="inputs-div">
            <input type="number" id="nDni" placeholder="DNI" value="${userData.dni || '7697657'}">
            <select class="select" id="gender" }>
                <option value="${userData.gender || 'male'}">Selecciona tu género</option>
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
                <option value="other">Otro</option>
            </select>
        </div>

 
        <input type="date" id="birthDate" placeholder="Fecha de nacimiento" value="${userData.birthdate || '1987-08-26'}">
        <input type="email" id="email" placeholder="Email" value="${userData.email || 'ezenh87@gmail.com'}">
        <select class="select" id="school">
            <option class="first-option" value="">Selecciona tu escuela</option>
            <option value="escuela1">Escuela 1</option>
            <option value="escuela2">Escuela 2</option>
        </select>
        <button id="register-submit-button" onclick="submitRegistration()">Enviar</button>
        <video src="../assets/vid/UNTbkg.mp4" autoplay muted loop>

    `;
    hideOtherContainers('registerContainer');
}

// 3 - PANTALLA COVER
function showCover(user) {
    const container = document.getElementById('coverContainer');
    container.style.display = 'flex';
    container.innerHTML = `<h2>Bienvenido ${user.name} a la EXPO UNT 2024</h2>`;
    hideOtherContainers('coverContainer');
    console.log(userData)

    setTimeout(() => {
        showHome(user);
    }, 3000);
}

// 4 - PANTALLA HOME/BIENVENIDA /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function showHome(user) {
    console.log(user)
    const container = document.getElementById('homeContainer');
    container.style.display = 'flex';
    container.innerHTML = `
        <img src="${user.photo}">
        <h2>Bienvenido, ${user.name}</h2>
        <p>Aquí irá el contenido principal de la aplicación.</p>
        <button onclick="logout()">Cerrar sesión</button>
    `;
    hideOtherContainers('homeContainer');
}

// FUNCIONES EXTRAS
// Checkear DNI ingresado en Login
function checkDNI() {
    const dni = document.getElementById('dni').value;
    if (!dni) {
        console.log(logedUser)

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

// Asignar la función checkDNI al objeto global window
window.checkDNI = checkDNI;



// Enviar los datos del formulario de REGISTER
function submitRegistration() {
    userData = {
        photo: userPhoto.src,
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



// document.addEventListener('DOMContentLoaded', fetchUsers)





