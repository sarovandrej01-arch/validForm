export default class ProfileManager {
  constructor({ loginEl, emailEl, redirectUrl }) {
    this.loginEl = loginEl
    this.emailEl = emailEl
    this.redirectUrl = redirectUrl
  }
  getUser() {
    const userLoc = window.localStorage.getItem('user')
    if (!userLoc) return null
    return JSON.parse(userLoc)
  }
  redirectIfNotAuth(){
    if(!this.getUser()){
        window.location.assign(`${this.redirectUrl}`)
    }
  }
  renderUser(user){
    this.loginEl.textContent = user.username
    this.emailEl.textContent = user.email
  }
  init() {
    const user = this.getUser()

    if (!user) {
      window.location.assign(this.redirectUrl)
    } else {
      this.renderUser(user)
    }
  }
  logout(){
    window.localStorage.removeItem('user')
    window.location.assign("index.html")
  }
}