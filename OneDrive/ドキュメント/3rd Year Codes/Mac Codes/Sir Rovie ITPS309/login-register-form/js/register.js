const registerForm = document.getElementById("registerForm");
const fullNameInput = document.getElementById("fullName");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const termsInput = document.getElementById("terms");

const fullNameError = document.getElementById("fullNameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");
const termsError = document.getElementById("termsError");

const toggleButtons = document.querySelectorAll(".toggle-password");

toggleButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const input = document.getElementById(button.dataset.target);

    if (input.type === "password") {
      input.type = "text";
    } else {
      input.type = "password";
    }
  });
});

registerForm.addEventListener("submit", function (event) {
  event.preventDefault();

  let isValid = true;

  fullNameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
  termsError.textContent = "";

  fullNameInput.classList.remove("invalid");
  emailInput.classList.remove("invalid");
  passwordInput.classList.remove("invalid");
  confirmPasswordInput.classList.remove("invalid");

  const fullName = fullNameInput.value.trim();
  const email = emailInput.value.trim();
  const password = passwordInput.value.trim();
  const confirmPassword = confirmPasswordInput.value.trim();

  if (fullName === "") {
    fullNameError.textContent = "Full name is required.";
    fullNameInput.classList.add("invalid");
    isValid = false;
  } else if (fullName.length < 3) {
    fullNameError.textContent = "Name must be at least 3 characters.";
    fullNameInput.classList.add("invalid");
    isValid = false;
  }

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

  if (confirmPassword === "") {
    confirmPasswordError.textContent = "Please confirm your password.";
    confirmPasswordInput.classList.add("invalid");
    isValid = false;
  } else if (confirmPassword !== password) {
    confirmPasswordError.textContent = "Passwords do not match.";
    confirmPasswordInput.classList.add("invalid");
    isValid = false;
  }

  if (!termsInput.checked) {
    termsError.textContent = "You must agree to the terms.";
    isValid = false;
  }

  if (isValid) {
    alert("Account created successfully!");
    window.location.href = "login.html";
  }
});