function setDate(){
    document.getElementById('date').innerHTML=Date();
  }

function myFunction() {
  var x =
  document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";    
  } else {
    x.style.display = "block";
  }
}

function openNav() {
  document.getElementById("myNav").style.height="100%";
}

function closeNav() {
  document.getElementById("myNav").style.height="0%";
}