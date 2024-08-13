function showLoginForm(isQR = false) {
    console.log('showing Login')

    const container = document.getElementById('loginContainer');
    container.style.display = 'flex';

    container.innerHTML = `
        <div id="login-img-container" class="highlight">
                <img src="./assets/img/expo2024_logo_o.png">
        </div>
        ${isQR ? '<p>Has escaneado un QR. Por favor, inicia sesión para participar en el sorteo.</p>' : ''}
        <input type="number" id="dni" placeholder="Ingresa tu DNI" onclick="clean-error()">
        <button onclick="checkDNI()">Ingresar</button>
        <div id="google-login"></div>
        <span id="error-alert"></span>

        <button onclick="showRegisterForm()">Registrarse</button>
    `;
    hideOtherContainers('loginContainer');

    setTimeout(() => {
        document.getElementById("error-alert").style.display = 'flex'
    }, 500);

    dni.addEventListener('input', () => {
        document.getElementById("error-alert").innerText = ''
    })
}