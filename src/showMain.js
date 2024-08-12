function showHome(user) {
    // console.log('showing Main')
    // console.log(user)
    const container = document.getElementById('homeContainer');
    container.style.display = 'flex';

    //  a la <b>Expo UNT</b> <img src='../assets/img/2024.png'
    container.innerHTML = 
    `
    <header>
            <div id="header-top">
                <img id="user-photo" alt="user photo">
                <div id="header-text-container">
                    <p id="home-welcome">Bienvenido</p>
                    <p id="home-user">${user.name}</p>
                </div>
                <div id="expo-logo-header">
                    <img alt="expo logo" src="../assets/img/expo2024_logo_o.png">
                </div>
            </div>


            <nav>
                <ul>
                <li class="navButtons" onclick="scrollToItem('home-content')">Principal</li>
                <li class="navButtons" onclick="scrollToItem('students-content')">Estudiantes</li>
                <li class="navButtons" onclick="scrollToItem('careers-content')">Carreras</li>
                </ul>
            </nav>
        </header>



        <main id="scroll-container">
            <section id="home-content">
                <div id="home-content-nav">
                    <a href="#intro">Intro</a>
                    <a href="#sorteo-resultado">Sorteo</a>
                    <a href="#cronogram">Cronograma</a>
                    <div id="toggle" onclick="toggleDarkMode()" style="background-color: rgb(0, 0, 0); left: 1px">
                        <img src="./assets/ico/sun-toggle.png">
                        <div id="toggleButton"></div>
                        <img src="./assets/ico/moon-toggle.png">
                    </div>
                </div>
                <img id="intro" src="./assets/img/expo2024_logo_o.png" alt="">
                <p class='home-text'>Es la muestra más grande e importante de carreras del noroeste argentino. Encontrarás stands informativos de 100 carreras de grado y pregrado, con la participación de docentes y estudiantes de todas las facultades. 

                    Elegí tu universidad, pública, gratuita, inclusiva. Elegí estudiar en la UNT.</p>
                <p class='home-text'>Con tu check in, participas de un sorteo que se realizará a las 17 hs. 
                    El resultado del sorteo aparecerá aquí y, si sos el ganador, lo podrás ver también. 
                    
                    Mucha suerte, ${user.name}!</p>






                <div id="sorteo-resultado">
                    <h2 id="sorteo-title">SORTEO</h2>
                    <span>[Cuenta Regresiva]</span>
                </div>
                <p id="scanButton" class="scanButtonOn">Participar</p>
                <p id="sorteo-description" class="cronogram-li">Para participar del sorteo, deberás escanear el código QR que podrás encontrar en la EXPO. 
                Selecciona el botón "Participar" y, cuando la cámara de tu teléfono se abra, deberás encuadrar el código dentro del campo de visión de la misma. 
                Una vez detectado, automátcamente estarás inscripto. </p>




                <h2 id="cronogram">CRONOGRAMA DE ACTIVIDADES</h2>
                    <h4 class='cronogram-h4'>Anfiteatro Olga Doz de Plaza (Fac. de Psicología)</h4>
                    <h2 class="cronogram-first">Miércoles 14 de Agosto</h2>
                    <ul>
                        <li class="cronogram-li">
                            <span class="crono-time">09:30</span><b>//</b>VIDA UNIVERSITARIA: UN DESAFÍO POSIBLE
                        </li>
                        <li class="cronogram-li">
                            <span class="crono-time">10:15</span><b>//</b>ESCANEO E IMPRESIÓN 3D: 
                            <p class='home-text li-text'>Escaneo 3D para la digitalización de la superficie de una extremidad por una enfermedad neurodegenerativa, con empleo de software de diseño.</p>
                            <b class="speaker">Disertante: Ing. Lucas Acosta</b>
                        </li>
                        <li class="cronogram-li">
                            <span class="crono-time">11:00</span><b>//</b>ACTO DE INAUGURACIÓN OFICIAL CON PRESENCIA DE AUTORIDADES
                        </li>
                        <li class="cronogram-li">
                            <span class="crono-time">11:15</span><b>//</b>CINE
                            <p class='home-text li-text'>Qué es estudiar cine y cómo es producir cine en Tucumán.</p>
                        </li>
                        <li class="cronogram-li">
                            <span class="crono-time">12:00</span><b>//</b>EL PROBLEMA DEL CALENTAMIENTO GLOBAL
                            <p class='home-text li-text'>Un desafío para los Geocientíficos.</p>
                            <b class="speaker">Disertante: Geólogo Roberto Lencina</b>
                        </li>
                        <li class="cronogram-li">
                            <span class="crono-time">15:00</span><b>//</b>VIDA UNIVERSITARIA: UN DESAFÍO POSIBLE
                        </li>
                    </ul>

                    <h2 class="cronogram-second">Jueves 15 de Agosto</h2>
                    <ul>
                        <li class="cronogram-li">
                            <span class="crono-time">09:00</span><b>//</b>VIDA UNIVERSITARIA: UN DESAFÍO POSIBLE
                        </li>
                        <li class="cronogram-li">
                            <span class="crono-time">10:00</span><b>//</b>DESAFÍOS TECNOLÓGICOS Y ÉTICOS DE LA INTELIGENCIA ARTIFICIAL 2.0
                            <b class="speaker">Disertante: MSC Gustavo E. Juárez</b>
                        </li>
                        <li class="cronogram-li">
                            <span class="crono-time">11:00</span><b>//</b>CINE EN LA UNT
                            <p class="home-text li-text">Los cineastas tucumanos te cuentan sobre la salida laboral del Licenciado en Cinematografía.</p>
                        </li>
                        <li class="cronogram-li">
                            <span class="crono-time">15:00</span><b>//</b>VIDA UNIVERSITARIA: UN DESAFÍO POSIBLE
                        </li>

                    </ul>




            </section>
            <section id="students-content">
                <h2>Servicios al Estudiante</h2>

                <article class= "students-article">
                    <div class="title">
                        <img src="./assets/ico/becas.png" alt="">
                        <h3 class= "students-titles">Becas</h3>
                    </div>

                    <p class="description">La Dirección General de Becas de la Secretaría de Asuntos Estudiantiles otorga ayudas económicas para cursar carreras de grado y terciarias de la UNT.</p>
                    <a href="https://www.unt.edu.ar/expount/servicios/becas/">Ver más</a>
                    <div class="box-bkg"></div>
                </article>

                <article class= "students-article">
                    <div class="title">
                        <img src="./assets/ico/accionsocial.png" alt="">
                        <h3 class= "students-titles">Acción Social</h3>
                    </div>

                    <p class="description">Acción Social Para el Estudiante (ASPE) es un servicio de contención primaria en Salud para los estudiantes afiliados.

                        Te acompaña durante la carrera universitaria gracias a un grupo de profesionales médicos, odontólogos, bioquímicos, psicólogos, enfermeros y personal de servicio.</p>
                    <a href="http://www.unt.edu.ar/expount/servicios/accion-social/">Ver más</a>
                    <div class="box-bkg"></div>
                </article>

                <article class= "students-article">
                    <div class="title">
                        <img src="./assets/ico/orientacionjuridica.png" alt="">
                        <h3 class= "students-titles">Orientación Jurídica</h3>
                    </div>

                    <p class="description">Servicio de asesoramiento Jurídico gratuito para estudiantes de la UNT (de grado y escuelas experimentales) por profesionales del derecho en nuestra oficina ubicada en la Secretaria de Asuntos Estudiantiles.</p>
                    <a href="http://www.unt.edu.ar/expount/servicios/orientacion-juridica">Ver más</a>
                    <div class="box-bkg"></div>
                </article>

                <article class= "students-article">
                    <div class="title">
                        <img src="./assets/ico/casadelestudiante.png" alt="">
                        <h3 class= "students-titles">Casa del Estudiante</h3>
                    </div>

                    <p class="description">Apuntamos a la Orientación y Reorientación Vocacional de nuestros y futuros estudiantes como base primordial, brindado también cursos y contenidos que puedan servirles antes las necesidades que hoy en día se enfrentan.
                        Actualmente se dictan: Curso de Orientación Vocacional y Curso de Inteligencia emocional</p>
                    <a href="http://www.unt.edu.ar/expount/servicios/casa-del-estudiante/">Ver más</a>
                    <div class="box-bkg"></div>
                </article>

                <article class= "students-article">
                    <div class="title">
                        <img src="./assets/ico/deportes.png" alt="">
                        <h3 class= "students-titles">Deportes</h3>
                    </div>

                    <p class="description">Formación de planteles para la representación de nuestra Universidad. Campeonatos locales y sociabilización a través del deporte.</p>
                    <a href="http://www.unt.edu.ar/expount/servicios/deportes/">Ver más</a>
                    <div class="box-bkg"></div>
                </article>

            </section>






            <section id="careers-content">
            <input type="text" id="search-input" placeholder="Buscar...">
            <p id="search-description">Podés buscar en todas las facultades y escuelas de la UNT. 
Ya sea por nombre de carrera, título e incluso duración (sólo indicar cant. de años), vas a encontrar toda la información que necesitás para avanzar en tus estudios.
            La UNT tiene la mayor cantidad y variedad de oferta académica del NOA. Además de ser pública y gratuita, en nuestra casa de estudios siempre contarás tu camino para alcanzar tus objetivos profesionales. 

            <div id="institution-container"></div>
            </section>




        </main>

        <footer>
            <img id="footer_untlogo" src="../assets/img/unt-logo-new-gray.png">
            <div class="footer-text">
                <b>Secretaría de Comunicación Institucional</b>
                <p>Rectorado UNT</p>
            </div>
            <div class= "footer-text">
                <b>Secretaría Académica</b>
                <p>Rectorado UNT</p>
            </div>
        </footer>
    `


    checkDate()

    if(user && user.photo != 'https://127.0.0.1:8080/placeholder.jpg') {
        document.getElementById('user-photo').src = `${user.photo}`
        document.getElementById('user-photo').style.display = 'flex'
    }else{
        console.log('no hay foto')
        document.getElementById('user-photo').src = ``
        document.getElementById('user-photo').style.display = 'none'
        document.getElementById('header-text-container').style.marginLeft = '0'

    }




    if(user && user.sorteo === false) {
        document.getElementById('scanButton').addEventListener('click', () => showQRCam(user))
        document.getElementById('scanButton').style.color = "white !important"

    }else{
        // document.getElementById('scanButton').style.backgroundColor = 'rgb(243, 7, 127, 0)'
        document.getElementById('scanButton').style.color = "var(--contrast-text-color)"
        document.getElementById('scanButton').innerText = 'Ya estás participando'
        document.getElementById('scanButton').className = 'scanButtonOff'
        // let scanButtonBefore = window.getComputedStyle(scanButton, '::before');
    
        // let beforeDisplay = scanButtonBefore.getPropertyValue('display')
        
    }

    const scroll_container = document.getElementById('scroll-container');
    let navButtons = Array.from(document.getElementsByClassName("navButtons"))

    scroll_container.addEventListener('scroll', () => {
        Array.from(scroll_container.children).forEach(section => {
            if(section.getBoundingClientRect().left <= 0 && section.getBoundingClientRect().right >= scroll_container.offsetWidth * .9) {
                navBarSelection(section.id)
            }
        })

    })

// Aplicar el modo guardado al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode === 'true') {
        document.documentElement.classList.add('dark-mode');
        updateToggleButton(true);
        updateLogoAndStyles(true);
    }
});
    toggleDarkMode()



