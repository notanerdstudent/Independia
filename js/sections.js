let preveiwContainer = document.querySelector(".state-view");
let previewBox = preveiwContainer.querySelectorAll(".preview");

document
  .querySelectorAll(
    ".india-today-content .slide-container .slide-content .card-wrapper .card"
  )
  .forEach((product) => {
    product.onclick = () => {
      preveiwContainer.style.display = "flex";
      let name = product.getAttribute("data-name");
      previewBox.forEach((preview) => {
        let target = preview.getAttribute("data-target");
        if (name == target) {
          preview.classList.add("active");
        }
      });
    };
  });

previewBox.forEach((close) => {
  close.querySelector(".fa-times").onclick = () => {
    close.classList.remove("active");
    preveiwContainer.style.display = "none";
  };
});
