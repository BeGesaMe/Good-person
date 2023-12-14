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
    write("Assalomu alaykum do'stim, Meni ismim Aqilvoy siz Frontend sohasini o'rganmoqchi bulsangiz kirish tugmasini bosib kursimizni sotib olishingiz mumkin !" );
  });
  