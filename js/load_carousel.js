(function load_carousel() {
  let carousel = document.getElementById("carousel-inner");

  for (let i = 1; i <= 9; i++) {
    carousel.innerHTML += `
    <div class="carousel-item${i == 1 ? " active" : ""}">
    <img
      src="assets/spring_program/${i}.PNG"
      class="d-block w-100"
      alt="Spring Program Image"
    />
  </div>`;
  }
})();
