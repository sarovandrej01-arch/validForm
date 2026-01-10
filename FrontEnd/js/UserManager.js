export default class UserManager {
    constructor(form, body) {
        this.form = form
        this.body = body
        this.blockEl = null
    }

    getUser() {
        const userLoc = localStorage.getItem('user')
        if (userLoc) {
            return JSON.parse(userLoc)
        }
        return null
    }

    setUser(user) {
        localStorage.setItem('user', JSON.stringify(user))
    }

renderUser(user) {
  this.form.style.display = "none"

  if (!this.blockEl) {
    this.blockEl = document.createElement('div')
    this.blockEl.classList.add('welcome-card')

    this.textEl = document.createElement('span')
    this.blockEl.append(this.textEl)

    this.body.append(this.blockEl)
  }

  this.textEl.textContent = `Привет, ${user.username}!`
}

    renderGuest() {
        this.form.style.display = ""

        if (this.blockEl) {
            this.blockEl.style.display = "none"
        }
    }

    checkAuth() {
        const user = this.getUser()

        if (user) {
            this.renderUser(user)
        } else {
            this.renderGuest()
        }
    }
}