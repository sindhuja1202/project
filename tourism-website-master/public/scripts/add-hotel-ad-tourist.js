let db=firebase.firestore();
let imageArray=[];
let storageRef=firebase.storage().ref("post/");
let imagenameArray=[];
let selectedFiles, numberOfFiles = 0;
let state=document.getElementById("state");
let name=document.getElementById("hotel-name");
let desc=document.getElementById("hotel-desc");
let price=document.getElementById("price");
let rooms=document.getElementById("rooms");
let arooms=document.getElementById("arooms");
document.getElementById("post").addEventListener('click',function (){

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

                count++;
                if(count === numberOfFiles)
                    sendData();
            });
        });
    }
});
function sendData() {
    db.collection((state.value)+"-hotel").add({
        name:name.value,
        description:desc.value,
        price:price.value,
        image:imageArray,
        imageName:imagenameArray,
        TotalRooms:rooms.value,
        AvailableRooms:arooms.value,
        rating:0,
    });
}
function phoneContentChange(val){
    document.getElementById("phone_content").innerHTML=val;}
function phoneStateChange(val){
    document.getElementById("phone_state").innerHTML=val;}

function phoneTitleChange(val){
    document.getElementById("phone_title").innerHTML=val;}
