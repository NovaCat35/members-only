/**
 * Goal: to hide/unhide password text with eye-icon
 */
const eyeIcon = document.querySelector(".eye-icon");
const eyeIcon2 = document.querySelector(".eye-icon2");
const passwordInput = document.getElementById("password");
const passwordInput2 = document.getElementById("password-confirm");

eyeIcon.addEventListener("click", () => {
	// Unhide password and display close-eye icon
	if (passwordInput.type === "password") {
		passwordInput.type = "text";
		eyeIcon.src = "/images/eye-off.svg";
	} else {
		passwordInput.type = "password";
		eyeIcon.src = "/images/eye.svg";
	}
});

eyeIcon2.addEventListener("click", () => {
	// Unhide password and display close-eye icon
	if (passwordInput2.type === "password") {
		passwordInput2.type = "text";
		eyeIcon2.src = "/images/eye-off.svg";
	} else {
		passwordInput2.type = "password";
		eyeIcon2.src = "/images/eye.svg";
	}
});
