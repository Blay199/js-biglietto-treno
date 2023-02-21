const priceKm = 0.21

let userKm = parseInt(prompt('Inserisci Km da percorrere'))
let userAge = parseInt(prompt('Inserire età passeggero'))

let ticketPrice = userKm * priceKm

if (userAge < 18) {
    ticketPrice *= 0.80
} else if (userAge > 65) {
    ticketPrice *= 0.60
}

let resultStamp = document.getElementById('ticketPrice')
resultStamp.innerHTML = 'Il prezzo del biglietto per la tua fascia di età è: ' + ticketPrice.toFixed(2)
// console.log(userAge)
