export default class FormValidator{
    constructor(form){
        this.form = form
        this.fields = [...this.form.querySelectorAll(".form__input")]
        this.handleBlur = this.handleBlur.bind(this)
        
        this.messages = {
            required: "Поле обязательно для заполнения",
            typeMismatch: "Введите корректное значение",
            patternMismatch: "Неверный формат",
            tooShort: (min) => `Минимум ${min} символов`,
        };
    }
    init(){
        
        this.fields.forEach(element => {
            element.addEventListener("blur",this.handleBlur)
        });
    }
    handleBlur({target}){
        const validateField = this.validateField(target)
        if(validateField){
            this.manageErrors(target, "")
        }else{
            this.manageErrors(target,this.getErrorMessage(target))
        }
        
    }
    handleSubmit() {
  let isFormValid = true
  let firstInvalidField = null

  for (const element of this.fields) {
    if (!this.validateField(element)) {
      isFormValid = false
      this.manageErrors(element, this.getErrorMessage(element))
      firstInvalidField ??= element
    }
  }

  if (firstInvalidField) {
    firstInvalidField.focus()
  }

  return isFormValid
}
        validateField(field) {
        const valid = field.validity.valid
        return valid
        }
        manageErrors(field, message) {
        const fieldGroup = field.closest(".form__group")
            const formErr = fieldGroup.querySelector(".form__error")
            if(message === ""){
                fieldGroup.classList.remove("error")
                fieldGroup.classList.add("success")
                formErr.textContent = ""
                field.setAttribute("aria-invalid", "false")
            }else{
                fieldGroup.classList.add("error")
                fieldGroup.classList.remove("success")
                formErr.textContent = message  
                field.setAttribute("aria-invalid", "true") 
                        
            }
    }
        getErrorMessage(field) {
            const valid = field.validity
            if(valid.valueMissing){
                return this.messages.required
            }
            if(valid.typeMismatch){
                return this.messages.typeMismatch
            }
            if(valid.patternMismatch){
                return this.messages.patternMismatch
            }
            if(valid.tooShort){
                return this.messages.tooShort(field.minLength)
            }
            return ""
        }
}
