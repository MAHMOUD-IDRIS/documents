function CTHm(){
 // adding the certificate 
 let mainDiv = document.querySelector('main');

 function addQulification (certificateName ,certificateSrc,description = certificateName){
 const quali = document.createElement('div');
 quali.className = 'qualificationContainer';

 const img = document.createElement('img');
 const title = document.createElement('div');
 let destitle = document.createElement('h3');
 const paragraphDescription = document.createElement('p');
 paragraphDescription.innerText = description;

 
 title.className = "des";

 destitle.textContent = certificateName;
 title.appendChild(destitle);
 title.appendChild(paragraphDescription);
 
     
 img.src = certificateSrc;
 quali.appendChild(img);
 quali.appendChild(title);
 
 mainDiv.appendChild(quali);

 function visib (ele){
     setTimeout(
         ()=>{
            title.style.visibility = "visible";
     console.log('I worked!') 
         }, 5000
     )
 }
 title.onclick = (ele) => {
     console.log(ele);
     title.style.visibility = "hidden";
     visib(ele);
 }
 
};

//console.log('endFile')
//fetching the json file

 fetch ('json.json').then(res => res.json()).then (
 data => {
     console.log(data.certificates)
     data.certificates.forEach(element => {
         addQulification(element.name, element.src, element.description)
     });
 }) .catch ((e)=>console.log(e.message));
// end of adding certificate file;

// event listners for view




};
CTHm();