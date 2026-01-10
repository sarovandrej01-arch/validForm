export default class ThemeManager{
    constructor({ body, button, storageKey, darkClass, lightClass }){
        this.body = body
        this.button = button
        this.storageKey = storageKey
        this.darkClass = darkClass 
        this.lightClass = lightClass
    }
    init(){
          const savedTheme = localStorage.getItem(this.storageKey);
                this.bindEvents()
                if (savedTheme) {
                this.body.classList.add(savedTheme);
                } else {
                this.body.classList.add(this.darkClass);
                localStorage.setItem(this.storageKey, this.darkClass);
                }
        
    }
    toggle(){
        if(this.body.classList.contains(this.darkClass)){
            this.body.classList.remove(this.darkClass)
            this.body.classList.add(this.lightClass)
            localStorage.setItem(this.storageKey,this.lightClass)
        }else{
            this.body.classList.remove(this.lightClass)
            this.body.classList.add(this.darkClass)
            localStorage.setItem(this.storageKey,this.darkClass)            
        }
    }
    bindEvents() {
        this.button.addEventListener('click', () => {
            this.toggle();
        });
}
}