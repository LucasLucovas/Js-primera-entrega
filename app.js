let notaPrimerTrimestre = parseInt(prompt('Ingrese su nota del primer trimestre'))
let notaSegundoTrimestre = parseInt(prompt('Ingrese su nota del segundo trimestre'))
let notaTercerTrimestre= parseInt(prompt('Ingrese su nota del tercer trimestre'))

let TodasLasNotas = {
    notaPrimerTrimestre,
    notaSegundoTrimestre,
    notaTercerTrimestre,
}

let promedio = 0;
for (let key in TodasLasNotas) {
  promedio += TodasLasNotas[key];
}

promedio = promedio / 3
if (promedio >= 6) {
    alert(`Aprobaste tu nota es: ${Math.round(promedio)}`)
}else{
    alert(`Reprobaste tu nota es: ${Math.round(promedio)}`)
}



