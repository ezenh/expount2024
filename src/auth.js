// let googleAuthInitialized = false;
// let _auth2
// function onGoogleScriptLoad() {
//     gapi.load('auth2', function() {
//         _auth2 = gapi.auth2.init({
//             client_id: '710446449605-j96eqitecmr9op1a2vebja92ci15m0cu.apps.googleusercontent.com',
//         }).then(() => {
//             console.log('Google Auth initialized');
//             googleAuthInitialized = true;
//             // Dispara un evento personalizado para notificar que Google Auth está listo
//             document.dispatchEvent(new Event('googleAuthReady'));
//         });
//     });
// }

// function initGoogleAuth() {
//     if (typeof gapi === 'undefined') {
//         console.log('Google API not loaded yet. Waiting...');
//         document.addEventListener('googleAuthReady', () => {
//             console.log('Google Auth is now ready');
//         });
//     } else if (!googleAuthInitialized) {
//         onGoogleScriptLoad();
//     }
// }

// let googleUser = null;

// function initGoogleAuth() {
//     gapi.load('auth2', function() {
//         gapi.auth2.init({
//             client_id: '710446449605-j96eqitecmr9op1a2vebja92ci15m0cu.apps.googleusercontent.com',
//         }).then(() => {
//             console.log('Google Auth initialized');
//         });
//     });
// }

// function signInWithGoogle() {
//     const auth2 = gapi.auth2.getAuthInstance();
//     auth2.signIn().then(
//         (user) => {
//             googleUser = user;
//             const profile = user.getBasicProfile();
//             const userData = {
//                 name: profile.getGivenName(),
//                 lastName: profile.getFamilyName(),
//                 email: profile.getEmail(),
//                 photo: profile.getImageUrl(),
//             };
//             showRegisterForm(userData);
//         },
//         (error) => {
//             console.error('Error en inicio de sesión con Google:', error);
//         }
//     );
// }

// function login(email, password) {
//     const hashedPassword = CryptoJS.SHA256(password).toString();
//     api.login({ email, password: hashedPassword })
//         .then(response => {
//             if (response.token) {
//                 localStorage.setItem('token', response.token);
//                 showCover(response.user.name);
//             } else {
//                 alert('Credenciales inválidas');
//             }
//         })
//         .catch(error => {
//             console.error('Error de inicio de sesión:', error);
//             alert('Error de inicio de sesión');
//         });
// }

// function register(userData) {
//     if (userData.password) {
//         userData.password = CryptoJS.SHA256(userData.password).toString();
//     }
//     api.register(userData)
//         .then(response => {
//             if (response.token) {
//                 localStorage.setItem('token', response.token);
//                 showCover(response.user.name);
//             } else {
//                 alert('Error en el registro');
//             }
//         })
//         .catch(error => {
//             console.error('Error en el registro:', error);
//             alert('Error en el registro');
//         });
// }

// function logout() {
//     localStorage.removeItem('token');
//     showLoginForm();
// }



let googleAuthInitialized = false;
let googleUser = null;

function onGoogleScriptLoad() {
    gapi.load('auth2', function() {
        gapi.auth2.init({
            client_id: '710446449605-j96eqitecmr9op1a2vebja92ci15m0cu.apps.googleusercontent.com',
        }).then(() => {
            console.log('Google Auth initialized');
            googleAuthInitialized = true;
            document.dispatchEvent(new Event('googleAuthReady'));
        });
    });
}

function initGoogleAuth() {
    if (typeof gapi === 'undefined') {
        console.log('Google API not loaded yet. Waiting...');
        document.addEventListener('googleAuthReady', () => {
            console.log('Google Auth is now ready');
        });
    } else if (!googleAuthInitialized) {
        onGoogleScriptLoad();
    }
}

function signInWithGoogle() {
    if (!googleAuthInitialized) {
        console.error('Google Auth is not initialized yet.');
        return;
    }
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then(
        (user) => {
            googleUser = user;
            const profile = user.getBasicProfile();
            const userData = {
                name: profile.getGivenName(),
                lastName: profile.getFamilyName(),
                email: profile.getEmail(),
                photo: profile.getImageUrl(),
            };
            showRegisterForm(userData);
        },
        (error) => {
            console.error('Error en inicio de sesión con Google:', error);
        }
    );
}

function login(email, password) {
    const hashedPassword = CryptoJS.SHA256(password).toString();
    api.login({ email, password: hashedPassword })
        .then(response => {
            if (response.token) {
                localStorage.setItem('token', response.token);
                showCover(response.user.name);
            } else {
                alert('Credenciales inválidas');
            }
        })
        .catch(error => {
            console.error('Error de inicio de sesión:', error);
            alert('Error de inicio de sesión');
        });
}

function register(userData) {
    if (userData.password) {
        userData.password = CryptoJS.SHA256(userData.password).toString();
    }
    api.register(userData)
        .then(response => {
            if (response.token) {
                localStorage.setItem('token', response.token);
                showCover(response.user.name);
            } else {
                alert('Error en el registro');
            }
        })
        .catch(error => {
            console.error('Error en el registro:', error);
            alert('Error en el registro');
        });
}

function logout() {
    localStorage.removeItem('token');
    showLoginForm();
}

// Inicializa Google Auth cuando se carga el script
initGoogleAuth();