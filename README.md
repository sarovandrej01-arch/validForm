validForm

A modern registration and profile management demo app built with vanilla JavaScript.

This project demonstrates form validation, theme switching, local authentication logic, profile rendering, and clean modular architecture — without using any frameworks.

🚀 Features

✅ Registration form with custom validation

🌗 Dark / Light theme switcher (saved in localStorage)

👤 User profile page

🔐 Mock authentication system

🔁 Auto redirect based on auth state

💾 LocalStorage session persistence

🎨 Modern UI with glassmorphism

📱 Responsive layout

✨ Animated welcome message

🧩 Modular JavaScript architecture

🛠 Tech Stack

HTML5

CSS3 (Flexbox, Grid, CSS Variables)

Vanilla JavaScript (ES6+)

ES Modules (type="module")

json-server (mock backend)

LocalStorage API

📁 Project Structure
/frontend
/js
FormSender.js
FormValidator.js
main.js
profile.js
PasswordToggle.js
ProfileManager.js
ThemeManager.js
UserManager.js

/css
style.css
profile.css

index.html
profile.html

/backend
db.json5
package.json

⚙️ How to Run

1. Clone the repository
   git clone git@github.com:sarovandrej01-arch/validForm.git

2. Install backend dependencies
   cd backend
   npm install

3. Run mock API
   npx json-server db.json5

4. Open frontend

Use Live Server or any local server.

🧠 Architecture Overview
Module Responsibility
FormValidator Handles all form validation logic
ThemeManager Controls light/dark theme switching
UserManager Manages auth state and welcome UI
ProfileManager Renders user profile data
FormSender Sends form data to API
PasswordToggle Password visibility logic
🎯 Purpose of This Project

This project was created to demonstrate:

Clean separation of concerns

Modular frontend architecture

State management without frameworks

UI/UX thinking

Local persistence

Real-world frontend logic

🔮 Future Improvements

Real backend integration

Password hashing

JWT authentication

Edit profile

Avatar upload

Accessibility improvements

📄 License

MIT
