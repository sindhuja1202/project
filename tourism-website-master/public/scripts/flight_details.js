let db = firebase.firestore();
let storageRef = firebase.storage().ref("/post");
var count = 0;
let d = localStorage.getItem('destinations');
let date = localStorage.getItem('dates');
let c = localStorage.getItem('seats');


document.addEventListener('DOMContentLoaded', function() {

    db.collection(localStorage.getItem('searchflight') + "-flight").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            if (d == (doc.data().dest)) {
                let destination = document.getElementById("des" + count.toString());
                let pr = document.getElementById("prices" + count.toString());
                let flightname = document.getElementById("name" + count.toString());
                let tim = document.getElementById("ti" + count.toString());
                let butn = document.getElementById("b" + count.toString());

                let cc= doc.data().availability[date];
                if (count < 1) {
                    if (parseInt(cc) >=c ) {
                        destination.innerHTML = doc.data().dest;
                        pr.innerHTML = doc.data().price;
                        flightname.innerHTML = doc.data().name;
                        tim.innerHTML = doc.data().time;
                        butn.innerHTML = "Book";
                    }
                    else {
                        destination.innerHTML = doc.data().dest;
                        pr.innerHTML = doc.data().price;
                        flightname.innerHTML = doc.data().name;
                        tim.innerHTML = doc.data().time;
                        butn.innerHTML = "Not Available";
                    }



                } else {

                    let colelement = document.createElement('div');
                    let bgd = document.createElement('div');
                    let bod = document.createElement('div');
                    let dest = document.createElement('div');
                    let destin = document.createElement('h3');


                    let pri = document.createElement('div');
                    let pric = document.createElement('h4');
                    let na = document.createElement('div');
                    let nam = document.createElement('h4');
                    let time = document.createElement('div');
                    let times = document.createElement('h5');
                    let btn = document.createElement('button');

                    let cc= doc.data().availability[date];
                    if (parseInt(cc) >c ){
                        document.getElementById('mainelement').appendChild(colelement);
                        colelement.setAttribute('id', 'col' + count.toString());
                        colelement.setAttribute('class', 'card-columns');
                        document.getElementById('col' + count.toString()).appendChild(bgd);
                        bgd.setAttribute('id', 'bg' + count.toString());
                        bgd.setAttribute('class', 'card bg-light');
                        document.getElementById('bg' + count.toString()).appendChild(bod);
                        bod.setAttribute('id', 'body' + count.toString());
                        bod.setAttribute('class', 'card-body');
                        document.getElementById('body' + count.toString()).appendChild(dest);
                        dest.setAttribute('id', 'des' + count.toString());
                        dest.setAttribute('class', 'f-dest');
                        document.getElementById('des' + count.toString()).appendChild(destin);
                        document.getElementById('des' + count.toString()).innerHTML = doc.data().dest;

                        document.getElementById('body' + count.toString()).appendChild(pri);
                        pri.setAttribute('id', 'prices' + count.toString());
                        pri.setAttribute('class', 'price');
                        document.getElementById('prices' + count.toString()).appendChild(destin);
                        document.getElementById('prices' + count.toString()).innerHTML = doc.data().price;
                        document.getElementById('body' + count.toString()).appendChild(na);
                        na.setAttribute('id', 'name' + count.toString());
                        na.setAttribute('class', 'f-name');
                        document.getElementById('name' + count.toString()).appendChild(nam);
                        document.getElementById('name' + count.toString()).innerHTML = doc.data().name;
                        document.getElementById('body' + count.toString()).appendChild(time);
                        time.setAttribute('id', 'ti' + count.toString());
                        time.setAttribute('class', 'time');
                        document.getElementById('ti' + count.toString()).appendChild(times);
                        document.getElementById('ti' + count.toString()).innerHTML = doc.data().time;
                        document.getElementById('body' + count.toString()).appendChild(btn);
                        btn.setAttribute('id', 'b' + count.toString());
                        btn.setAttribute('class', 'btn btn-primary btn-block');
                        btn.setAttribute('onclick','booking(this.innerHTML)');
                        btn.innerHTML = "Book";
                    }
                    else{
                        document.getElementById('mainelement').appendChild(colelement);
                        colelement.setAttribute('id', 'col' + count.toString());
                        colelement.setAttribute('class', 'card-columns');
                        document.getElementById('col' + count.toString()).appendChild(bgd);
                        bgd.setAttribute('id', 'bg' + count.toString());
                        bgd.setAttribute('class', 'card bg-light');
                        document.getElementById('bg' + count.toString()).appendChild(bod);
                        bod.setAttribute('id', 'body' + count.toString());
                        bod.setAttribute('class', 'card-body');
                        document.getElementById('body' + count.toString()).appendChild(dest);
                        dest.setAttribute('id', 'des' + count.toString());
                        dest.setAttribute('class', 'f-dest');
                        document.getElementById('des' + count.toString()).appendChild(destin);
                        document.getElementById('des' + count.toString()).innerHTML = doc.data().dest;

                        document.getElementById('body' + count.toString()).appendChild(pri);
                        pri.setAttribute('id', 'prices' + count.toString());
                        pri.setAttribute('class', 'price');
                        document.getElementById('prices' + count.toString()).appendChild(destin);
                        document.getElementById('prices' + count.toString()).innerHTML = doc.data().price;
                        document.getElementById('body' + count.toString()).appendChild(na);
                        na.setAttribute('id', 'name' + count.toString());
                        na.setAttribute('class', 'f-name');
                        document.getElementById('name' + count.toString()).appendChild(nam);
                        document.getElementById('name' + count.toString()).innerHTML = doc.data().name;
                        document.getElementById('body' + count.toString()).appendChild(time);
                        time.setAttribute('id', 'ti' + count.toString());
                        time.setAttribute('class', 'time');
                        document.getElementById('ti' + count.toString()).appendChild(times);
                        document.getElementById('ti' + count.toString()).innerHTML = doc.data().time;
                        document.getElementById('body' + count.toString()).appendChild(btn);
                        btn.setAttribute('id', 'b' + count.toString());
                        btn.setAttribute('class', 'btn btn-primary btn-block');
                        btn.setAttribute('onclick','booking(this.innerHTML)');
                        btn.innerHTML = "Not Available";
                    }
                }
                count++;
            }
        });
    });
});
function booking(val) {
    if(val=='Book'){
        alert('Redirecting for payment');
    }
    else{
        alert("Seats not available");
    }
    location.href="payment.html";
}

document.getElementById('pay').addEventListener('click',function () {
   alert('Successfully Booked!!');
   location.href="places.html";
});