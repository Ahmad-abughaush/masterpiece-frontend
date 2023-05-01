let arr = JSON.parse(window.localStorage.getItem("formData"))

let loginform= document.getElementById("loginform")
loginform.addEventListener("submit", (event) => {
    event.preventDefault();


    let Email = event.target.email.value
    let Password = event.target.password.value


    if (Email == arr.userEmail && Password == arr.userPassword) {
        window.location.href = "./homePage.html";
        window.sessionStorage.setItem("info", JSON.stringify(arr))

    }

    else {
        alert("We couldn't find an account matching the login info you entered");
    }


    loginform.reset()
})
