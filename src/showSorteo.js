function loadSorteoPage() {
    const sorteoContainer = document.getElementById('sorteoContainer');
    sorteoContainer.style.display = 'flex'
    sorteoContainer.innerHTML = `
        <button id="exit-sorteo-page">Minimizar</button>

        <h2>Sorteo</h2>
        <h2>EXPO UNT <span>2024</span></h2>

        <button id="start">Realizar Sorteo</button>

        <div id="resultado"></div>
        <video id="confetti" src="assets/vid/confetti.mp4" autoplay="autoplay" preload="metadata" muted="on"  type="video/mp4" playsinline></video>

        <video id="api-bkg" src="assets/vid/neon-vector-bkg.mp4" preload="metadata" autoplay="autoplay" muted="on" loop="loop" type="video/mp4" playsinline></video>
    `;

    let confettiVideo = document.getElementById('confetti')
    confettiVideo.pause()
    confettiVideo.style.opacity = "0"
    document.getElementById('resultado').display = 'none'


    document.getElementById('start').addEventListener('click', realizarSorteo)
    document.getElementById('exit-sorteo-page').addEventListener('click', () => {
        hideOtherContainers('homeContainer');

    } )


}

function realizarSorteo() {
    console.log('hola')
    let adminContainer = document.getElementById('admincontent')
    let confettiVideo = document.getElementById('confetti')

    fetch('https://expount2024.vercel.app/users')
        .then(response => {
            if (!response.ok) {
                throw new Error('Red de respuesta no OK');
            }
            return response.json();
        })
        .then(data => {
            // Verificar que la lista de usuarios no esté vacía
            if (data.length === 0) {
                throw new Error('No hay usuarios disponibles.');
            }

            // Filtrar usuarios que tienen sorteos activos
            const usuariosConSorteo = data.filter(user => user.sorteo);

            // Verificar que haya usuarios con sorteos
            if (usuariosConSorteo.length === 0) {
                throw new Error('No hay usuarios con sorteos activos.');
            }

            // Generar un número aleatorio entre 0 y la cantidad de usuarios con sorteos - 1
            const indiceAleatorio = Math.floor(Math.random() * usuariosConSorteo.length);

            // Obtener el usuario correspondiente al índice aleatorio
            const usuarioSeleccionado = usuariosConSorteo[indiceAleatorio];

            // Mostrar el usuario seleccionado
            console.log('Usuario seleccionado para el sorteo:', usuarioSeleccionado);


            confettiVideo.autoplay = "autoplay"

            let article 
            let article_ext

            if(usuarioSeleccionado.gender === 'male') {
                article = 'El'
                article_ext = ''
            }
            else if( usuarioSeleccionado.gender == 'female') {
                article = 'La'
                article_ext = 'a'

            }else {
                article = 'Elle'
                article_ext = 'e'

            }

            confettiVideo.style.opacity = "1"
            confettiVideo.play()

            let sorteoButton = document.getElementById('start')
            sorteoButton.innerText = 'FELICIDADES!'

            let winnerContainer = document.getElementById('resultado')
            winnerContainer.innerHTML = 
            `
                <h3>${article} ganador${article_ext} es ${usuarioSeleccionado.name} ${usuarioSeleccionado.lastName}</h3>
                <h4>DNI: ${usuarioSeleccionado.dni}</h4>

            `
            winnerContainer.display = 'flex'
            // Devolver el usuario seleccionado, si es necesario
            return usuarioSeleccionado;


        })
        .catch(error => {
            console.error('Error al conectar con el servidor:', error);
        });
}