// Creo il tabellone
const tabellone = document.getElementById('tabellone');
for (let i = 1; i <= 76; i++) {
  const cella = document.createElement('div');
  cella.textContent = i;
  cella.id = 'cella-' + i;
  cella.className = 'cella';
  tabellone.appendChild(cella);
}

// Array per memorizzare i numeri estratti
const estraiNumero = [];

function extractNumber() {
 let numeroRandom;
  do {
    numeroRandom = Math.floor(Math.random() * 76) + 1;
  } while (estraiNumero.includes(numeroRandom)); // Estrai un nuovo numero finché non ne trovi uno non estratto

  estraiNumero.push(numeroRandom); // Aggiungi il numero all'array dei numeri estratti

  // Evidenzia la cella corrispondente sul tabellone
  let cella = document.getElementById('cella-' + numeroRandom);
  cella.classList.add('estratti');
}