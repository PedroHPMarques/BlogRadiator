var modal4 = document.getElementById("modal-add");

var btn = document.getElementById("botao-add");

var span = document.getElementsByClassName("botaoo")[0];

 
btn.onclick = function() {
  modal4.style.display = "block";
}


span.onclick = function() {
  modal4.style.display = "none";
}


window.addEventListener('click', function (event) {
    console.log(modal4);
    console.log(event.target);
    if (event.target == modal4) {
      modal4.style.display = "none";
    }
  });   