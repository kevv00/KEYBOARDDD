function MyFunction(){
       document.getElementById(event.code).style.backgroundColor= "Red";
       }
       document.addEventListener("keydown", MyFunction);

        function MyFunction2(){
          document.getElementById(event.code).style.backgroundColor= "black";
          }
          document.addEventListener("keyup", MyFunction2);
