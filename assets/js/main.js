//struzioni:
//Creare un oggetto che descriva uno studente, con le seguenti proprietà:
/* nome,
cognome
età. */
var student = {
    'name' : 'Andrea',
    lastName : 'Sevilla',
    age : 2021 - 1994,
}
//Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in student) {
    console.log(key, student[key]);
}
// Creare un array di oggetti di studenti.
var otherStudents = [
    {
        'name' : 'Ricardo',
        lastName : 'Jara',
        age : 2021 - 1996
    },
    {
        'name' : 'Eveling',
        lastName : 'Castillon',
        age : 2021 - 1999
    },
    {
        'name' : 'Alessandra',
        lastName : 'Gomez',
        age : 2021 - 1994
    }
]
//Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

for(var i = 0; i < otherStudents.length; i++) {
    var studentEl = otherStudents[i];
    console.log(studentEl.name, studentEl.lastName);
    
}
//Dare la possibilità all’utente, attraverso 3 prompt(),
//di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età

var nomeUtente = prompt('Inserisci nome');
var cognomeUtente = prompt('Inserisci cognome');
var etaUtente = Number(prompt('Inserisci età'));

var listaUtente = {
    'name' : nomeUtente,
    lastName : cognomeUtente,
    age : etaUtente
};

otherStudents.push(listaUtente);
console.log(otherStudents);