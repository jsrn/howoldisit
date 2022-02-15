const dropdown = document.getElementById("tech-dropdown");
const techList = document.getElementById("rows");

dropdown.addEventListener("input", function(e) {
  const searchTerm = e.target.value.trim();

  Array.from(techList.getElementsByTagName("p")).forEach((element) => {
    if (
      searchTerm === "" ||
      element.dataset.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      element.style.display = "block";
    } else {
      element.style.display = "none";
    }
  });
});
