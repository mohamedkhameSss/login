
import { passSignUp, passSignIn, buttonSignIn, emailSignIn, emailSignUp,  keyupEmail, keyupPass, passValid, emailValid } from "./validationModule.js"

let buttonSignUp = document.getElementById('signUpButton')
let nameSignUp = document.getElementById('signUpName')
let nameSignIn = document.getElementById('signInName')
let signupSmallBtn = document.getElementById('signupBtn')
let divSignIn= document.getElementById("signinDiv")
let signInSmallBtn= document.getElementById("signInBtn")
let signUpDiv= document.getElementById("signUpDiv")
let inputs = document.querySelectorAll('input')
let userAccess=[];
if (JSON.parse(localStorage.getItem('userInfoList')) !==null) {
    userAccess=JSON.parse(localStorage.getItem('userInfoList'))
}
keyupEmail;
keyupPass;
signupSmallBtn.onclick=function () {
    signinCick();
    clearInputs();
}
signInSmallBtn.onclick=function () {
    signupClick()
    clearInputs();  
}
buttonSignIn.onclick= function () {
    LoginData()
}
buttonSignUp.onclick= function () {
    if (emailValid.test(emailSignUp.value) && passValid.test(passSignUp.value)) {   
        setData();
        clearInputs();
        
    }else {
        clearInputs();
    }

}
function setData() {
    let user={
        name:nameSignUp.value,
        password:passSignUp.value,
        email:emailSignUp.value
    }
    userAccess.push(user)
    localStorage.setItem('userInfoList',JSON.stringify(userAccess))
}
function LoginData() {
    let user= {
        email:emailSignIn.value,
        password:passSignIn.value
    }
        let storObject = JSON.parse(localStorage.getItem('userInfoList'));  
        for (let i = 0; i < storObject.length; i++) {
        let y = new Map(Object.entries(storObject[i]))
        // console.log(storObject[i]);
        // console.log(y);
        // y.get("password")
        if (user.email ==y.get("email")&& user.password == y.get("password")) {
            buttonSignIn.href ="welcom.html"
        }else{
            alertRed.classList.remove(`d-none`)
        }
    }
}
function signinCick(){
divSignIn.classList.add("d-none")
signUpDiv.classList.replace("d-none","d-block")
}
function signupClick() {
    divSignIn.classList.replace("d-none","d-block")
    signUpDiv.classList.add("d-none")
}
function clearInputs() {
    for (let i = 0; i < inputs.length; i++) {
    inputs[i].value="";
    
    }
}


