//richiamare la data attuale

let oggi = new Date();

console.log(oggi);


//mostrarla in html

let stampaOggi = 'Oggi è il ' + oggi

document.getElementById('data-completa').innerHTML = stampaOggi

//mostrare elementi singoli della data

let giorno = oggi.getDay()
document.getElementById('giorno').innerHTML = giorno

let mese = oggi.getMonth()
document.getElementById('mese').innerHTML = mese

let anno = oggi.getFullYear()
document.getElementById('anno').innerHTML = anno

//Creare un sistema per la formattazione in formato europeo
//Mostrare la data formattata in una pagina HTML

let dataEuropea = oggi.toLocaleDateString()
document.getElementById('data-europea').innerHTML = dataEuropea
