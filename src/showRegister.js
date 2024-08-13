function showRegisterForm(userData = {}) {
    console.log('showing Register')

    const container = document.getElementById('registerContainer');
    container.style.display = 'flex';
    container.innerHTML = `
        <div>
            <h2 id="register-title">Registro</h2>
            <h2> EXPO UNT <b>2024</b></h2>
        </div>
        ${userData.dni ? '<p>Has escaneado un QR. Por favor, completa tu registro para participar en el sorteo.</p>' : ''}
        <h4>Completá tus datos para ver todo el contenido y participar del sorteo.</h4>
        <div id="photo-container">
            <img id="userPhoto" src="${userData.picture|| 'placeholder.jpg'}">
        </div>
        <button id="load-photo-button">Tomar foto</button>
        <input type="text" id="name" placeholder="Nombre" value="${userData.given_name || ''}">
        <input type="text" id="lastName" placeholder="Apellido" value="${userData.family_name || ''}">

        <div class="inputs-div">
            <input type="number" id="nDni" placeholder="DNI" value="${userData.dni || ''}">
            <select class="select" id="gender" }>
                <option value="${userData.gender || 'male'}">Seleccioná tu género</option>
                <option value="male">Masculino</option>
                <option value="female">Femenino</option>
                <option value="other">Otro</option>
            </select>
        </div>

        <label for="birthDate">Fecha de Nacimiento</label>
        <input type="date" id="birthDate" name="birthDate" placeholder="Fecha de nacimiento" value="${userData.birthdate || ''}">
        <input type="email" id="email" placeholder="Email" value="${userData.email || ''}">
        <select class="select" id="school">
            <option class="first-option" value="">Seleccioná tu escuela</option>
            <option value="Pública">Pública</option>
            <option value="Privada">Privada</option>
        </select>

        <div id="register-buttons-container">
            <button id="backtologin" onclick="backtologin()"><img src="assets/ico/down-arrow-white.png">Volver</button>

            <button id="register-submit-button" onclick="submitRegistration()">Enviar</button>

        </div>
    `;



    if(userData.picture) {
        console.log('hay foto')
        document.getElementById('photo-container').display = 'flex'
        document.getElementById('userPhoto').style.display = 'flex'
        document.getElementById('load-photo-button').style.display = 'flex'
    }else{
        console.log('no hay foto')
        console.log(document)
        document.getElementById('photo-container').style.display = 'none'
        document.getElementById('userPhoto').style.display = 'none'
        document.getElementById('load-photo-button').style.display = 'none'
        // document.getElementById('register-submit-button').style.backgroundColor = 'var(--expo-blue)'

    }

    // document.getElementById('load-photo-button').addEventListener('click', openCamera)
    hideOtherContainers('registerContainer');
}

function backtologin() {
    hideOtherContainers('loginContainer')
}
