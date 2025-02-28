const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))






document.addEventListener("DOMContentLoaded", function () {
    
     let dropLink = document.getElementById("drop");
 
     dropLink.addEventListener("click", function (event) {
         event.preventDefault(); 
 
      
         let dropdownMenu = document.getElementById("dropdown-menu-2");
 
       
         if (dropdownMenu.style.display === "block") {
             dropdownMenu.style.display = "none"; 
         } else {
             dropdownMenu.style.display = "block"; 
         }
     });
 
   
     document.addEventListener("click", function (event) {
         if (!event.target.closest("#drop")) {
             document.getElementById("dropdown-menu-2").style.display = "none";
         }
     });
 });
 
 
 
 
 
 
 document.addEventListener("DOMContentLoaded", function () {
   
     let dropLink = document.getElementById("drop1");
 
     dropLink.addEventListener("click", function (event) {
         event.preventDefault();
 
        
         let dropdownMenu = document.getElementById("dropdown-menu-21");
 
        
         if (dropdownMenu.style.display === "block") {
             dropdownMenu.style.display = "none"; 
         } else {
             dropdownMenu.style.display = "block";
         }
     });
 
     
     document.addEventListener("click", function (event) {
         if (!event.target.closest("#drop1")) {
             document.getElementById("dropdown-menu-21").style.display = "none"; 
         }
     });
 });
 
 
 
 
 
 
 
 document.addEventListener("DOMContentLoaded", function () {
     
     let dropLink = document.getElementById("drop3");
 
     dropLink.addEventListener("click", function (event) {
         event.preventDefault();
 
         
         let dropdownMenu = document.getElementById("dropdown-menu-23");
 
       
         if (dropdownMenu.style.display === "block") {
             dropdownMenu.style.display = "none";
         } else {
             dropdownMenu.style.display = "block"; 
         }
     });
 
     
     document.addEventListener("click", function (event) {
         if (!event.target.closest("#drop3")) {
             document.getElementById("dropdown-menu-23").style.display = "none"; 
         }
     });
 });
 
 
 
 
 
 
 
 
 document.addEventListener("DOMContentLoaded", function () {
    
     let dropLink = document.getElementById("drop4");
 
     dropLink.addEventListener("click", function (event) {
         event.preventDefault(); 
 
        
         let dropdownMenu = document.getElementById("dropdown-menu-24");
 
        
         if (dropdownMenu.style.display === "block") {
             dropdownMenu.style.display = "none"; 
         } else {
             dropdownMenu.style.display = "block";
         }
     });
 
  
     document.addEventListener("click", function (event) {
         if (!event.target.closest("#drop4")) {
             document.getElementById("dropdown-menu-24").style.display = "none"; 
         }
     });
 });
 
 
 document.addEventListener("DOMContentLoaded", function () {
     
     let dropLink = document.getElementById("drop5");
 
    
     dropLink.addEventListener("click", function (event) {
         event.preventDefault(); 
         let dropdownMenu = document.getElementById("dropdown-menu-25");
 
         
         if (dropdownMenu.style.display === "block") {
             dropdownMenu.style.display = "none"; 
             dropdownMenu.style.marginBottom = "0"; 
         } else {
             dropdownMenu.style.display = "block"; 
             dropdownMenu.style.marginBottom = "1000px"; 
         }
     });
 
     
     document.addEventListener("click", function (event) {
         if (!event.target.closest("#drop5")) {
             document.getElementById("dropdown-menu-25").style.display = "none"; 
             document.getElementById("dropdown-menu-25").style.marginBottom = "0px"; 
         }
     });
 });
 