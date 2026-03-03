// FILTER BUTTONS
const filterBtns = document.querySelectorAll(".filter-btn");
const diseaseItems = document.querySelectorAll(".disease-item");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".filter-btn.active").classList.remove("active");
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        diseaseItems.forEach(item => {
            if (filter === "all" || item.classList.contains(filter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

// SEARCH FUNCTION
document.getElementById("searchInput").addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    diseaseItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(value) ? "block" : "none";
    });
});

// FILTER

const doctorItems = document.querySelectorAll(".doctor-item");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        document.querySelector(".filter-btn.active").classList.remove("active");
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        doctorItems.forEach(item => {
            if (filter === "all" || item.classList.contains(filter)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

// SEARCH
document.getElementById("searchInput").addEventListener("keyup", function () {
    const value = this.value.toLowerCase();

    doctorItems.forEach(item => {
        const text = item.textContent.toLowerCase();
        item.style.display = text.includes(value) ? "block" : "none";
    });
});