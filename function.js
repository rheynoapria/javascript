function Body() {
  console.log("It's Function Body")
}

const foot = function(){
    console.log("It's Function Foot");

}

const hand = ()=>{
  console.log("It's Function Hand");
}


function cek() {
  var nilai1 = 3;
  if(nilai1 === 3 ){
    console.log("ya benar nilai itu adalah 3");
  }else{
    console.log("nilai itu bukan 3");

  }
}

function CallArray() {
  var data = [1,2,3,4,5,6]
  var nama = ["gajah","kambing","beruang"]

  console.log("jumlah data pada nama yaitu = "+data.length);
  console.log("jumlah data pada nama yaitu = "+nama.length);

  console.log(nama[1]);
  console.log(data[2]);
}

// cek()
// Body()
// foot()
// hand()

CallArray()
