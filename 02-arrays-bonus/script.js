const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers
//const reversedTeachers = teachers.reverse(); //questa operazione modifica l'ordine dell'array originale
const reversedTeachers = teachers.slice().reverse(); //questa operazione NON modifica l'ordine dell'array originale
//console.log(reversedTeachers);

/*Possibile anche il seguente metodo "manuale"
const reversedTeachers=[];
for(let i=0; i< teachers.length; i++)
{
  reversedTeachers[i]=teachers[teachers.length-i-1];
}
console.log(reversedTeachers);
*/

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = teachers.filter((teacher) => teacher.length >= 5);
/*
for(let i=0;i<teachers.length;i++){
  if(teachers[i].length>=5){
    longNames.push(teachers[i]);
  }
}
*/
console.log(longNames);

// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(teachers.indexOf("Ed"),1);
console.log(teachers);