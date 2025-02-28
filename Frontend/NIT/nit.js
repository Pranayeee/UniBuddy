function filterThumbnails() {
    let searchQuery = document.getElementById("search-input").value.toLowerCase();
    let thumbnails = document.querySelectorAll(".div");

    thumbnails.forEach((thumbnail) => {
        let title = thumbnail.querySelector("h2").innerText.toLowerCase();

        if (searchQuery === "" || title.includes(searchQuery)) {
            thumbnail.style.display = "block"; // Show all if query is empty or show matching results
        } else {
            thumbnail.style.display = "none"; // Hide non-matching results
        }
    });
}

// Add event listener to reset thumbnails when input is cleared
document.getElementById("search-input").addEventListener("input", function() {
    if (this.value === "") {
        filterThumbnails(); // Call filter function to reset all thumbnails
    }
});




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
