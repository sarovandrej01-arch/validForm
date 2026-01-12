function passwordToggle(passwordInput, toggle) {
  toggle.addEventListener("change", (event) => {
    if (event.target.checked) {
      passwordInput.type = "text";
    } else {
      passwordInput.type = "password";
    }
  });
}
export default passwordToggle;
