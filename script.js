// function register() {
//   let name = document.getElementById("regName").value;
//   let pass = document.getElementById("regPass").value;
//   let pass2 = document.getElementById("regPass2").value;

//   if (!name || !pass) {
//     alert("Iltimos toldiring!");
//     return;
//   }

//   if (pass !== pass2) {
//     alert("Parollar bir xil emas!");
//     return;
//   }

//   localStorage.setItem("username", name);
//   localStorage.setItem("password", pass);

//   alert("Royxatdan muvaffaqiyatli otdingiz!");
//   window.location.href = "login.html";
// }


// function login() {
//   let name = document.getElementById("loginName").value;
//   let pass = document.getElementById("loginPass").value;

//   let savedName = localStorage.getItem("username");
//   let savedPass = localStorage.getItem("password");

//   if (name === savedName && pass === savedPass) {
//     window.location.href = "welcome.html";
//   } else {
//     alert("Ism yoki parol notogri!");
//   }
// }

// function Welcome() {
//   let username = localStorage.getItem("username");
//   localStorage.removeItem("password");
//   if (username) {
//     document.getElementById("welcome").innerText = "Salom, " + username + "!";
//   }else{
//     window.location.href = "register.html";
//   }
// }

// function logout() {
//   localStorage.removeItem("username");
//   localStorage.removeItem("password");
//   window.location.href = "register.html";
// }




// function changeTheme() {









