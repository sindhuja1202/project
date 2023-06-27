let db=firebase.firestore();
let storageRef=firebase.storage().ref("/post");
var count=0;
var rowcount=1;
document.addEventListener('DOMContentLoaded',function () {

      db.collection(localStorage.getItem('searchplace')+"-touristSpot").get().then(function (querySnapshot) {
              querySnapshot.forEach(function (doc) {
                  var imgurl=document.getElementById("image"+count.toString());
                  let spotName=document.getElementById("tou-name"+count.toString());
                  let spotdesc=document.getElementById("tou-desc"+count.toString());
                  let imageRef=storageRef.child(doc.data().imageName[0]);
                  if(count<6){

                      spotName.innerHTML=doc.data().title;
                      spotdesc.innerHTML=doc.data().description;
                      for(var i=0;i<doc.data().rating;i++){
                          let rating=document.createElement('li');
                          document.getElementById('review'+count.toString()).appendChild(rating);
                          rating.setAttribute("class","fa fa-star");
                      }
                      for(var i=doc.data().rating;i<5;i++){
                          let rating=document.createElement('li');
                          document.getElementById('review'+count.toString()).appendChild(rating);
                          rating.setAttribute("class","fa fa-star-o");
                      }
                      imageRef.getDownloadURL().then(function (url) {
                          imgurl.src = url;
                      }).catch(function (error) {
                          switch (error.code) {
                              case 'storage/object-not-found':
                                  // File doesn't exist
                                  break;
                          }
                      });
                  }
                  else{
                      var c=count/3;
                      if(count%3==0){
                          rowcount++;
                          let element=document.createElement('div');
                          let colelement=document.createElement('div');
                          let imgelement=document.createElement('img');
                          let imgdi=document.createElement('div');
                          let rat=document.createElement('div');
                          let header=document.createElement('h5');
                          let desc=document.createElement('div');
                          let descpara=document.createElement('p');
                          document.getElementById('mainelement').appendChild(element);
                          element.setAttribute('id','row'+rowcount.toString());
                          element.setAttribute('class','row');
                          document.getElementById('row'+c.toString()).appendChild(colelement);
                          colelement.setAttribute('id','col'+count.toString());
                          colelement.setAttribute('class','col-md-4 hovereffect');
                          document.getElementById('col'+count.toString()).appendChild(imgdi);
                           imgdi.setAttribute('id','imgdi'+count.toString());
                           imgdi.setAttribute('class','h-img ');
                          document.getElementById('imgdi'+count.toString()).appendChild(imgelement);
                          imgelement.setAttribute('id','image'+count.toString());
                          imgelement.setAttribute('src','touristSpots/chennai/mgm.jpg');
                          imgelement.setAttribute('onclick','alertcheck(this.id)');
                          imageRef.getDownloadURL().then(function (url) {
                              imgelement.src = url;
                          }).catch(function (error) {
                              switch (error.code) {
                                  case 'storage/object-not-found':
                                      // File doesn't exist
                                      break;
                              }
                          });
                          document.getElementById('imgdi'+count.toString()).appendChild(rat);
                          rat.setAttribute('id','review'+count.toString());
                          rat.setAttribute('class','rating');
                          for(var i=0;i<doc.data().rating;i++){
                              let rating=document.createElement('li');
                              document.getElementById('review'+count.toString()).appendChild(rating);
                              rating.setAttribute("class","fa fa-star");
                          }
                          for(var i=doc.data().rating;i<5;i++){
                              let rating=document.createElement('li');
                              document.getElementById('review'+count.toString()).appendChild(rating);
                              rating.setAttribute("class","fa fa-star-o");
                          }
                          document.getElementById('imgdi'+count.toString()).appendChild(header);
                          header.setAttribute('id','tou-name'+count.toString());
                          header.setAttribute('class','fontstyle');
                          document.getElementById('tou-name'+count.toString()).innerHTML=doc.data().title;
                          document.getElementById('col'+count.toString()).appendChild(desc);
                          desc.setAttribute('id','tou-desc'+count.toString());
                          desc.setAttribute('class','h-details');
                          document.getElementById('tou-desc'+count.toString()).appendChild(descpara);
                          document.getElementById('tou-desc'+count.toString()).innerHTML=doc.data().description;

                      }
                      else{

                          let colelement=document.createElement('div');
                          let imgelement=document.createElement('img');
                          let imgdi=document.createElement('div');
                          let rat=document.createElement('div');
                          let header=document.createElement('h5');
                          let desc=document.createElement('div');
                          let descpara=document.createElement('p');

                          document.getElementById('row'+rowcount.toString()).appendChild(colelement);
                          colelement.setAttribute('id','col'+count.toString());
                          colelement.setAttribute('class','col-md-4 hovereffect');
                          document.getElementById('col'+count.toString()).appendChild(imgdi);
                          imgdi.setAttribute('id','imgdi'+count.toString());
                          imgdi.setAttribute('class','h-img');
                          document.getElementById('imgdi'+count.toString()).appendChild(imgelement);
                          imgelement.setAttribute('id','image'+count.toString());
                          imgelement.setAttribute('src','touristSpots/chennai/mgm.jpg');
                          imgelement.setAttribute('onclick','alertcheck(this.id)');
                          imageRef.getDownloadURL().then(function (url) {
                              imgelement.src = url;
                          }).catch(function (error) {
                              switch (error.code) {
                                  case 'storage/object-not-found':
                                      // File doesn't exist
                                      break;
                              }
                          });
                          document.getElementById('imgdi'+count.toString()).appendChild(rat);
                          rat.setAttribute('id','review'+count.toString());
                          rat.setAttribute('class','rating');
                          for(var i=0;i<doc.data().rating;i++){
                              let rating=document.createElement('li');
                              document.getElementById('review'+count.toString()).appendChild(rating);
                              rating.setAttribute("class","fa fa-star");
                          }
                          for(var i=doc.data().rating;i<5;i++){
                              let rating=document.createElement('li');
                              document.getElementById('review'+count.toString()).appendChild(rating);
                              rating.setAttribute("class","fa fa-star-o");
                          }
                          document.getElementById('imgdi'+count.toString()).appendChild(header);
                          header.setAttribute('id','tou-name'+count.toString());
                          header.setAttribute('class','fontstyle');
                          document.getElementById('tou-name'+count.toString()).innerHTML=doc.data().title;
                          document.getElementById('col'+count.toString()).appendChild(desc);
                          desc.setAttribute('id','tou-desc'+count.toString());
                          desc.setAttribute('class','h-details');
                          document.getElementById('tou-desc'+count.toString()).appendChild(descpara);
                          document.getElementById('tou-desc'+count.toString()).innerHTML=doc.data().description;
                      }
                  }
                  count++;
              });
      }) ;
});
function alertcheck(val) {
    localStorage.setItem('imgsrc',document.getElementById(val).getAttribute('src'));
    location.href="#";
}

