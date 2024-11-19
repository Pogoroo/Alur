document.addEventListener("DOMContentLoaded", () => {
    const searchBar = document.getElementById("searchBar");
    const books = document.querySelectorAll(".book");

    searchBar.addEventListener("input", (e) => {
        const searchTerm = e.target.value.toLowerCase();

        books.forEach((book) => {
            const title = book.querySelector("a").textContent.toLowerCase(); // Ganti 'p' dengan 'a'
            if (title.includes(searchTerm)) {
                book.style.display = "block";
            } else {
                book.style.display = "none";
            }
        });
    });
});