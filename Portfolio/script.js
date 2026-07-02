function showPage(pageId) {

    // Hide all pages
    const pages = document.querySelectorAll(".page");

    pages.forEach(function(page) {
        page.classList.remove("active");
    });

    // Show selected page
    document.getElementById(pageId).classList.add("active");

    // Scroll to top
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}
