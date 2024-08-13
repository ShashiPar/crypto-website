document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const confirmPasswordInput = document.getElementById("confirmPassword");
  const dobInput = document.getElementById("dob");
  const submitBtn = document.getElementById("submitBtn");

  const isValidName = (name) => /^[a-zA-Z\s]{3,}$/.test(name);
  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidPassword = (password) =>
    /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  const isAdult = (dob) => {
    const today = new Date();
    const birthDate = new Date(dob);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();
    if (
      monthDifference < 0 ||
      (monthDifference === 0 && today.getDate() < birthDate.getDate())
    ) {
      age--;
    }
    return age >= 18;
  };

  const validateField = (input, isValid) => {
    if (isValid(input.value)) {
      input.classList.remove("is-invalid");
      input.classList.add("is-valid");
    } else {
      input.classList.remove("is-valid");
      input.classList.add("is-invalid");
    }
  };

  const validatePasswordsMatch = () => {
    if (passwordInput.value === confirmPasswordInput.value) {
      confirmPasswordInput.classList.remove("is-invalid");
      confirmPasswordInput.classList.add("is-valid");
    } else {
      confirmPasswordInput.classList.remove("is-valid");
      confirmPasswordInput.classList.add("is-invalid");
    }
  };

  nameInput.addEventListener("input", () =>
    validateField(nameInput, isValidName)
  );
  emailInput.addEventListener("input", () =>
    validateField(emailInput, isValidEmail)
  );
  passwordInput.addEventListener("input", () =>
    validateField(passwordInput, isValidPassword)
  );
  confirmPasswordInput.addEventListener("input", validatePasswordsMatch);
  dobInput.addEventListener("input", () => validateField(dobInput, isAdult));

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const isFormValid =
      isValidName(nameInput.value) &&
      isValidEmail(emailInput.value) &&
      isValidPassword(passwordInput.value) &&
      passwordInput.value === confirmPasswordInput.value &&
      isAdult(dobInput.value);

    if (isFormValid) {
      alert("Form submitted successfully!");
      // Optionally, redirect to a new page or submit the form
    } else {
      alert("Please correct the errors in the form.");
    }
  });
});
