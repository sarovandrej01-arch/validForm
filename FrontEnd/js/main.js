import FormValidator from "./FormValidator.js";
import passwordToggle from "./PasswordToggle.js";
import ThemeManager from "./ThemeManager.js";
import FormSender from "./FormSender.js";
import UserManager from "./UserManager.js";

const form = document.querySelector("#registerForm");
const validator = new FormValidator(form);
const passwordInput = form.querySelector("#password__registerForm");
const toggle = form.querySelector("#checkbox__registerForm");
const cardRegisterForm = document.querySelector("#card-register-form");
const containerRegisterForm = document.querySelector(
  "#container-register-form"
);
passwordToggle(passwordInput, toggle);
validator.init();
const body = document.querySelector("body");

const userManager = new UserManager(cardRegisterForm, containerRegisterForm);

userManager.checkAuth();
const userLoc = localStorage.getItem("user");
if (userLoc) {
  setTimeout(() => window.location.assign("profile.html"), 3000);
}

const themeManager = new ThemeManager({
  body: document.body,
  button: document.getElementById("themeToggle"),
  storageKey: "theme",
  darkClass: "theme-dark",
  lightClass: "theme-light",
});

themeManager.init();
const sender = new FormSender({
  form,
  url: "http://localhost:3000/users",
  method: "POST",
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const isValid = validator.handleSubmit();
  if (!isValid) return;

  try {
    const result = await sender.submit();
    const user = {
      username: result.username,
      email: result.email,
    };
    userManager.setUser(user);
    userManager.checkAuth();
    setTimeout(() => {
      window.location.assign("profile.html");
    }, 3000);
  } catch (err) {
    console.error(err);
  }
});
