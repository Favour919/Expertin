const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");
const socialIcons = document.querySelector('.social-icons')
navToggle.addEventListener("click", function () {
    links.classList.toggle("show-links");
});
// scroll bar
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link");

window.addEventListener("scroll", function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  // setup back to top link

  if (scrollHeight > 500) {
    console.log("helo");

    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});
// const scrollLinks = document.querySelector(".scroll-link");
// scrollLinks.forEach((link) => {
//   link.addEventListener("click", (e) => {
//     // prevent default
//     e.preventDefault();
//     // navigate to specific spot
//     const id = e.currentTarget.getAttribute("href").slice(1);
//     const element = document.getElementById(id);

//     const navHeight = navbar.getBoundingClientRect().height;
//     const containerHeight = linksContainer.getBoundingClientRect().height;
//     const fixedNav = navbar.classList.contains("fixed-nav");
//     let position = element.offsetTop - navHeight;

//     if (!fixedNav) {
//       position = position - navHeight;
//     }
//     if (navHeight > 82) {
//       position = position + containerHeight;
//     }

//     window.scrollTo({
//       left: 0,
//       top: position,
//     });
//     // close
//     linksContainer.style.height = 0;
//   });
// });

// Counter Section

const counters = document.querySelectorAll(".counter");
const speed = 1000;

counters.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target')
    const count = +counter.innerText;

    const inc = target / speed;

    if (count < target) {
      counter.innerText = Math.ceil(count + inc);
      setTimeout(updateCount, 1)
    } else {
      count.innerText = target;
    }

  }
  updateCount();
})