let next = document.getElementById('next');
let prev = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let items = document.querySelectorAll('.carousel .item');
let countItem = items.length;
let active = 1;
let other_1 = null;
let other_2 = null;
next.onclick = () => {
    carousel.classList.remove('prev');
    carousel.classList.add('next');
    active =active + 1 >= countItem ? 0 : active + 1;
    other_1 =active - 1 < 0 ? countItem -1 : active - 1;
    other_2 = active + 1 >= countItem ? 0 : active + 1;
    changeSlider();
}
prev.onclick = () => {
    carousel.classList.remove('next');
    carousel.classList.add('prev');
    active = active - 1 < 0 ? countItem - 1 : active - 1;
    other_1 = active + 1 >= countItem ? 0 : active + 1;
    other_2 = other_1 + 1 >= countItem ? 0 : other_1 + 1;
    changeSlider();
}
const changeSlider = () => {
    let itemOldActive = document.querySelector('.carousel .item.active');
    if(itemOldActive) itemOldActive.classList.remove('active');

    let itemOldOther_1 = document.querySelector('.carousel .item.other_1');
    if(itemOldOther_1) itemOldOther_1.classList.remove('other_1');

    let itemOldOther_2 = document.querySelector('.carousel .item.other_2');
    if(itemOldOther_2) itemOldOther_2.classList.remove('other_2');

    items.forEach(e => {
        e.querySelector('.image img').style.animation = 'none';
        e.querySelector('.image figcaption').style.animation = 'none';
        void e.offsetWidth;
        e.querySelector('.image img').style.animation = '';
        e.querySelector('.image figcaption').style.animation = '';
    })

    items[active].classList.add('active');
    items[other_1].classList.add('other_1');
    items[other_2].classList.add('other_2');

    clearInterval(autoPlay);
    autoPlay = setInterval(() => {
        next.click();
    }, 5000);
}
let autoPlay = setInterval(() => {
    next.click();
}, 5000);









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







const buttonView = document.querySelectorAll(".button23");

buttonView.forEach((element) => { 
  element.addEventListener("mouseover", (e) => {
    e.preventDefault();
    element.classList.add("animate");
    
    setTimeout(() => {
      element.classList.remove("animate");
    }, 600);
  });
});



