document.querySelector("#Join").addEventListener("click", joinFunc)
let arr = JSON.parse(localStorage.getItem("userList")) || []


function joinFunc() {
    let Password = document.getElementById("password").value
    let ConPass = document.getElementById("confirmPass").value
    let check = document.getElementById("checker").checked

    if (check == false) {
        alert("Please Check the Terms and Conditions")
    } else {
        if (Password!=ConPass){
            alert("Password and Confirmed Password dont match")
        } else {
            JoinPhase2()
        }
    }
}

function JoinPhase2() {
    let Fname = document.getElementById("firstName").value
    let Lname = document.getElementById("lastName").value
    let Email = document.getElementById("email").value
    let Uname = document.getElementById("userName").value
    let Password = document.getElementById("password").value
    
    let obj = {
        Name: (Fname + " " + Lname),
        email: Email,
        userName: Uname,
        password: Password
    }
    arr.push(obj)
    localStorage.setItem("userList", JSON.stringify(arr))

    document.getElementById("firstName").value = ""
    document.getElementById("lastName").value = ""
    document.getElementById("email").value = ""
    document.getElementById("userName").value = ""
    document.getElementById("password").value = ""
    document.getElementById("confirmPass").value = ""
    document.getElementById("checker").checked = false
}