function openNav() {
  document.getElementById("mysidebar").style.marginRight = "0px";
}
function closeNav() {
  document.getElementById("mysidebar").style.marginRight = "-300px";
}
var d = new Date();
document.getElementById("date").innerHTML = d.getFullYear();



// fetch('index.html')
// .then(Response => Response.text())
// .then(data => {
//   document.getElementById('index-container').innerHTML = data;
// })