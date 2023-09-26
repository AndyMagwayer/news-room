// const scrollUp = () => {
//   const scrollUp = document.getElementById("scroll-up");
//   this.scrollY >= 300
//     ? scrollUp.classList.add("show-scroll")
//     : scrollUp.classList.remove("show-scroll");
// };
// window.addEventListener("scroll", scrollUp);

// window.onscroll = function() {
//   scrollFunction();
// };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopButton").style.display = "block";
  } else {
    document.getElementById("scrollToTopButton").style.display = "none";
  }
}

function scrollToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}