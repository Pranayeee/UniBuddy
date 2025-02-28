document.addEventListener('DOMContentLoaded', function() {
    var button = document.querySelector('.button.two');
    button.addEventListener('click', function(e) {
        e.preventDefault();
        var iimMain = document.querySelector('.iim-Main');
        if (iimMain.style.display === 'block') {
            iimMain.style.display = 'none';
        } else {
            iimMain.style.display = 'block';
        }

    });
})




function filterCards() {
    let searchQuery = document.getElementById("searchInput").value.toLowerCase();
    let thumbnails = document.querySelectorAll(".col");

    thumbnails.forEach((thumbnail) => {
        let title = thumbnail.querySelector("h2").innerText.toLowerCase();
        if (searchQuery === "" || title.includes(searchQuery)) {
            thumbnail.style.display = "block"; 
        } else {
            thumbnail.style.display = "none"; // Hide non-matching results
        }
    });
}

// Add event listener to reset cards when input is cleared
document.getElementById("searchInput").addEventListener("input", function() {
    if (this.value === "") {
        filterCards(); // Call filter function to reset all cards
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
