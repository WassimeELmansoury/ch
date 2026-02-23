function remplirTableau(length){
    let tabl = [];
    for (let i=0 ; i<length ; i++) {
        let num=Number(prompt("Entrez le numéro " + (i+1)+(":")));
        tabl.push(num);
    }
    return tabl;
}
let NumTab = remplirTableau(4);
console.log(NumTab);