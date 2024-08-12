
let googleClient_id = "710446449605-6kvuci62ub95il6msl49gi0gnujsvbl4.apps.googleusercontent.com"
isLoggedIn = false;

function initLoginButton() {
    const savedUser = localStorage.getItem('user');
    console.log(localStorage)

    if (savedUser) {
        isLoggedIn = true;
        checkUsersinDb(savedUser)
        console.log(savedUser)
    } else {
        loadGoogleScript().then(() => {
            google.accounts.id.initialize({
                client_id: "710446449605-6kvuci62ub95il6msl49gi0gnujsvbl4.apps.googleusercontent.com",
                callback: handleCredentialResponse,
            });

            google.accounts.id.renderButton(
                document.getElementById('google-login'),
                {
                    theme: 'outline',
                    size: 'large',
                    type: 'standard',
                    shape: 'pill',
                    text: 'signin_with',
                    logo_alignment: 'left',
                    width: '300',
                    locale: 'es_ES'
                }
            );

            // google.accounts.id.prompt(); // Optional: display the One Tap prompt
        });
    }
}

function loadGoogleScript() {
    return new Promise((resolve, reject) => {
        const scriptId = 'google-jssdk';
        let script = document.getElementById(scriptId);

        if (script) {
            resolve();
            return;
        }

        script = document.createElement('script');
        script.id = scriptId;
        script.src = `https://accounts.google.com/gsi/client?cache_buster=${new Date().getTime()}`; // Parámetro para evitar caché
        script.async = true;
        script.defer = true;

        script.onload = resolve;
        script.onerror = reject;

        document.body.appendChild(script);
    });
}

function handleCredentialResponse(response) {
    try {
        const payload = JSON.parse(atob(response.credential.split('.')[1]));
        const user = {
            // id: payload.sub,
            name: payload.name,
            given_name: payload.given_name,
            family_name: payload.family_name,
            middle_name: payload.middle_name,
            nickname: payload.nickname,
            profile: payload.profile,
            picture: payload.picture,
            email: payload.email,
            email_verified: payload.email_verified,
            gender: payload.gender,
            birthdate: payload.birthdate,
            zoneinfo: payload.zoneinfo,
            locale: payload.locale,
            phone_number: payload.phone_number,
            phone_number_verified: payload.phone_number_verified,
            address: payload.address,
            updated_at: payload.updated_at
        };
        // console.log('Datos del usuario:', user);
        checkUsersinDb(user)
        // showRegisterForm(user);
    } catch (error) {
        console.error('Error al procesar la respuesta de credenciales:', error);
        document.getElementById('login-status').textContent = 'Error en el inicio de sesión. Por favor, intente de nuevo.';
    }
}


function register(userData) {
    if (userData.password) {
        userData.password = CryptoJS.SHA256(userData.password).toString();
    }
    api.register(userData)
        .then(response => {
            if (response.success) {
                localStorage.setItem('token', response.token);
                localStorage.setItem('user', userData.email)
                console.log(Object.values(response.user)[0])
                showCover(Object.values(response.user)[0]);
            } else {
                console.error('Error en el registro:', response.error);
                alert('Error en el registro: ' + response.error);
            }
        })
        .catch(error => {
            console.error('Error en el registro:', error);

            let errorMessage = error.error

            if(errorMessage.includes("dni")) alert(`Error en el registro, ya existe un usuario con el DNI ${userData.dni}`)
            if(errorMessage.includes("email")) alert(`Error en el registro, ya existe un usuario con el email ${userData.email}`)

            console.log(error.error)

        });
}


function logout() {
    localStorage.removeItem('user');
    isLoggedIn = false;
}