function showQRCam(user) {
    if (document.getElementById('scanButton').innerText === 'PARTICIPAR') {
        console.log('showing QR cam')
        qrCamContainer.innerHTML = `
            <div id="qr-reader"></div>
            <img src="./assets/img/expo2024_logo_o.png">
            
            <div class="qrcamlimit" id="qrcam-top"></div>
            <div class="qrcamlimit" id="qrcam-bottom"></div>
        
            <button id="close-btn" onclick="stopScanning()">Cerrar Lector QR</button>
        `;

        qrCamContainer.style.display = 'flex'
        console.log('Usuario actual:', user)
        startScanning(user)
    }
}

// function startScanning(user) {
//     const qrReader = new Html5Qrcode("qr-reader");
//     const expectedQRCode = "https://me-qr.com/ZSIPPq6q"; // El código QR esperado

//     qrReader.start(
//         { facingMode: "environment" },
//         {
//             fps: 10,
//             qrbox: { width: 250, height: 250 },
//         },
//         (decodedText) => {
//             // Imprimir en consola el contenido del QR leído
//             console.log("Contenido del código QR leído:", decodedText);

//             if (decodedText === expectedQRCode) {
//                 qrReader.stop();
//                 document.getElementById("qr-reader").style.display = "none";
//                 document.getElementById("close-btn").style.display = "none";
                
//                 // Actualizar el estado de sorteo del usuario
//                 actualizarEstadoSorteo(user);
//             } else {
//                 alert("El código detectado no pertenece a la EXPO UNT 2024");
//             }
//         },
//         (errorMessage) => {
//             console.error("Error al leer el código QR:", errorMessage);
//         }
//     );

//     document.getElementById("close-btn").addEventListener("click", () => {
//         qrReader.stop();
//         document.getElementById("qr-reader").style.display = "none";
//         document.getElementById("close-btn").style.display = "none";
//     });
// }

// async function actualizarEstadoSorteo(user) {
//     try {
//         const resultado = await api.participarEnSorteo(user);
//         alert("¡Participación registrada con éxito!");
//         console.log("Resultado de la participación:", resultado);
//         // Aquí puedes actualizar la interfaz de usuario si es necesario
//     } catch (error) {
//         console.error("Error al actualizar el estado de sorteo:", error);
//         alert("Hubo un problema al registrar tu participación. Por favor, intenta de nuevo.");
//     }
// }