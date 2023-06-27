
let db = firebase.firestore();
let storageRef = firebase.storage().ref("post/");

let filesArray = [];
let imageArray = [];
let topic= "";
let imagenameArray=[];
let selectedFiles, numberOfFiles = 0;

document.getElementById("post").addEventListener('click',function () {
    filesArray = [];
    imageArray = [];
    imagenameArray=[];
    selectedFiles = document.getElementById("inputFile").files;
    numberOfFiles = selectedFiles.length;

    if(numberOfFiles === 0)
        sendData();

    let count = 0;
    for(let i=0; i<numberOfFiles; i++) {
        let file = selectedFiles[i];
        imagenameArray.push(file.name);
        let uploadTask = storageRef.child(file.name).put(file);

        uploadTask.on('state_changed', function(snapshot) {}, function(error) {}, function() {
            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {

                let file_index = downloadURL.indexOf("?alt");
                let file_name = downloadURL.substring(77, file_index);

                let type_index = file_name.lastIndexOf(".");
                let type_name = file_name.substring(type_index+1);

                if (type_name === "png" || type_name === "jpg" || type_name === "jpeg")
                    imageArray.push(downloadURL);
                else {
                    let fileArrayData = {"name": file_name, "url": downloadURL};
                    filesArray.push(fileArrayData);
                }

                count++;
                if(count === numberOfFiles)
                    sendData();
            });
        });
    }
});

function sendData() {
    let state=document.getElementById("state").value;
    let postTitle = document.getElementById("title").value;
    let postBody = document.getElementById("content").value;
    topic="-touristSpot";

    db.collection(state+topic).add({
        title: postTitle,
        description : postBody,
        img_urls : imageArray,
        id:"TouristSpot",
        imageName:imagenameArray,
        time :firebase.firestore.FieldValue.serverTimestamp(),

    });
}

function phoneContentChange(val){
    document.getElementById("phone_content").innerHTML=val;}

function phoneTitleChange(val){
    document.getElementById("phone_title").innerHTML=val;}
