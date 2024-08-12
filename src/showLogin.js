function showLoginForm() {
    console.log('showing Login')

    const container = document.getElementById('loginContainer');
    container.style.display = 'flex';
    // <h2>EXPO UNT 2024</h2>

    container.innerHTML = `
        <div id="login-img-container" class="highlight">
                <img src="../assets/img/expo2024_logo_o.png">
        </div>
        <input type="number" id="dni" placeholder="Ingresa tu DNI" onclick"clean-error()">
        <button onclick="checkDNI()">Ingresar</button>
        <div id="google-login"></div>
        <span id="error-alert"></span>

        <button onclick="showRegisterForm()">Registrarse</button>
        <video id="api-bkg" src="../assets/vid/neon-vector-bkg.mp4" preload="metadata" autoplay="autoplay" muted="on" loop="loop" type="video/mp4" playsinline>
    `;
    hideOtherContainers('loginContainer');

    setTimeout(() => {
        document.getElementById("error-alert").style.display = 'flex'
    }, 500);

    dni.addEventListener('input', () => {
        document.getElementById("error-alert").innerText = ''

    })
}