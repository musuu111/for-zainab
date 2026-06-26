function checkPassword() {

    let pass = document.getElementById("password").value;

    if(pass === "2512"){

        window.location.href = "home.html";

    }else{

        document.getElementById("message").innerHTML = "❌ Wrong Password";

    }

}
