//javascript file


document.getElementById('menu').addEventListener('click', event => {

    let sidebar = document.getElementById('navbar');
    let hamburger = document.getElementById('menu');
    let sidebarWidth = sidebar.getBoundingClientRect().width;

    event.preventDefault();
    sidebar.classList.toggle('transform-off');

    hamburger.style.transform = hamburger.style.transform ? '' : 'translate3d(-' + sidebarWidth + 'px, 0, 0)';
})

let content = document.querySelectorAll('.content')
for(let i = 0; i < content.length; i++){
  content[i].addEventListener('click', event => {
    document.getElementById('menu').style.transform = ''
    document.getElementById('navbar').classList.add('transform-off')
  })
}


/*
for fixed header onScroll().
*/
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("mainNav");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
