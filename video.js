function myFunction() {
    var x = document.getElementById("myText").value;

    const data = [
  	{title:'Video 1',
   	 url:'https://mystorage/video1.jpeg'
  	},
  	{title:'Video 2',
   	 url:'https://mystorage/video2.jpeg'
  	},
  	{title:'Video 3',
   	 url:'https://mystorage/video3.jpeg'
   },
	]

    var k = x-1;
    if (x<=data.length)
		var y = data[k].title;
    else
    	y = "Video tidak ada"

    document.getElementById("videoName").innerHTML = y;
}
