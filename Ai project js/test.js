
// alert("working");

// images
var btn=document.getElementById("btn");
var image1=document.getElementById("zero");
var image2=document.getElementById("one");
var image3=document.getElementById("two");
var image4=document.getElementById("three");
var image5=document.getElementById("four");
var image6=document.getElementById("five");
var image7=document.getElementById("six");
var image8=document.getElementById("seven");
var image9=document.getElementById("eight");
var imgArray=[{src:"0.jpg",value:0},{src:"1.jpg",value:1},{src:"2.jpg",value:2},{src:"3.jpg",value:3},{src:"4.jpg",value:4},{src:"5.jpg",value:6},{src:"6.jpg",value:6},{src:"7.jpg",value:7},{src:"empty.png",value:8}];
// making object

function goal(){

    if(image1.getAttribute('src')==="0.jpg"&&image2.getAttribute('src')==="1.jpg"
    &&image3.getAttribute('src')==="2.jpg"&&image4.getAttribute('src')==="3.jpg"
    &&image5.getAttribute('src')==="4.jpg"&&image6.getAttribute('src')==="5.jpg"
    &&image7.getAttribute('src')==="6.jpg"&&image8.getAttribute('src')==="7.jpg"
    &&image9.getAttribute('src')==="empty.png"

                  ){
      return alert('you won');
    }
    else{
    return console.log('not yet');
    }
  }

function shuffle(array) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }
var random=shuffle(imgArray);


function swap(img1,img2){
  var y=img1.getAttribute('src');
  var z=img2.getAttribute('src');
  img1.setAttribute('src',z);
  img2.setAttribute('src',y);

 }
console.log(random);
image1.setAttribute("src",random[0].src);
image2.setAttribute("src",random[1].src);
image3.setAttribute("src",random[2].src);
image4.setAttribute("src",random[3].src);
image5.setAttribute("src",random[4].src);
image6.setAttribute("src",random[5].src);
image7.setAttribute("src",random[6].src);
image8.setAttribute("src",random[7].src);
image9.setAttribute("src",random[8].src);

image1.addEventListener("click",function(){
  if(image2.getAttribute('src')==='empty.png'){
    swap(image1,image2);

  }
  else if(image4.getAttribute('src')==='empty.png'){
    swap(image1,image4);

  }
  goal();
});
image2.addEventListener("click",function(){
  if(image1.getAttribute('src')==='empty.png'){
    swap(image2,image1);

  }
  else if(image3.getAttribute('src')==='empty.png'){
    swap(image2,image3);

  }else if(image5.getAttribute('src')==='empty.png'){
    swap(image2,image5);

  }
  goal();
});
image3.addEventListener("click",function(){
  if(image2.getAttribute('src')==='empty.png'){
    swap(image3,image2)
  }
  else if(image6.getAttribute('src')==='empty.png'){
    swap(image3,image6);
  }
  goal()

});
image4.addEventListener("click",function(){
  if(image5.getAttribute('src')==='empty.png'){
    swap(image4,image5);
  }
  else if(image1.getAttribute('src')==='empty.png'){
    swap(image4,image1);
  }


  else if(image7.getAttribute('src')==='empty.png'){
    swap(image4,image7);
  }
  goal();

});
image5.addEventListener("click",function(){
  if(image2.getAttribute('src')==='empty.png'){
    swap(image5,image2)
  }
  else if(image4.getAttribute('src')==='empty.png'){
    swap(image5,image4);
  }
  else if(image6.getAttribute('src')==='empty.png'){
    swap(image5,image6);
  }
  else if(image8.getAttribute('src')==='empty.png'){
    swap(image5,image8);
  }
  goal();

});
image6.addEventListener("click",function(){
  if(image3.getAttribute('src')==='empty.png'){
    swap(image6,image3)
  }
  else if(image5.getAttribute('src')==='empty.png'){
    swap(image6,image5);
  }else if(image9.getAttribute('src')==='empty.png'){
    swap(image6,image9);
  }
  goal();

});
image7.addEventListener("click",function(){
  if(image4.getAttribute('src')==='empty.png'){
    swap(image7,image4);
  }
  else if(image8.getAttribute('src')==='empty.png'){
    swap(image7,image8);
  }
  goal();

});
image8.addEventListener("click",function(){
  if(image7.getAttribute('src')==='empty.png'){
    swap(image8,image7)
  }
  else if(image5.getAttribute('src')==='empty.png'){
    swap(image8,image5);
  }
  else if(image9.getAttribute('src')==='empty.png'){
    swap(image8,image9);
  }
  goal();

});
image9.addEventListener("click",function(){
  if(image6.getAttribute('src')==='empty.png'){
    swap(image9,image6);
  }
  else if(image8.getAttribute('src')==='empty.png'){
    swap(image9,image8);
  }
  goal();

});