// Función para normalizar texto (eliminar acentos)
function normalizeText(text) {
    return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// CRITERIO DE BUSQUEDA COMPLETO ///////////////////////////////////////////////////////////
function renderInstitutions(filter = "") {
    const institutionContainer = document.getElementById("institution-container");
    institutionContainer.innerHTML = ""; // Limpiar contenido existente

    const normalizedFilter = normalizeText(filter);

    const faculties = institutions2.filter(institution => institution.type === "Facultades");
    const schools = institutions2.filter(institution => institution.type === "Escuelas");

    function renderGroup(group, groupName) {
        if (group.length > 0) {
            const groupHeader = document.createElement("h2");
            groupHeader.textContent = groupName;
            institutionContainer.appendChild(groupHeader);

            group.forEach(institution => {
                const institutionNameMatches = normalizeText(institution.name).includes(normalizedFilter);
                const careerMatches = institution.careers.some(career => 
                    normalizeText(career.name).includes(normalizedFilter) ||
                    normalizeText(career.duration).includes(normalizedFilter)
                );

                if (institutionNameMatches || careerMatches || filter === "") {
                    const institutionArticle = document.createElement("article");
                    institutionArticle.className = 'institution-article'
                    institutionArticle.style.backgroundImage = `url('../assets/img/${institution.icon}')`

                    institutionArticle.innerHTML = `
                        <div class="institution-title">
                            <img src="./assets/img/${institution.logo}" alt="" class="institution-logo">
                            <h3 class="institution-name">${institution.name}</h3>
                            <div class="expand-icon-button" onclick="institutionResize()">
                                <img class="expand-icon" src="./assets/ico/down-arrow-white.png" alt="">
                            </div>
                        </div>
                        <div class="institution-video">
                            ${institution.video}
                        </div>
                        <div class="institution-bkg"></div>
                    `;

                    const careersContainer = document.createElement("div");
                    careersContainer.className = "institution-careers";

                    const careersTitle = document.createElement("h3");
                    careersTitle.className = "institution-careers-title";
                    careersTitle.textContent = "Carreras:";
                    careersContainer.appendChild(careersTitle);
                    // const background = document.createElement('div')
                    // background.className = 'institution-bkg'
                    // background.appendChild(institutionArticle)

                    institution.careers.forEach(career => {
                        const careerElement = document.createElement("div");
                        const careerNameMatches = normalizeText(career.name).includes(normalizedFilter);
                        const careerDurationMatches = normalizeText(career.duration).includes(normalizedFilter);

                        if(document.getElementById("search-input").value) {
                            careerElement.innerHTML = `
                            <h4 class="career ${careerNameMatches ? 'highlight' : ''}">${career.name}</h4>
                            <p class="career-duration ${careerDurationMatches ? 'highlight' : ''}">Duración: ${career.duration}</p>
                        `;
                        }else{
                            careerElement.innerHTML = `
                            <h4>${career.name}</h4>
                            <p>Duración: ${career.duration}</p>
                        `;
                        }

                        careersContainer.appendChild(careerElement);
                    });

                    institutionArticle.appendChild(careersContainer);

                    const moreButton = document.createElement("a");
                    moreButton.className = "institution-more-button";
                    moreButton.href = institution.link;
                    moreButton.target = "_blank";
                    moreButton.textContent = "Ver más";
                    institutionArticle.appendChild(moreButton);

                    institutionContainer.appendChild(institutionArticle);
                }
            });
        }
    }

    renderGroup(faculties, "Facultades");
    renderGroup(schools, "Escuelas");
}

// Listener del input para activar la búsqueda/filtrado
document.getElementById("search-input").addEventListener("input", function () {
    const filter = this.value;
    renderInstitutions(filter);
});

// Render inicial sin ningún filtro
renderInstitutions();


    hideOtherContainers('homeContainer');
}



