window.onload = () =>{
    getCurrentImageOfTheDay()
}

function getCurrentImageOfTheDay(){
  const currentDate = new Date().toISOString().split("T")[0];
fetch(`https://api.nasa.gov/planetary/apod?date=${currentDate}&api_key=Lu1REUNJDYiCG1qilhZsb8d5cS49eThPilLWpaxD`)
.then((r)=>{
// console.log(r.json())
return r.json()})
.then((data)=>{
   document.getElementById("currentdate").innerHTML = `<h1>Picture On ${data.date}</h1>`;
   document.getElementById("current-image-container").innerHTML += 
   `<img src="${data.url}" style="width:550px"> 
   <br> 
   <h2>${data.title}</h2> 
   <p>${data.explanation}</p>
   ` ;
})
}
let dates = [] ;
function getImageOfTheDay(){
    let date = document.getElementById("search-input").value;

    fetch(`https://api.nasa.gov/planetary/apod?date=${date}&api_key=Lu1REUNJDYiCG1qilhZsb8d5cS49eThPilLWpaxD`)
.then((r)=>{
// console.log(r.json())
return r.json()})
.then((data)=>{

   document.getElementById("currentdate").innerHTML = `<h1>Picture On ${data.date}</h1>`;
   document.getElementById("current-image-container").innerHTML = 
   `<img src="${data.url}" style="width:550px"> 
   <br> 
   <h2>${data.title}</h2> 
   <p>${data.explanation}</p>
   ` ;
   
   saveSearch(date);
})
    
}
function saveSearch(date){

   dates.push(date);
   localStorage.setItem("dates",dates);

   addSearchToHistory()
}
let count = 0 ;
function addSearchToHistory(){
    let n = document.createElement("li");
    let datehistory = localStorage.dates.split(",")[count];

    n.innerHTML +=`<a href="#" onclick=fetchhistory(${count})>${datehistory}</a>`;
    count++;
    document.getElementById("search-history").appendChild(n);
}

function fetchhistory(countt){
   let historydate =  localStorage.dates.split(",")[countt]
   
    fetch(`https://api.nasa.gov/planetary/apod?date=${historydate}&api_key=Lu1REUNJDYiCG1qilhZsb8d5cS49eThPilLWpaxD`)
.then((r)=>{
// console.log(r.json())
return r.json()})
.then((data)=>{

   document.getElementById("currentdate").innerHTML = `<h1>Picture On ${data.date}</h1>`;
   document.getElementById("current-image-container").innerHTML = 
   `<img src="${data.url}" style="width:550px"> 
   <br> 
   <h2>${data.title}</h2> 
   <p>${data.explanation}</p>
   ` ;
})
    
}
document.getElementById("sumbitt").addEventListener('click', getImageOfTheDay);
