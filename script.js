document.getElementById("search").addEventListener("input", function () {
    let searchValue = this.value.toLowerCase();
    let products = document.querySelectorAll(".product-card");

    products.forEach(product => {
        let title = product.querySelector("h2").textContent.toLowerCase();
        if (title.includes(searchValue)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});