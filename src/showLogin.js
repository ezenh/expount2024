function showLoginForm(isQR = false, dniFromQR = '') {
    console.log('showing Login')

    const container = document.getElementById('loginContainer');
    container.style.display = 'flex';

    container.innerHTML = `
        <div id="login-img-container" class="highlight">
            <img src="./assets/img/expo2024_logo_o.png">
        </div>
        ${isQR ? '<p>Has escaneado un QR para participar en el sorteo. Por favor, inicia sesión o regístrate.</p>' : ''}
        <input type="number" id="dni" placeholder="Ingresa tu DNI" value="${dniFromQR}" ${isQR ? 'readonly' : ''}>
        <button id="login-button">Ingresar</button>
        <div id="google-login"></div>
        <span id="error-alert"></span>

        <button onclick="showRegisterForm(${isQR}, '${dniFromQR}')">Registrarse</button>
    `;
    hideOtherContainers('loginContainer');

    document.getElementById('login-button').addEventListener('click', () => {
        checkDNI(document.getElementById('dni').value)
        console.log(document.getElementById('dni').value)
    })
    setTimeout(() => {
        document.getElementById("error-alert").style.display = 'flex'
    }, 500);

    dni.addEventListener('input', () => {
        document.getElementById("error-alert").innerText = ''
    })
}