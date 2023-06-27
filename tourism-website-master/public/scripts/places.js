let db=firebase.firestore();
let storageRef = firebase.storage().ref("post/");
var starsRef ;
let count=0;
document.addEventListener('DOMContentLoaded',function() {

    db.collection("topvacation").get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            if (count < 10) {
                let imgurl = document.getElementById("lisimage" + count.toString());
                let placename=document.getElementById("place-name"+count.toString());
                let placedesc=document.getElementById("lis-desc"+count.toString());
                starsRef = storageRef.child(doc.data().imageName[0]);
                placename.innerHTML=doc.data().title;
                placedesc.innerHTML=doc.data().description;
                starsRef.getDownloadURL().then(function (url) {
                    imgurl.src = url;
                }).catch(function (error) {
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case 'storage/object-not-found':
                            // File doesn't exist
                            break;
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;
                        case 'storage/canceled':
                            // User canceled the upload
                            break;
                        case 'storage/unknown':
                            // Unknown error occurred, inspect the server response
                            break;
                    }
                });
            }
            count++;
        });
    });
});

document.getElementById("searchplace").addEventListener('click',function () {
    let place=document.getElementById("place").value;
    place=place.toLowerCase();
    localStorage.clear();
    localStorage.setItem("searchplace",place);
    location.href="tourist-spot.html";
});