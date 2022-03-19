var button1=document.getElementById("button1");
var button2=document.getElementById("button2");
var button3=document.getElementById("button3");
var button4=document.getElementById("button4");
var button5=document.getElementById("button5");
var button6=document.getElementById("button6");
var button7=document.getElementById("button7");
var button8=document.getElementById("button8");
var butotn9=document.getElementById("button9");
var numbers=[1,2,3,4,5,6,7,8,9];
// var nums=[];
function Button(theactualbutton,left,right,top,bottom){
    this.left=left;
    this.right=right;
    this.top=top;
    this.bottom=bottom;
    this.theactualbutton=theactualbutton;
  
  }
  
  var button_1= new Button(button1,null,button2,null,button4);
  var button_2=new Button(button2,button1,button3,null,button5);
  var button_3=new Button(button3,button2,null,null,button6);
  var button_4=new Button(button4,null,button5,button1,button7);
  var button_5=new Button(button5,button4,button6,button2,button8);
  var button_6=new Button(button6,button5,null,button3,button9);
  var button_7=new Button(button7,null,button8,button4,null);
  var button_8=new Button(button8,button7,butotn9,button5,null);
  var button_9=new Button(button9,button8,null,button6,null);

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
  var nums=shuffle(numbers);
  for (let i = 0; i< nums.length; i++) {
  if (nums[i]===9){
    nums[i]="";
  }
  button_1.theactualbutton.innerText=nums[0];
button_2.theactualbutton.innerText=nums[1];
button_3.theactualbutton.innerText=nums[2];
button_4.theactualbutton.innerText=nums[3];
button_5.theactualbutton.innerText=nums[4];
button_6.theactualbutton.innerText=nums[5];
button_7.theactualbutton.innerText=nums[6];
button_8.theactualbutton.innerText=nums[7];
button_9.theactualbutton.innerText=nums[8];

function swap(a,b){
   var y= document.getElementById(a).innerHTML;
   var z=document.getElementById(b).innerHTML;
   document.getElementById(a).innerHTML=z;
   document.getElementById(b).innerHTML=y;

}
button_1.theactualbutton.addEventListener("click",function(){
    if(button_1.right.innerText===''){
    swap("button1","button2");
    goal();
    }
    else if(button_1.bottom.innerText===''){
        swap("button1","button4");
        goal();
    }
})

  }
  button_2.theactualbutton.addEventListener("click",function(){
      if(button_2.right.innerText===''){
          swap("button2","button3");
          goal();
      }
      else if(button_2.left.innerText===''){
          swap("button2","button1");
          goal()
      }
      else if(button_2.bottom.innerText===''){
        swap("button2","button5");
        goal();
      }
  })
  button_3.theactualbutton.addEventListener("click",function(){
      if(button_3.left.innerText===''){
          swap("button3","button2");
          goal();
      }else if(button_3.bottom.innerText===''){
        swap("button3","button6");
        goal();
      }
  })
  button_4.theactualbutton.addEventListener("click",function(){
      if(button_4.right.innerText===''){
          swap("button4","button5");
          goal();
      }
      else if(button_4.bottom.innerText===''){
        swap("button4","button7");
        goal();
      }
      else if(button_4.top.innerText===''){
        swap("button4","button1");
        goal();
      }
  })
  button_5.theactualbutton.addEventListener("click",function(){
      if(button_5.left.innerText===''){
          swap("button5","button4");
          goal();
      }
      else if(button_5.right.innerText===''){
          swap("button5","button6");
          goal();
      }
      else if(button_5.top.innerText===''){
          swap("button5","button2");
          goal();
      }else if(button_5.bottom.innerText===''){
          swap("button5","button8");
          goal();
      }
  })
  button_6.theactualbutton.addEventListener("click",function(){
      if(button_6.left.innerText===''){
          swap("button6","button5");
          goal()
      }
      else if(button_6.top.innerText===''){
          swap("button6","button3");
          goal()
      }
      else if(button_6.bottom.innerHTML===''){
          swap("button6","button9");
          goal();
      }
  })
  button_7.theactualbutton.addEventListener("click",function(){
    if(button_7.top.innerText===''){
        swap("button7","button4");
        goal();
    }
    else if(button_7.right.innerText===''){
        swap("button7","button8");
        goal()
    }
  })
  button_8.theactualbutton.addEventListener("click",function(){
      if(button_8.right.innerText===''){
          swap("button8","button9");
          goal()
  }
  else if(button_8.top.innerText===''){
      swap("button8","button5");
      goal()
  }
  else if(button_8.left.innerText===''){
      swap("button8","button7");
      goal()
  }

  })
  button_9.theactualbutton.addEventListener("click",function(){
      if(button_9.left.innerText===''){
          swap("button9","button8");
          goal()
      }
      else if(button_9.top.innerText===''){
          swap("button9","button6");
          goal()
      }
  })
  function goal(){
      if(button_1.theactualbutton.innerText==1 &&button_2.theactualbutton.innerText==2&&
        button_3.theactualbutton.innerText==3&&button_4.theactualbutton.innerText==4&&
        button_5.theactualbutton.innerText==5&&button_6.theactualbutton.innerText==6&&
        button_7.theactualbutton.innerText==7&&button_8.theactualbutton.innerText==8){
            return alert("you won");
        }
        else{
            console.log(false); 
            return false;
  }}