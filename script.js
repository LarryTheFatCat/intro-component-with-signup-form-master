function checkInvalid() {
    const name = document.querySelector("name");
    const lastName = document.querySelector("last-name");
    const email = document.querySelector("email");
    const password = document.querySelector("password");
    const regexName = "/^[a-zA-Z]+ [a-zA-Z]+$/"
    if (!(email && name && lastName && password) || !(email.contains("@") && email.contains(".")) || !regexName.test(name)) {
        alert("Invalid Name, Last Name, Email, Password!")
        return;
    }
}
