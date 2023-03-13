//creo array
const tv_show = [
    'Fringe',
    'Flash',
    'SuperNatural'
]
const ulEl = document.querySelector('ul');
// ogni elemento in console
console.log(tv_show);
for (let i = 0; i < tv_show.length ;i++){
    console.log(tv_show[i]);
    
    // creo elemento li
    const liEl= document.createElement ('li');
    //inserisco il valore il valore (tv_show[i]) al suo interno
    liEl.append (tv_show[i])
    console.log(liEl);
    // inserisco li all'interno del ul 
    ulEl.append(liEl)
}

//ogni elemento in pagina
