
  const scanButton = document.getElementById('scan-btn');
  const closeButton = document.getElementById('close-btn');
  const qrReaderElement = document.getElementById('qr-reader');
  let html5QrCode;


  async function startScanning(user) {
    console.log(user)

      try {
          html5QrCode = new Html5Qrcode("qr-reader");
          const cameras = await Html5Qrcode.getCameras();
          
          if (cameras && cameras.length) {
              const cameraId = cameras[cameras.length - 1].id; // Usamos la última cámara (generalmente la trasera en móviles)
              
              await html5QrCode.start(
                  cameraId,
                  {
                      fps: 10,
                      qrbox: { width: 400, height: 400 }
                  },
                  (decodedText, decodedResult) => onScanSuccess(decodedText, decodedResult, user), // Pasas el user aquí
                  onScanFailure
              );
              
              document.getElementById('close-btn').style.display = "block";
          } else {
              alert("No se detectaron cámaras.");
          }
      } catch (err) {
          console.error("Error al iniciar el escáner:", err);
          alert(`Error al iniciar el escáner: ${err.message}`);
      }
  }

  async function onScanSuccess(decodedText, decodedResult, user) {
    console.log(user)

    if (decodedText === 'https://myqrcode.mobi/9a70c519') {
      alert("Lectura correcta");

      try {
          // Asumimos que tienes el userId almacenado en algún lugar, por ejemplo localStorage
          // const userId = localStorage.getItem('userId');
          const userId = user

          console.log(userId)
          await api.participarEnSorteo(user);
          alert("Has sido registrado para el sorteo exitosamente.");


      } catch (error) {
          console.error("Error al registrar para el sorteo:", error);
          alert("Hubo un error al registrarte para el sorteo. Por favor, intenta nuevamente.");
      }
        // document.getElementById('scanButton').style.backgroundColor = 'rgb(243, 7, 127, 0)'
        document.getElementById('scanButton').innerText = 'Ya estás participando'
        document.getElementById('scanButton').style.color = "var(--contrast-text-color)"
        document.getElementById('scanButton').className = 'scanButtonOff'

      stopScanning();
  } else {
      alert("El código detectado no pertenece a la EXPO UNT 2024");
  }
  }

  function onScanFailure(error) {
      // Manejar errores silenciosamente para evitar spam en la consola
      // console.warn(`Fallo en el escaneo del código QR: ${error}`);
  }

  async function stopScanning() {
      if (html5QrCode && html5QrCode.isScanning) {
          try {
              await html5QrCode.stop();
              html5QrCode.clear();
              qrCamContainer.style.display = 'none'
          } catch (err) {
              console.error("Error al detener el escáner:", err);
          }
      }
      document.getElementById('close-btn').style.display = "none";
    }
