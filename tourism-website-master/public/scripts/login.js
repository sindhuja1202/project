let db=firebase.firestore();
var email=document.getElementById("email");
var password=document.getElementById("password");
firebase.auth().onAuthStateChanged(function (user) {
    if(user){
        document.getElementById("butt").style.visibility="hidden";
        alert("logged in");
    }
    else{
        document.getElementById("butt").style.visibility="visible";

    }

});
document.getElementById("butt").addEventListener('click',function () {
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value).then(function(){
        alert("successfully registered");
    }).catch(function (error) {
        // Handle Errors here.
        alert(error.code);
        if(error.code=="auth/email-already-in-use"){
            firebase.auth().signInWithEmailAndPassword(email.value,password.value).then(function(){
                alert("Successfully logged in");
            });
        }
        // ...
    });
});
document.getElementById("signout").addEventListener('click',function () {
    firebase.auth().signOut().then(function () {
        alert("logged out");
    }) ;
});
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        items: 1
    });
});

/*
document.getElementById("butt").addEventListener('click',function () {
    alert(email.value);
    firebase.auth().createUserWithEmailAndPassword(email.value, password.value).catch(function(error) {
        // Handle Errors here.
        alert(error.message);
        // ...
    });



});*/


