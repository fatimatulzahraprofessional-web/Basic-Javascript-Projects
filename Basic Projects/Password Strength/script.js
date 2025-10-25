const password = document.getElementById("password");
const message = document.getElementById("message");
const strength = document.getElementById("strength");
const toggleButton = document.getElementById("button");

password.addEventListener("input", function () {
  const passwordValue = password.value;
  const passwordLength = passwordValue.length;

  let strengthValue = "";

  if (passwordLength === 0) {
    strengthValue = "";
    message.style.display = "none"; // hide when empty
  } else if (passwordLength < 6) {
    strengthValue = "Weak";
    message.style.display = "block";
  } else if (passwordLength < 10) {
    strengthValue = "Medium";
    message.style.display = "block";
  } else {
    strengthValue = "Strong";
    message.style.display = "block";
  }

  strength.textContent = strengthValue;
});

toggleButton.addEventListener("click", function () {
  const passwordType = password.getAttribute("type");

  if (passwordType === "password") {
    password.setAttribute("type", "text");
  } else {
    password.setAttribute("type", "password");
  }
});
