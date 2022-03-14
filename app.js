const password1 = document.getElementById('password1')
const password2 = document.getElementById('password2')
const passwordMatch = document.getElementById('password-match')
const formEl = document.getElementById('form')
const date = document.getElementById('date')


formEl.addEventListener('input', () => {
   
    if(password1.value === password2.value){
        
        passwordMatch.style.visibility = 'hidden'
    }else{
       
        passwordMatch.style.visibility = 'visible'
    }
})

date.innerText = new Date().getFullYear()