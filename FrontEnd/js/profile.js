import ProfileManager from "./ProfileManager.js"
import ThemeManager from "./ThemeManager.js"

const logoutBtn = document.querySelector("#logoutBtn")
const profileEmail = document.querySelector("#profileEmail")
const profileLogin = document.querySelector("#profileLogin")
const profileManager = new ProfileManager({
  loginEl: profileLogin,
  emailEl: profileEmail,
  redirectUrl: "index.html"
})
const themeManager = new ThemeManager({
  body: document.body,
  button: document.getElementById('themeToggle'),
  storageKey: 'theme',
  darkClass: 'theme-dark',
  lightClass: 'theme-light'
})

themeManager.init()

profileManager.init()
if (logoutBtn) {
  logoutBtn.addEventListener("click", () => {
    profileManager.logout()
  })
}