document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.querySelector("[data-search]");
    const collegeContainer = document.getElementById("collegeContainer");
    let colleges = [];

    fetch("http://localhost:5000/api/it-colleges")
        .then(response => response.json())
        .then(data => {
            colleges = data.map(college => {
                const card = document.createElement("div");
                card.classList.add("col-md-3", "college-card");

                card.innerHTML = `
                    <div class="card text-white bg-dark mb-3">
                        <div class="card-body ">
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

    // Search functionality
    searchInput.addEventListener("input", (e) => {
        const value = e.target.value.toLowerCase();
        colleges.forEach(college => {
            const isVisible = college.name.includes(value);
            college.element.classList.toggle("hide", !isVisible);
        });
    });
});

function searchGoogle(event) {
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
}