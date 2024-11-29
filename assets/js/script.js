document.addEventListener("DOMContentLoaded", () => {
  const navigationLinks = document.querySelectorAll("[data-nav-link]");
  const pages = document.querySelectorAll("[data-page]");

  // Set the first page as active by default
  pages[0].classList.add("active");
  navigationLinks[0].classList.add("active");

  // Add click event listener to all navigation links
  navigationLinks.forEach((link) => {
    link.addEventListener("click", function () {
      const targetPage = link.textContent.trim().toLowerCase(); // Get the target page name

      // Remove the "active" class from all navigation links and pages
      navigationLinks.forEach((nav) => nav.classList.remove("active"));
      pages.forEach((page) => page.classList.remove("active"));

      // Add "active" class to the clicked link and corresponding page
      link.classList.add("active");
      document.querySelector(`[data-page="${targetPage}"]`).classList.add("active");

      // Scroll to the top of the page
      window.scrollTo(0, 0);
    });
  });
});
