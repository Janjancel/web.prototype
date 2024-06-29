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



// Get the navigation links and sections
const navLinks = document.querySelectorAll('nav ul li a');
const sections = document.querySelectorAll('section');

// Add an event listener to the window scroll event
window.addEventListener('scroll', () => {
  // Get the current scroll position
  const scrollPosition = window.scrollY;

  // Loop through the sections and find the one that is currently in view
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      // Remove the active class from all links
      navLinks.forEach((link) => link.classList.remove('active'));

      // Add the active class to the current link
      navLinks[index].classList.add('active');
    }
  });
});
