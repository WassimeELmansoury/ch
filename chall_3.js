function maxTableau(tab){
    let max = tab[0];

    for ( let i=1 ; i<tab.length ; i++){
        if(tab[i]>max){
            max=tab[i];
        }
    }
    return max
}
let Numbers=[1 , 2 , 66, 21 , 66];
    console.log(maxTableau(Numbers));