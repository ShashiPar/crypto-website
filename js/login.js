document
  .getElementById("loginForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username && password) {
      alert("Logged in successfully");

      // Clear the form fields
      document.getElementById("loginForm").reset();

      // window.location.href = "dashboard.html";  // Redirect to dashboard or another page
    } else {
      alert("Please enter both username and password");
    }
  });
