let db=firebase.firestore();
let source=document.getElementById('source');
let destiny=document.getElementById('destiny');
let date=document.getElementById('date');
let pplcount=document.getElementById('ticketscount');

document.getElementById('searchflight').addEventListener('click',function () {

    db.collection(source.value+'-flight').get().then(function(querySnapshot){
        querySnapshot.forEach(function (doc) {

            if(destiny.value==(doc.data().dest)){
                let d=document.getElementById('date').value;
                let arr=d.split("/");
                let dd=arr[0];
                let place=document.getElementById("source").value;
                let destin=document.getElementById("destiny").value;
                let count=document.getElementById("ticketscount").value;
                place=place.toLowerCase();

                localStorage.clear();
                localStorage.setItem("searchflight",place);
                localStorage.setItem("destinations",destin);
                localStorage.setItem("dates",dd);
                localStorage.setItem("seats",count);
                location.href="flight_details.html";
            }


        });
    });

});