const accardions = document.querySelectorAll(".accordion");
accardions.forEach(acc => {
    acc.addEventListener("click", function () {
        let open = this.nextElementSibling;
        if (open.style.display === "block") {
            open.style.display = "none";
        } else {
            open.style.display = "block";
        }
    })
});