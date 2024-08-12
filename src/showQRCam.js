function showQRCam(user){

    if(document.getElementById('scanButton').innerText === 'PARTICIPAR') {
        console.log('showing QR cam')
        qrCamContainer.innerHTML = 
        `
        <div id="qr-reader"></div>
        <img src="../assets/img/expo2024_logo.png">
        
        <div class="qrcamlimit" id="qrcam-top"></div>
        <div class="qrcamlimit" id="qrcam-bottom"></div>
    
        <button id="close-btn" onclick="stopScanning()">Cerrar Lector QR</button>
        `
        // closeButton.addEventListener('click', stopScanning);
    
        qrCamContainer.style.display = 'flex'
        console.log(user)
        startScanning(user)
    }
    // hideOtherContainers(qrCamContainer)
    }


