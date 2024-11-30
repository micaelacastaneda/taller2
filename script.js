let currentState = 0; // Estado inicial
const totalStates = 63; // Total de estados

// Función para mostrar el estado actual
function showState(state) {
    const estados = document.querySelectorAll('.estado');
    estados.forEach((estado, index) => {
        estado.style.display = index === state ? 'block' : 'none';
    });
}

// Mostrar el estado inicial
showState(currentState);

// Función para avanzar automáticamente los estados del 1 al 4
function avanzarEstadosAutomáticamente() {
    if (currentState >= 1 && currentState < 4) {
        currentState++;
        showState(currentState);
        setTimeout(avanzarEstadosAutomáticamente, 2000);
    }
}

// Evento de teclado
document.addEventListener('keydown', (event) => {
    if (event.key === 'd') {
        if (currentState === 0) {
            currentState = 1;
            showState(currentState);
            avanzarEstadosAutomáticamente(); 
        }else if (currentState === 5) {
            currentState = 6;
        }  else if (currentState === 4) {
            currentState = 6;
        } else if (currentState === 6) {
            currentState = 7;
        }  else if (currentState === 7) {
            currentState = 11;
        }
        
        else if (currentState === 11) {
            currentState = 12;
        }else if (currentState === 13) {
            currentState = 14;

        } else if (currentState === 14) {
                currentState = 13;

        }else if (currentState === 12) {
            currentState = 11;
        }else if (currentState === 14) {
            currentState = 13;
        }else if (currentState === 17) {
            currentState = 16;

        }else if (currentState === 19) {
            currentState = 15;

        }else if (currentState === 13) {
                currentState = 14;
        } else if (currentState === 15) {
            currentState = 16; 
        }else if (currentState === 20) {
            currentState = 21; 
        }

        else if (currentState === 8) {
            currentState = 22; 
        } else if (currentState === 22) {
                currentState = 61; 
        
        }else if (currentState === 25) {
            currentState = 21; 
        }else if (currentState === 9) {
            currentState = 35; 
        }else if (currentState === 37) {
            currentState = 38; 
        }else if (currentState === 26) {
            currentState = 27; 
        }else if (currentState === 30) {
            currentState = 31; 
        }else if (currentState === 32) {
            currentState = 33; 
        }else if (currentState === 27) {
            currentState = 61;
        }else if (currentState === 28) {
            currentState = 29; 
        }else if (currentState === 24) {
            currentState = 26;
        }else if (currentState === 29) {
            currentState = 27; 
        }else if (currentState === 33) {
            currentState = 27; 
        }else if (currentState === 34) {
            currentState = 36; 
        }else if (currentState === 35) {
            currentState = 37; 
        }else if (currentState === 37) {
            currentState = 38; 
        }else if (currentState === 43) {
            currentState = 45; 
        }else if (currentState === 44) {
            currentState = 37; 
        }else if (currentState === 45) {
            currentState = 38; 

            //nucleo 4
        }else if (currentState === 10) {
            currentState = 48; 
        }else if (currentState === 48) {
            currentState = 49; 
        }else if (currentState === 50) {
            currentState = 51; 
        }else if (currentState === 51) {
            currentState = 50; 
        }else if (currentState === 46) {
            currentState = 47; 
        }

        else if (currentState === 52) {
            currentState = 53; 
        }else if (currentState === 53) {
            currentState = 52; 
        }else if (currentState === 54) {
            currentState = 55; 
        }else if (currentState === 60) {
            currentState = 62; 
        }else if (currentState === 49) {
            currentState = 48; 
        }else if (currentState === 59) {
            currentState = 54; 
        }

        showState(currentState);
    }

    if (event.key === 'k'){
        if (currentState === 21) {
            currentState = 7;
        } else if (currentState === 47) {
            currentState = 7;
        } else if (currentState === 62) {
            currentState = 7;
        }else if (currentState === 36) {
            currentState = 7;
        }else if (currentState === 10) {
            currentState = 7;
        } else if (currentState === 11) {
            currentState = 7;
        } else if (currentState === 12) {
            currentState = 7;
        }  else if (currentState === 13) {
            currentState = 7;
        }else if (currentState === 14) {
            currentState = 7;
        }else if (currentState === 15) {
            currentState = 7;
        } else if (currentState === 16) {
                currentState = 7;
        }else if (currentState === 17) {
            currentState = 7;
        }else if (currentState === 18) {
            currentState = 7;
        }else if (currentState === 19) {
            currentState = 7;
        }else if (currentState === 20) {
            currentState = 7;
        }else if (currentState === 21) {
            currentState = 7;
        }else if (currentState === 22) {
                currentState = 7;
        } else if (currentState === 23) {
            currentState = 7; 
        }else if (currentState === 24) {
            currentState = 7; 
        } else if (currentState === 25) {
         currentState = 7; 
        } else if (currentState === 26) {
        currentState = 7; 
        }else if (currentState === 27) {
            currentState = 7; 
        }else if (currentState === 28) {
            currentState = 7; 
        }else if (currentState === 29) {
            currentState = 7; 
        }else if (currentState === 30) {
            currentState = 7; 
        }else if (currentState === 31) {
            currentState = 7; 
        }else if (currentState === 32) {
            currentState = 7; 
        }else if (currentState === 33) {
            currentState = 7;
        }else if (currentState === 34) {
            currentState = 7;
        }else if (currentState === 35) {
            currentState = 7; 
        }else if (currentState === 36) {
            currentState = 7;
        }else if (currentState === 37) {
            currentState = 7; 
        }else if (currentState === 38) {
            currentState = 7; 
        }else if (currentState === 39) {
            currentState = 7; 
        }else if (currentState === 40) {
            currentState = 7; 
        }else if (currentState === 41) {
            currentState = 7; 
        }else if (currentState === 42) {
            currentState = 7; 
        }else if (currentState === 43) {
            currentState = 7; 
        }else if (currentState === 44) {
            currentState = 7; 
        }else if (currentState === 45) {
            currentState = 7; 
        }else if (currentState === 46) {
            currentState = 7; 
        } else if (currentState === 47) {
         currentState = 7; 
        } else if (currentState === 48) {
        currentState = 7; 
        }else if (currentState === 49) {
            currentState = 7; 
        }else if (currentState === 50) {
            currentState = 7; 
        }else if (currentState === 51) {
            currentState = 7; 
        }else if (currentState === 52) {
            currentState = 7; 
        }else if (currentState === 53) {
            currentState = 7; 
        }else if (currentState === 54) {
            currentState = 7; 
        }else if (currentState === 55) {
            currentState = 7;
        }else if (currentState === 56) {
            currentState = 7;
        }else if (currentState === 57) {
            currentState = 7; 
        }else if (currentState === 58) {
            currentState = 7;
        }else if (currentState === 59) {
            currentState = 7; 
        }else if (currentState === 60) {
            currentState = 7; 
        }else if (currentState === 61) {
            currentState = 7; 
        }else if (currentState === 62) {
            currentState = 7; 
        }
        showState(currentState);
    }

    if (event.key === 't'){
        if (currentState === 21) {
            currentState = 0;
        } else if (currentState === 47) {
            currentState = 0;
        } else if (currentState === 60) {
            currentState = 0;
        }else if (currentState === 36) {
            currentState = 0;
        }



        showState(currentState);
    }

    // Flecha izquierda
    if (event.key === 'ArrowLeft') {

        //elegir nucleos 
        if (currentState === 10) {
            currentState = 9;
        } else if (currentState === 9) {
            currentState = 8;
        } else if (currentState === 8) {
            currentState = 7;
        }  else if (currentState === 5) {
            currentState = 4;
        }  else if (currentState === 13) {
            currentState = 12;
        }  else if (currentState === 15) {
            currentState = 14;
        }else if (currentState === 17) {
            currentState = 16;
        }else if (currentState === 16) {
            currentState = 17;
        }else if (currentState === 25) {
            currentState = 24;
        } else if (currentState === 24) {
            currentState = 23;
        }else if (currentState === 26) {
            currentState = 25; 
        }else if (currentState === 28) {
            currentState = 27; 
        } else if (currentState === 23) {
            currentState = 61;
        }else if (currentState === 30) {
            currentState = 31; 
        }else if (currentState === 24) {
            currentState = 26;
        }else if (currentState === 25) {
            currentState = 26; 
        }else if (currentState === 30) {
            currentState = 28; 
        }else if (currentState === 32) {
            currentState = 34; 
        }else if (currentState === 33) {
            currentState = 32; 
        }else if (currentState === 32) {
            currentState = 31; 
        }else if (currentState === 34) {
            currentState = 33; 
        }else if (currentState === 20) {
            currentState = 19; 
        }else if (currentState === 19) {
            currentState = 18; 
        }else if (currentState === 18) {
            currentState = 17; 
        }else if (currentState === 43) {
            currentState = 44; 
        }else if (currentState === 44) {
            currentState = 42; 
        }else if (currentState === 44) {
            currentState = 42; 
        }else if (currentState === 41) {
            currentState = 40; 
        }else if (currentState === 42) {
            currentState = 41; 
        }else if (currentState === 40) {
            currentState = 39; 
        }else if (currentState === 44) {
            currentState = 43; 
        }else if (currentState === 45) {
            currentState = 44; 
        }else if (currentState === 47) {
            currentState = 46; 
        }else if (currentState === 39) {
            currentState = 38; 
        } else if (currentState === 50) {
            currentState = 49; 
        }else if (currentState === 49) {
            currentState = 50; 
        }else if (currentState === 51) {
            currentState = 50; 
        }else if (currentState === 52) {
            currentState = 51; 
        }else if (currentState === 59) {
            currentState = 58; 
        }else if (currentState === 58) {
            currentState = 57; 
        }else if (currentState === 57) {
            currentState = 56; 
        }else if (currentState === 60) {
            currentState = 59; 
        }else if (currentState === 46) {
            currentState = 45; 
        }else if (currentState === 56) {
            currentState = 55; 
        }


        showState(currentState);
    }



    // Flecha derecha
    if (event.key === 'ArrowRight') {
        if (currentState === 7) {
            currentState = 8;
        } else if (currentState === 8) {
            currentState = 9;
        }  else if (currentState === 9) {
            currentState = 10;
        }  else if (currentState === 4) {
            currentState = 5;
        }
        
        else if (currentState === 12) {
            currentState = 13;
        }else if (currentState === 14) {
         currentState = 15;
        }else if (currentState === 19) {
            currentState = 20;
        }else if (currentState === 17) {
            currentState = 18; 
        } else if (currentState === 18) {
            currentState = 19;
        } else if (currentState === 20) {
            currentState = 21;
        }else if (currentState === 61) {
            currentState = 23;
        }else if (currentState === 23) {
            currentState = 24;
        }else if (currentState === 24) {
            currentState = 26;
        }else if (currentState === 25) {
            currentState = 26; 
        }else if (currentState === 29) {
            currentState = 30; 
        }else if (currentState === 27) {
            currentState = 28; 
        }else if (currentState === 31) {
            currentState = 32; 
        }else if (currentState === 32) {
            currentState = 33; 
        }else if (currentState === 33) {
            currentState = 34; 
        }
        //nucleo 3
        else if (currentState === 38) {
            currentState = 39; 
        }else if (currentState === 39) {
            currentState = 40; 
        }else if (currentState === 40) {
            currentState = 41; 
        }else if (currentState === 41) {
            currentState = 42; 
        }else if (currentState === 45) {
            currentState = 46; 
        }else if (currentState === 44) {
            currentState = 43; 
        }

        //nucleo 4
        else if (currentState === 49) {
            currentState = 50; 
        }else if (currentState === 51) {
            currentState = 52; 
        }else if (currentState === 53) {
            currentState = 54; 
        }else if (currentState === 55) {
            currentState = 56; 
        }else if (currentState === 56) {
            currentState = 57; 
        }else if (currentState === 57) {
            currentState = 58; 
        }else if (currentState === 58) {
            currentState = 59; 
        }else if (currentState === 59) {
            currentState = 60; 
        }else if (currentState === 42) {
            currentState = 43; 
        }
        showState(currentState);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const pantallas = document.querySelectorAll('.estado');
    let estados = 0;

    if (pantallas.length === 0) {
        return;
    }
    document.body.addEventListener('click', function () {

        pantallas[estados].classList.remove('visible');

   
        estados = (estados + 1) % pantallas.length;


        pantallas[estados].classList.add('visible');

        // activas o desactivar la camara
        if (estados === 20) {
            activarWebcam();
        } else {
            detenerWebcam();
        }
    });

    function activarWebcam() {
        const videoElement = document.getElementById('video');
        if (!videoElement) {
            console.warn("No se encontró el elemento de video.");
            return;
        }

        // activa la cámara
        if (!videoElement.srcObject) {
            navigator.mediaDevices.getUserMedia({ video: true })
                .then((stream) => {
                    videoElement.srcObject = stream;
                })
                .catch((error) => {
                    console.error("Error al acceder a la webcam:", error);
                });
        }
    }

    function detenerWebcam() {
        const videoElement = document.getElementById('video');
        if (!videoElement) {
            console.warn("No se encontró el elemento de video.");
            return;
        }

        // Detener la camara
        if (videoElement.srcObject) {
            const stream = videoElement.srcObject;
            const tracks = stream.getTracks();
            tracks.forEach(track => track.stop());
            videoElement.srcObject = null;
        }
    }
});