function write(text,speed,callback = null){
  var textArr = text.split("");
  var i = 0;
  
  if(speed == "slow")
    speed = 500;
  else
    speed = 70;
  
  function loop(){
    $("#console").append(textArr[i])
    i++;
    if(i < textArr.length)
      setTimeout(loop,speed)
    else{
      $("#console").append("<p>");
      if(callback != null)
        callback();
    }
  }

  setTimeout(loop,speed);
}

$(document).ready(function(){
  write("Assalomu alaykum do'stim siz bilan BeGe Groupning Aqili roboti aloqada sizga qanday yordam berolaman ?  " );
});

//   Name part 


let defaultJavob = document.querySelector('#nameuser');

let login = document.querySelector('.login');
let closeUser = document.querySelector('#closeuser');

let userName = document.querySelector('#username');


closeUser.addEventListener('click',()=>{
    login.style = "display: none";
})

function enter(){
    console.log(userName.value);

    defaultJavob.innerHTML = `Xush kelibsiz  ${userName.value}`

    login.style = "display: none"
    
}

// Navbar part 2

let left = document.querySelector('#left');
let navbar = document.querySelector('.nav-2');

left.addEventListener('click', ()=>{
    navbar.style = "right: 0%; transition: 1s "
})

let right = document.querySelector('#right');

right.addEventListener('click', ()=>{
  navbar.style = "left: -20% transition: 1s"
})