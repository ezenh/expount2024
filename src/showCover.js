function showCover(user) {
    console.log('showing Cover')

    const container = document.getElementById('coverContainer');
    container.style.display = 'flex';
    container.innerHTML = 
    `
    <h2 id="cover-title">Bienvenido ${user.name} a la EXPO UNT 2024</h2>
    `;
    hideOtherContainers('coverContainer');

    setTimeout(() => {
        showHome(user);
    }, 3000);
}