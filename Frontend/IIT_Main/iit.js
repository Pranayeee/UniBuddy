let btn = document.querySelector(".more");
let elements = document.querySelectorAll(".imp-iit")


btn.addEventListener("click", () => {
          elements.forEach(element => { 
               if (element.style.display === "none" || element.style.display === "") {
                    element.style.display = "block";
                     
               } else {
                    element.style.display = "none";
                  
               }
          });
     });
     const buttonView = document.querySelector(".more");

     buttonView.addEventListener("click", (e) => {
       e.preventDefault();
       buttonView.classList.add("animate");
     
       setTimeout(() => {
         buttonView.classList.remove("animate");
       }, 600);
     });
     

 
    
    
    