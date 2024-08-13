

// let premios = [];

// function agregarPremio() {
//     const premio = document.getElementById('premio').value;
//     if (premio) {
//         premios.push(premio);
//         actualizarListaPremios();
//         document.getElementById('premio').value = '';
//     }
// }

// function actualizarListaPremios() {
//     const lista = document.getElementById('listaPremios');
//     lista.innerHTML = premios.map(premio => `<li>${premio}</li>`).join('');
// }

// function realizarSorteo() {
//     const participantes = ['Participante 1', 'Participante 2', 'Participante 3', 'Participante 4', 'Participante 5'];
//     const resultados = premios.map(premio => {
//         const ganador = participantes[Math.floor(Math.random() * participantes.length)];
//         return `${premio}: ${ganador}`;
//     });

//     const resultadosDiv = document.getElementById('resultados');
//     resultadosDiv.innerHTML = '<h3>Resultados del Sorteo:</h3>' + 
//         resultados.map(resultado => `<p>${resultado}</p>`).join('');
// }


