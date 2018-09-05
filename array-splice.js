function arraySplice(){
    var kota=['jakarta','bandung','surabaya','malang'];
    console.log(kota);

    kota.splice(2,0,'ternate')
    return kota
}

console.log(arraySplice());
