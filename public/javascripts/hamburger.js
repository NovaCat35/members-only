const hamburger = document.querySelector(".hamburger");
const navbarRight = document.querySelector(".nav-right-mobile");
let hamburgerActive = false;

hamburger.addEventListener("click", () => {
	if (hamburgerActive) {
		hamburger.classList.remove("active");
		navbarRight.classList.remove("active");
      hamburgerActive = false;
	} else {
		hamburger.classList.add("active");
		navbarRight.classList.add("active");
      hamburgerActive = true;
	}
});
