const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm-password");
const passMatch = document.getElementById("pass-match");
const submit = document.getElementById("submit");

function validatePassword(e) {
  if (password.value !== confirmPassword.value) {
    passMatch.style.display = "block";
    e.preventDefault();
  }
}

submit.addEventListener("click", validatePassword);
