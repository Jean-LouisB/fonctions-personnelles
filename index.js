import {calendrier} from './calendrier.js';
const Calendrier = calendrier;
/**
 * 
 * @param {Number} dayNumber 
 * @returns String
 * @description Retourne le nom du jour de la semaine en français (Lundi, mardi...)
 * Attend un nombre de 0 à 6. => /!\ Dimanche = 0, ... Samedi = 6
 */
function dayTostringWithLetter(dayNumber) {
    let dayL = Calendrier[0].jours.filter((j) => j.id === dayNumber)
    return dayL[0].jour
}

/**
 * 
 * @param {Number} monthNumber 
 * @returns String
 * @description Retourne le nom du mois en français (janvier, février ...)
 * Attend un nombre de 0 à 11 => /!\ Janvier = 0 ... décembre = 11
 * 
 */
function monthToStringWithLetter(monthNumber) {
    let moisL = Calendrier[1].mois.filter((m) => m.id === monthNumber)
    return moisL[0].mois
}

/**
 * 
 * @param {Date} date 
 * @returns [ date, String ]
 * @description Retourne un tableau avec dateToString : donne date et l'heure sous la forme "samedi 17 avril 2023 à 6h50" et normalDate : retourne la date telle qu'elle a été passée en paramètre.
 */
export default function formatDate(date = new Date()) {
    try {
        const now = new Date(date);
        const day = now.getDate(); //jour du mois
        const dayL = now.getDay(); // jour de la semaine
        const dayLetter = dayTostringWithLetter(dayL);
        const month = now.getMonth();
        const monthLetter = monthToStringWithLetter(month);
        const year = now.getFullYear();
        const hour = now.getHours();
        const minute = (now.getMinutes() < 10 ? '0' + now.getMinutes() : now.getMinutes());
    
        return { normalDate: now, dateToString: `${dayLetter} ${day} ${monthLetter} ${year} à ${hour}h${minute}`, dateToStringWithoutHour:`${dayLetter} ${day} ${monthLetter} ${year}`, hourToString: `${hour}h${minute}`, dayLetter:dayLetter,monthLetter:monthLetter}
    } catch (error) {

        return "La date entrée en paramètre est invalide.\n => Respectez le format anglo-saxon : \'mm-dd-yyy\' ou avec l'heure : \'mm-dd-yyy hh:mm\'\n mm<= 12; dd <= 31, 30, 29,28 selon les mois; hh <= 23 et mm <=59"
    }

}


function isPrime(nombre) {
    if (typeof nombre !== 'number') {
        let error = "Erreur : Le paramètre entré à isPrime n'est pas un nombre"
        return error
    }
    for (let i = 2; i < nombre; i++) {
        if (nombre % i === 0) {
            return false;
        }
    }
    return true
}

function allOfPrime(max){
    let tabOFPrimeNumber = [];
    for(let i = 0 ; i<=max; i++){
        if(isPrime(i) === true){
            tabOFPrimeNumber.push(i);
        }
    }
    return tabOFPrimeNumber
}

export {formatDate, dayTostringWithLetter, monthToStringWithLetter, isPrime, allOfPrime};