// Cek apakah sudah login
    if (localStorage.getItem("isLoggedIn") === "true") {
        window.location.href = "home.html";
    }



var a;
function pass(){
    if(a==1){
        document.getElementById('password').type='password';
        document.getElementById('pass-icon').src='nimbus_eye-off.png';
        a=0;
    }
    else{
        document.getElementById('password').type='text';
        document.getElementById('pass-icon').src='eye 1.png';
        a=1;
    }
}