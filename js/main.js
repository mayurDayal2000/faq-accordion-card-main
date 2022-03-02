const article = document.querySelector("article");

for (let current_section of article.children) {
  current_section.addEventListener("click", function () {
    for (let section = 1; section < article.children.length; section++) {
      if (current_section !== article.children[section]) {
        article.children[section].classList.remove(
          "active-section",
          "active-section-big"
        );
      }
    }
    current_section.classList.toggle("active-section");
  });
}

/* target 3rd section due to height issue */
article.children[3].addEventListener("click", function () {
  article.children[3].classList.toggle("active-section-big");
});
