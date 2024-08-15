// import CONFIG from './config';

document.addEventListener('DOMContentLoaded', init);


let userData = {}
// 1 - CARGA DE PANTALLA LOGIN ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function init() {
    const urlParams = new URLSearchParams(window.location.search);
    const isQR = urlParams.get('qr');
    const dniFromQR = urlParams.get('dni');

    if (isQR === 'true') {
        // console.log('login con QR')
        handleQRLogin(dniFromQR);
    } else {
        initLoginButton();
        showLoginForm();
        // loadSorteoPage()
        // showHome()
    }
}

function handleQRLogin(dni) {
    showLoginForm(true, dni);
}
    // initLoginButton()
    // showLoginForm();
    // showRegisterForm()
    // showHome()
    // checkGeolocation()
    //     .then(() => {
    //         showLoginForm();
    //     })
    //     .catch((error) => {
    //         showErrorMessage("Solo los participantes de la EXPO UNT 2024 pueden acceder al contenido de este sitio.");
    //     });
// }

// async function checkDNIAndParticipate() {
//     const dni = document.getElementById('dni').value;
//     try {
//         const result = await api.checkDNI(dni);
//         if (result.success) {
//             await participarEnSorteo(result.user);
//             localStorage.setItem('user', JSON.stringify(result.user));
//             localStorage.setItem('token', result.token);
//             showHome(result.user);
//             showMessage("Inicio de sesión exitoso y participación en el sorteo registrada");
//         } else {
//             showErrorMessage("DNI no encontrado. Por favor, regístrate.");
//         }
//     } catch (error) {
//         showErrorMessage(error.message);
//     }
// }

// 2 - AL CLICKEAR BOTON GOOGLE CHECKEA SI EXISTE EL USUARIO EN LA DB ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function checkUsersinDb(user) {

    fetch ('https://expount2024.vercel.app/users')
    .then(response => {
        if (!response.ok) {
            throw new Error('Red de respuesta no OK');
        }
        return response.json();
    })
    .then(data => {
        // console.log('Datos recibidos del servidor:', data);

        let matchedUser = false
        for(userindb of data) {
            if(user === userindb.email || user.dni === userindb.dni || user.email === userindb.email ) {
                matchedUser = true
                showCover(userindb)
            }
        }
        setTimeout(() => {
            // console.log(matchedUser)
            if(!matchedUser) {
                // SI LO ENCUENTRA => PANTALLA DE BIENVENIDA
                // SI NO LO ENCUENTRA => PANTALLA PARA COMPLETAR FORMULARIO PRECARGANDO DATOS EXTRAIDOS DE LA CUENTA DE GOOGLE
                console.log('usuario no encontrado')
                showRegisterForm(user)
            }
        }, 500);

    })
    .catch(error => {
        console.error('Error al conectar con el servidor:', error);
    });
}

// async function participarEnSorteo(user) {
//     const today = new Date();
//     const day = today.getDate();

//     console.log(day)
//     try {
//         if (day === 13) {
//             user.sorteo1 = true;
//         } else if (day === 15) {
//             user.sorteo2 = true;
//         }

//         const result = await api.participarEnSorteo(user);

//         localStorage.setItem('user', JSON.stringify(user));
//     } catch (error) {
//         console.error('Error al participar en el sorteo:', error);
//     }
// }

// FUNCIONES EXTRAS
// Checkear DNI ingresado en Login
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
                // console.log('checkDNI devuelve: ', Object.values(response.user)[0])
                showCover(Object.values(response.user)[0]);
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


// Corroborar Inputs de Register

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
        sorteo: 'true', // Cambiado a 'true' por defecto para el registro vía QR
    };

    if (Object.values(userData).every(value => value)) {
        console.log('todos completos')
        document.getElementById('register-submit-button').className = 'button-highlight'
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
    const containers = ['qrCamContainer', 'loginContainer', 'registerContainer', 'coverContainer', 'homeContainer', 'errorContainer', 'sorteoContainer'];
    containers.forEach(id => {
        if (id !== exceptId) {
            document.getElementById(id).style.display = 'none';
        }else{
            document.getElementById(id).style.display = 'flex';

        }
    });
}

// CAREERS
function scrollToItem(id) {
    const container = document.getElementById('scroll-container');
    const element = document.getElementById(id);
    const containerWidth = container.clientWidth;
    const elementWidth = element.clientWidth;
    const scrollPosition = element.offsetLeft - (containerWidth / 2) + (elementWidth / 2);
    container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });

    setTimeout(() => {
        navBarSelection(id)

    }, 400);
}

function navBarSelection(id) {
    let index = 0

    switch(id) {
        case 'home-content':
        index = 0;
        break;

        case 'students-content':
        index = 1;
        break;

        case 'careers-content':
        index = 2;
        break;
    }

    let navButtons = Array.from(document.getElementsByClassName("navButtons"))
    navButtons.forEach(navButton => {
        if (navButtons.indexOf(navButton) === index) {
            navButton.style.fontSize = '17px'
            navButton.style.color = 'var(--expo-blue)'
            navButton.style.borderBottom = '3px solid rgb(2, 175, 239,1)'
        }else {
            navButton.style.fontSize = '16px'
            navButton.style.color = 'rgb(255, 255, 255, .5)'
            navButton.style.borderBottom = '3px solid rgb(2, 175, 239,0)'
        }
    })
}

