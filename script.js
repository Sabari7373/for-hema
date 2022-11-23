let timer =document.getElementById("countDown");

let less=10;

setTimeout(()=>{
  timer.innerHTML=less;
  less--;
   setTimeout(()=>{
    timer.innerHTML=less;
    less--;
    setTimeout(()=>{
      timer.innerHTML=less;
      less--;
      setTimeout(()=>{
        timer.innerHTML="Oi";
        less--;
        setTimeout(()=>{
          timer.innerHTML="Baby";
          less--;
          setTimeout(()=>{
            timer.innerHTML="Good Night";
            less--;
            setTimeout(()=>{
              timer.innerHTML="miss you";
              less--;
              setTimeout(()=>{
                timer.innerHTML=" I LOVE YOU ";
                less--;
                setTimeout(()=>{
                  timer.innerHTML="Intha mari tha";
                  less--;
                  setTimeout(()=>{
                    timer.innerHTML="periya project";
                    less--;
                    setTimeout(()=>{
                       timer.innerText= `monday pannanum di`;
                      timer.classList.add('text-danger')
                    },4000)
                  },2000)
                },1000)
              },1000) 
            },1000)
          },1000) 
        },1000) 
      },1000)
    },1000) 
  },1000)
},)