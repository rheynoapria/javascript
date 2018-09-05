function myTipeData(){

  var a = 80
  console.log(typeof(a))

  if (typeof(a)==='number'){
    var x = ' tipe data number'
    return a+x
  }else{
    var x = ' bukan tipe data number'
    return a+x
  }
  }

console.log(myTipeData()())