/////////////////////////////////////////////////////////////////////


function toggleDarkMode() {
    const isDarkMode = document.documentElement.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', isDarkMode);
    updateToggleButton(isDarkMode);
    updateLogoAndStyles(isDarkMode);
}

function updateToggleButton(isDarkMode) {
    const toggle = document.getElementById('toggle');
    const toggleButton = document.getElementById('toggleButton');
    
    if (isDarkMode) {
        toggle.style.backgroundColor = 'rgb(0,0,0)';
        toggleButton.style.left = '1px';
        Array.from(document.getElementsByClassName('expand-icon')).forEach( el => {
            el.src = './assets/ico/down-arrow-white.png'
        })

    } else {
        toggle.style.backgroundColor = 'rgb(2, 175, 239)';
        toggleButton.style.left = '35px';
        Array.from(document.getElementsByClassName('expand-icon')).forEach( el => {
            el.src = './assets/ico/down-arrow-dark.png'
        })
    }
}

function updateLogoAndStyles(isDarkMode) {
    const footer_untlogo = document.getElementById('footer_untlogo');
    const descriptionElements = document.querySelectorAll('.description');
    
    if (isDarkMode) {
        footer_untlogo.src = './assets/img/unt-logo-new-gray.png';
        descriptionElements.forEach(el => el.style.fontWeight = '400');
    } else {
        footer_untlogo.src = './assets/img/unt-logo-new.png';
        descriptionElements.forEach(el => el.style.fontWeight = '400');
    }
}




function checkDate() {

    let days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']
    let horarios = ['09:30', '10:15', '11:00', '11:15', '12:00', '15:00', '09:00', '10:00', '11:00', '15:00' ]
    let agenda = Array.from(document.getElementsByClassName('crono-time'))

    setInterval(() => {
        const date = new Date()

        const dayNumber = date.getDay()
        const day = days[(date.getDay())]
        const dayOfMonth = date.getDate();
        const month = date.getMonth()
        const year = date.getFullYear
    
        const hours = date.getHours()
        const minutes = date.getMinutes()

        if( dayOfMonth == "14" ) {

            document.getElementById('dayone').innerText = "HOY"
            document.querySelector('.cronogram-first').innerText = "Hoy"


            if(hours == 9 && minutes >= 30) {
                agenda[0].innerText = "AHORA!"
            }else{
                agenda[0].innerText = horarios[0]
            }

            if(hours == 10 && minutes >= 15) {
                agenda[1].innerText = "AHORA!"
            }else{
                agenda[1].innerText = horarios[1]
            }

            if(hours == 11) {
                agenda[2].innerText = "AHORA!"
            }else{
                agenda[2].innerText = horarios[2]
            }

            if(hours == 11 && minutes >= 15) {
                agenda[3].innerText = "AHORA!"
            }else{
                agenda[3].innerText = horarios[3]
            }

            if(hours == 12) {
                agenda[4].innerText = "AHORA!"
            }else{
                agenda[4].innerText = horarios[4]
            }
                
            if(hours == 15) {
                agenda[5].innerText = "AHORA!"
            }else{
                agenda[5].innerText = horarios[5]
            }
        }else{
            document.getElementById('dayone').innerText = "Miércoles 14"

            document.querySelector('.cronogram-first').innerText = "Miércoles 14 de Agosto"
        }

        if( dayOfMonth == "15" ) {
            document.getElementById('daytwo').innerText = "HOY"

            document.querySelector('.cronogram-second').innerText = "Hoy"
            if(hours == 9) {
                agenda[6].innerText = "AHORA!"
            }else{
                agenda[6].innerText = horarios[6]
            }

            if(hours == 10) {
                agenda[7].innerText = "AHORA!"
            }else{
                agenda[7].innerText = horarios[7]
            }

            if(hours == 11) {
                agenda[8].innerText = "AHORA!"
            }else{
                agenda[8].innerText = horarios[8]
            }

            if(hours == 15) {
                agenda[9].innerText = "AHORA!"
            }else{
                agenda[9].innerText = horarios[9]
            }
        }else{
            document.getElementById('daytwo').innerText = "Jueves 15"
            document.querySelector('.cronogram-second').innerText = "Jueves 15 de Agosto"
        }

    }, 1000);
}



// SCAN QR
async function participarEnSorteo(user) {
    try {
        const result = await api.participarEnSorteo(user);
        user.sorteo = true;
        localStorage.setItem('user', JSON.stringify(user));
    } catch (error) {
        console.error('Error al participar en el sorteo:', error);
    }
}

async function handleQRLogin(user) {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
        await participarEnSorteo(storedUser);
        showHome(storedUser);
        showMessage("Inscripción al sorteo realizada exitosamente");
    } else if (user) {
        const result = checkUsersinDb(user);
        if (result.success) {
            await participarEnSorteo(result.user);
            localStorage.setItem('user', JSON.stringify(result.user));
            localStorage.setItem('token', result.token);
            showHome(result.user);
            showMessage("Inscripción al sorteo realizada exitosamente");
        } else {
            showRegisterForm({ dni });
        }
    } else {
        showLoginForm(true);
    }
}