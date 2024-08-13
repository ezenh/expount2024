function showCover(user) {
    console.log('showing Cover')

    let article 
    let article_ext

    if( user.gender === 'male') {
        article = 'El'
        article_ext = 'o'
    }
    else if( user.gender == 'female') {
        article = 'La'
        article_ext = 'a'

    }else {
        article = 'Elle'
        article_ext = 'e'

    }

    const container = document.getElementById('coverContainer');
    container.style.display = 'flex';
    container.innerHTML = 
    `
    <h2 id="cover-title">Bienvenid${article_ext} ${user.name} a la <span>EXPO UNT</span> <span>2024</span></h2>
    `;
    hideOtherContainers('coverContainer');

    container.style.backgroundColor = 'rgba(1, 1, 43, 0.823)'
    setTimeout(() => {
        showHome(user);
    }, 3000);
}