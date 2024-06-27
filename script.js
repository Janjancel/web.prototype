 // Function to open a tab
 function openTab(tabName) {
    // Hide all tab panes
    document.querySelectorAll('.tab-pane').forEach((pane) => {
        pane.classList.remove('active');
    });

    // Show the selected tab pane
    document.getElementById(tabName).classList.add('active');
    }





var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length} ;
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}
