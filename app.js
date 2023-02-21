let yourAge = parseInt(prompt('Ingrese su edad'))
let peopleInTheQueue = parseInt(prompt('Ingrese cuanta gente hay en la cola'))
let timeInQueue = 0;
function queue(number){
    for (let i = 0; i < number; i++) {
        timeInQueue += 2
    }
    return timeInQueue
}



if (timeInQueue == 10) {
    alert('10 min de cola restantes')
}else if (timeInQueue == 20) {
    alert('20 min de cola restantes')
}else if (timeInQueue == 30) {
    alert('30 min de cola restantes')
}else if (timeInQueue == 40) {
    alert('40 min de cola restantes')
}else if (timeInQueue == 50) {
    alert('50 min de cola restantes')
}else if (timeInQueue == 60) {
    alert('1Hs restante de cola')
}

queue(peopleInTheQueue)










