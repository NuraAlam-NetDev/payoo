
document.getElementById("login-btn").addEventListener("click", function(){
    

    //  Enter a mobile number
const numberInput = document.getElementById("input-number")
const contactNumber = numberInput.value;
console.log(contactNumber)
// Enter a pin number
const inputPin = document.getElementById("input-pin")
const pin = inputPin.value;
console.log(pin)

// match mobile number  pin
if(contactNumber=="01955988774" && pin=="0909"){
    alert("Login successfully")
    window.location.assign("/home.html")
}
else{
    alert("invalid")
    return
}
// login clicked 

})


