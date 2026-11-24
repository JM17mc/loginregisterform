const loginForm = document.getElementById("loginForm");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  emailError.textContent = "";
  passwordError.textContent = "";
  emailInput.classList.remove("invalid");
  passwordInput.classList.remove("invalid");

  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();

  if (email === "") {
    emailError.textContent = "Email is required.";
    emailInput.classList.add("invalid");
    isValid = false;
  } else if (!email.includes("@") || !email.includes(".")) {
    emailError.textContent = "Please enter a valid email.";
    emailInput.classList.add("invalid");
    isValid = false;
  }

  if (password === "") {
    passwordError.textContent = "Password is required.";
    passwordInput.classList.add("invalid");
    isValid = false;
  } else if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    passwordInput.classList.add("invalid");
    isValid = false;
  }

  if (isValid) {
    alert("Login successful!");
    loginForm.reset();
  }
});