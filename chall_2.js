function sommeTableau(tab){
    let sum=0;
    for(let i = 0 ; i<tab.length ; i++){
        sum+=tab[i]
    }
    return sum
}
let tab=[1,2,3]
console.log(sommeTableau(tab));
