function checkInvalid() {
    const name = document.querySelector("name");
    const lastName = document.querySelector("last-name");
    const email = document.querySelector("email");
    const password = document.querySelector("password");
    const regexName = "/^[a-zA-Z]+ [a-zA-Z]+$/"

    if(!email || !lastName || !email || !password) {
      alert("Invalid Name, Last name, Email, or Password!");
      return;
    }
    if(!email.contains("@") || !email.contains(".")) {
      alert("Invalid Name, Last name, Email, or Password");
    }
    if(!name) {
        alert("Invalid Name, Last name, Email, or Password");
    }
    if(!regexName.test(name)) {
        alert("Invalid Name, Last name, Email, or Password");
    }
  }