function institutionResize() {
    let article = event.target.parentNode.parentNode;

    if (target.event.className == 'expand-icon') {
        article = event.target.parentNode.parentNode.parentNode
    }else {
        article = event.target.parentNode.parentNode
    }
    let video = article.querySelector('.institution-video');
    let careers = article.querySelector('.institution-careers');
    let title = article.querySelector('.institution-careers-title')
    let link = article.querySelector('.institution-more-button')
    let bkgLayer = article.querySelector('.institution-bkg')

    let expandIcon = article.querySelector('.expand-icon')

    // Verificar que content y careers existan antes de acceder a sus propiedades
    let videoHeight = video ? video.scrollHeight : 0;
    let careersHeight = careers ? careers.scrollHeight : 0;
    let titleHeight = title ? title.scrollHeight : 0;
    let linkHeight = link ? link.scrollHeight : 0;

    let totalHeight = videoHeight + careersHeight + titleHeight + linkHeight + 90; // +60 para el tamaño del encabezado y padding/margen

    // Si el artículo está expandido, colapsarlo; si está colapsado, expandirlo.
    if (article.style.height == `${totalHeight}px`) {
        article.style.height = '60px'; // Colapsar al tamaño inicial
        expandIcon.style.transform = 'rotate(0deg)'
        bkgLayer.style.opacity = '1'
    } else {
        article.style.height = `${totalHeight}px`; // Expandir al tamaño necesario
        expandIcon.style.transform = 'rotate(180deg)'
        bkgLayer.style.opacity = '.85'


    }
}