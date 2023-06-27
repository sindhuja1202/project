let db=firebase.firestore();
let check;
document.addEventListener('DOMContentLoaded',function () {
   var mainimg=document.getElementById('mainimg');
   mainimg.src=localStorage.getItem('imgsrc');
   var fetch=localStorage.getItem('imgsrc');

   db.collection(localStorage.getItem('searchplace')+'-hotel').get().then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
          if(fetch==doc.data().image[0]){

               document.getElementById('hotel-name').innerHTML=doc.data().name;
               localStorage.setItem('name',doc.data().name);
               document.getElementById('desc').innerHTML=doc.data().description;
               document.getElementById('address').innerHTML=doc.data().address;
               document.getElementById('price').innerHTML=doc.data().price;
               localStorage.setItem('name',doc.data().name);
               for(var i=0;i<doc.data().rating;i++) {
                   let star = document.createElement('li');
                   document.getElementById('rating').appendChild(star);
                   star.setAttribute('class', 'fa fa-star');
               }
               for(var i=doc.data().rating;i<5;i++){
                   let star = document.createElement('li');
                   document.getElementById('rating').appendChild(star);
                   star.setAttribute('class', 'fa fa-star-o');
               }

          }
      }) ;
   });
});
document.getElementById('checking').addEventListener('click',function () {
    let from = document.getElementById('from');
    check = 0;
    let array = [];
    let i;
    let todate = document.getElementById('todate');
    let roomscount = document.getElementById('rooms');
    let varia = document.getElementById('checking').innerHTML;
    if (varia == 'BOOK') {
        firebase.auth().onAuthStateChanged(function (user) {
            if(user  ){
                db.collection(localStorage.getItem('searchplace') + '-hotel').get().then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        if (localStorage.getItem('name') == doc.data().name) {
                            for (i = parseInt(from.value) - 1; i <= parseInt(todate.value) - 1; i++) {
                                if (doc.data().availability[i] < roomscount.value) {
                                    check = 1;
                                    alert("Rooms Not available!!!");
                                    break;
                                }
                            }
                            display();
                        }

                    });
                });
            }
            else{

                alert("Login to make booking!!");
                document.getElementById('checking').innerHTML="BOOK";
            }

        });

    } else if(varia=="Confirm Booking") {
        firebase.auth().onAuthStateChanged(function (user) {
            if(user){
                let array=[];
                db.collection(localStorage.getItem('searchplace') + '-hotel').get().then(function (querySnapshot) {
                    querySnapshot.forEach(function (doc) {
                        if (localStorage.getItem('name') == doc.data().name) {
                            for(i=0;i<parseInt(from.value)-1;i++){
                                array.push(doc.data().availability[i]);
                            }
                            for(i=parseInt(from.value)-1;i<=parseInt(todate.value)-1;i++){
                                array.push((doc.data().availability[i])-roomscount.value);
                            }
                            for(i=parseInt(todate.value);i<30;i++){
                                array.push(doc.data().availability[i]);
                            }
                            db.collection(localStorage.getItem('searchplace') + '-hotel').doc(doc.id).update({
                                availability:array,
                            }).then(function () {
                                alert('Booking Confirmed!!!');
                                document.getElementById('checking').innerHTML="Booked";
                                document.getElementById('checking').style.background="green";
                            });
                        }
                    });
                });
            }
            else{

                alert("Login to make booking!!");
            }

        });
    }
});


function display() {
    if(check==0){
        alert('Hurray!!Rooms Available, Booking can be made..');
        document.getElementById('checking').innerHTML="Confirm Booking";
    }
}
function touristpage(val){
    alert(val);
}
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