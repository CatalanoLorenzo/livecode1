const primaparola = prompt ('scrivi una parola');
const secondaparola = prompt ('scrivi una parola')
if(primaparola.length > secondaparola.length){
    console.log(`la prima parola ${primaparola} è piu lunga della seconda parola ${secondaparola}`)
}else if (primaparola.length < secondaparola.length){
    console.log(`la prima parola ${primaparola} è piu corta della seconda parola ${secondaparola}`)
}else {
    console.log(`la prima parola ${primaparola} è uguale alla seconda parola ${secondaparola}`)

}