// Keeps date and author details hidden from non-members
let messageStatus = document.querySelector('.membership').textContent;
console.log(messageStatus)
let usernames = document.querySelectorAll(".username");
let dates = document.querySelectorAll(".date");

if (messageStatus == "traveler") {
	usernames.forEach((username) => {
		username.textContent = "Anonymous";
	});
	dates.forEach((date) => {
		date.textContent = date.textContent.replace(/[^ ]/g, "x");
	});
}
