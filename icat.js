var colors = ['#007bff', '#28a745',]

function mode(){
   var randomIndex = Math.floor(Math.random() * colors.length);
   var selectedcolor = colors [randomIndex];
   document.body.style.backgroundColor = selectedcolor;
}
