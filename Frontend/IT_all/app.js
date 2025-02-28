document.addEventListener("DOMContentLoaded", function () {
     const searchInput = document.querySelector("[data-search]");
     const collegeContainer = document.getElementById("collegeContainer");
     let colleges = [];

     // Fetching College Data
     fetch("http://localhost:5001/api/it-colleges")
          .then(response => response.json())
          .then(data => {
               colleges = data.map(college => {
                    const card = document.createElement("div");
                    card.classList.add("col-md-3", "college-card");

                    card.innerHTML = `
                     <div class="card text-white bg-dark mb-3" style="width:99%">
                         <div class="card-body">
                             <h5 class="card-title">${college.nameOfCollege}</h5>
                             <p class="card-text"><strong>Location:</strong> ${college.clgLocation}</p>
                             <p class="card-text"><strong>Fees:</strong> ${college.clgFeesRaw}</p>
                             <button class="google-search-btn btn btn-light" onclick="searchGoogle(event)">Search on Google</button>
                         </div>
                     </div>
                 `;

                    collegeContainer.appendChild(card);
                    return { name: college.nameOfCollege.toLowerCase(), element: card };
               });
          })
          .catch(error => console.error("Error fetching data:", error));

  // Search Functionality
  searchInput.addEventListener("input", (e) => {
     const value = e.target.value.toLowerCase();
     colleges.forEach(college => {
          const isVisible = college.name.includes(value);
          college.element.classList.toggle("hide", !isVisible);
     });
});




      



     // Google Search Function
     window.searchGoogle = function (event) {
          let button = event.target;
          let card = button.closest(".card-body");
          let heading = card.querySelector(".card-title");

          if (!heading) {
               console.error("Could not find card-title");
               return;
          }

          let headingText = heading.innerText.trim();
          let googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(headingText)}`;
          window.open(googleSearchUrl, "_blank");
     };






     // Dropdown Logic
     const dropdowns = [
          { button: "drop", menu: "dropdown-menu-2" },
          { button: "drop1", menu: "dropdown-menu-21" },
          { button: "drop3", menu: "dropdown-menu-23" },
          { button: "drop4", menu: "dropdown-menu-24" },
          { button: "drop5", menu: "dropdown-menu-25" }
     ];

     dropdowns.forEach(({ button, menu }) => {
          const btnElement = document.getElementById(button);
          const menuElement = document.getElementById(menu);

          if (btnElement && menuElement) {
               btnElement.addEventListener("click", function (event) {
                    event.preventDefault();
                    const isVisible = menuElement.style.display === "block";
                    document.querySelectorAll(".dropdown-menu").forEach(m => (m.style.display = "none"));
                    menuElement.style.display = isVisible ? "none" : "block";
               });

               document.addEventListener("click", function (event) {
                    if (!event.target.closest(`#${button}`) && !event.target.closest(`#${menu}`)) {
                         menuElement.style.display = "none";
                    }
               });
          }
     });
});
