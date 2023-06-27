firebase.auth().onAuthStateChanged(function (user) {
    if(user){
        document.getElementById("loginpage").innerHTML="LOGOUT";
    }
    else{
        document.getElementById("loginpage").innerHTML="LOGIN";

    }

});

document.getElementById('loginpage').addEventListener('click',function () {
    if(document.getElementById('loginpage').innerHTML=="LOGIN"){
        location.href='login.html';
    }
    else{
        firebase.auth().signOut().then(function () {
            alert("logged out");
        }) ;
    }
});