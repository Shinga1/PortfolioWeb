// Fetch the navigation HTML and inject it into the page
fetch('pages/nav.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('nav-place').innerHTML = data;
  })
  .catch(error => console.error('Error loading the navigation:', error));

// Add 'active' class to nav links as user scrolls
window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".navi ul li a");  // Select links within the .navi class

    sections.forEach((section) => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100; // Adjust offset for better section targeting
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach((link) => {
                link.classList.remove("active");
                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active");
                }
            });
        }
    });
});
