export default class FormSender{
    constructor({form,url,method}){
        this.form = form
        this.url = url
        this.method = method || "POST"
    }
    getFormData(){
        const formData = new FormData(this.form)
        const formObj = {}
        for(const [key,value] of formData.entries()){
            formObj[key] = value
        }
        return formObj
    }
    async send(data){
        try{
            const response = await fetch(this.url,{
                method: this.method ,
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            })
            if(!response.ok){
                throw new Error(`HTTP error! status: ${response.status}`)                    
            }
        const dataResp = await response.json()
        return dataResp
        }catch(err){
            console.error("Ошибка данных при регистрации",err)
            throw err
        }
    }
    async submit(){
       return this.send(this.getFormData())
    }

}