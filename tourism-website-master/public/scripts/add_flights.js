let db=firebase.firestore();
let name=document.getElementById("airname");
let dest=document.getElementById("dest");
let source=document.getElementById("source");
let seats=document.getElementById("seats");
let time=document.getElementById("time");
let availability=[];

document.getElementById("post").addEventListener('click',function (){
    for(var i=0;i<=30;i++){
        availability.push(seats.value);
    }
                    sendData();
});
function sendData() {

    db.collection((source.value)+"-flight").add({
        name:name.value,
        dest:dest.value,
        availability:availability,
        seats:seats.value,
        time:time.value,
   });
}
function phoneContentChange(val){
    document.getElementById("phone_content").innerHTML=val;}
function phoneStateChange(val){
    document.getElementById("phone_state").innerHTML=val;}

function phoneTitleChange(val){
    document.getElementById("phone_title").innerHTML=val;}
