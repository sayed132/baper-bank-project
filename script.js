document.getElementById("login-btn").addEventListener('click', function(){
   const emailField = document.getElementById("email");
   const passwordField = document.getElementById("password");
   const email = emailField.value;
   const password = passwordField.value;
   console.log("email:",email, "password:",password);

   if (email === "baper@bank.com" && password === "baper chele") {
    console.log("valid user");
   }
   else{
    console.log("invalid user");
   }
})