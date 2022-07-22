let arr = JSON.parse(localStorage.getItem("userList"))

enteredUname = document.getElementById("Uname").value
enteredPass = document.getElementById("pass").value

document.getElementById("signin").addEventListener("click", signinFunc)

function signinFunc() {
    enteredUname = document.getElementById("Uname").value
    enteredPass = document.getElementById("pass").value
    let userFound = false
    for(let i=0; i<arr.length; i++){
        console.log(arr[i]["userName"])
        if(enteredUname == arr[i]["userName"]){
            userFound = true
            if(enteredPass==arr[i]["password"]){
                alert("Sign In Successful")
            } else if (enteredPass!=arr[i]["password"]){
                alert("Wrong Password")
            }
        }
    }
    if (userFound==false) {
        alert("User not Found!")
    }
}