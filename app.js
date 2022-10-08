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

const dateFieldList = document.getElementsByClassName("date-field");
Array.from(dateFieldList).forEach((dateField) => {
  const today = new Date();
  const then = new Date(dateField.dataset.date);

  var ageDifMs = today - then;
  var ageDate = new Date(ageDifMs);
  const yearsOld = Math.abs(ageDate.getUTCFullYear() - 1970);

  let text = "";

  if (yearsOld === 0) {
    text = "hardly any time at all!";
  } else if (yearsOld === 1) {
    text = "1 year";
  } else {
    text = `${yearsOld} years`;
  }

  dateField.innerText = text;
});
