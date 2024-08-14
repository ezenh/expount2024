function showCover(user) {
    console.log('showing Cover')
    let article_ext

    if( user.gender === 'male') {
        article_ext = 'o'
    }
    else if( user.gender == 'female') {
        article_ext = 'a'

    }else {
        article_ext = 'e'

    }


    const container = document.getElementById('coverContainer');
    container.style.display = 'flex';
    container.innerHTML = 
    `
    <div id="user-coverphoto">
    </div>
    <h2 id="cover-title">
    Bienvenid${article_ext} ${user.name} a la 
    <span> EXPO UNT </span> 
    <span> 2024 </span>
    </h2>
    `

    // let user_photo = document.createElement('img')
    // user_photo.src = `${user.photo}`
    
    if (!user.photo.includes('placeholder.jpg')) {
        console.log('si hay foto')

        document.getElementById('user-coverphoto').style.backgroundImage = `url("${user.photo}")`
    }else{
        console.log('no hay foto')
        document.getElementById('user-coverphoto').style.backgroundImage  = ``
        document.getElementById('user-coverphoto').style.display = 'none'
    }



    hideOtherContainers('coverContainer');

    container.style.backgroundColor = 'rgba(1, 1, 43, 0.823)'
    setTimeout(() => {
        showHome(user);
    }, 3000);

}