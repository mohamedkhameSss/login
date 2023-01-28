export let emailSignIn = document.getElementById('signInEmail') 
export let emailSignUp = document.getElementById('signUpEmail') 
export let alertRed = document.getElementById('alertRed')
export let buttonSignIn = document.getElementById('signInButton')
export let passSignIn = document.getElementById('signInPass') 
export let passSignUp = document.getElementById('signUpPassword') 
export let alertblue = document.getElementById('alertblue') 
export let alertpass = document.getElementById('alertpass') 

export var passValid=/^((?=\S*?[A-Z])(?=\S*?[a-z])(?=\S*?[0-9]).{6,})\S$/
export var emailValid =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export let keyupEmail = emailSignUp.onkeyup=function () {
    if (!(emailValid.test(emailSignUp.value))) {
        alertblue.classList.remove('d-none');
    }else{
        alertblue.classList.add('d-none');      
    }
    
}
export let keyupPass = passSignUp.onkeyup=function () {
    if (!(passValid.test(passSignUp.value))) {
        alertpass.classList.remove('d-none');
    }else{
        alertpass.classList.add('d-none');
    }
    
}

