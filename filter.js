// filter mengunnakan keyword .filter()
function contohFilter(){
  var arr=[
    {negara: 'Indonesia',benua:'Asia'},
    {negara: 'Jerman',benua:'Eropa'},
    {negara: 'Jepang',benua:'Asia'},
    {negara: 'Canada',benua:'Amerika'},
    {negara: 'Spanyol',benua:'Eropa'},
    {negara: 'Inggris',benua:'Eropa'},
  ];

  var benuaEropa = arr.filter(function(item){
    return item.benua === 'Asia';
  });

  return benuaEropa;
}


// filter mengunnakan keyword for
function contohFilterFor(){
  var arr = [1,2,3,4,5,6,7]
  var arrGanjil = []

  for(var i = 0;i < arr.length;i++){
    if(arr[i] % 2 !== 0){
      arrGanjil.push(arr[i])
    }
  }
  return arrGanjil;
}

console.log(contohFilter());
console.log(contohFilterFor());
