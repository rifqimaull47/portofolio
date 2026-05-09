// Navbar effect

window.addEventListener("scroll", () => {

  const nav = document.querySelector("nav");

  if(window.scrollY > 50){
    nav.style.background = "#0f172a";
  } else {
    nav.style.background = "rgba(15,23,42,0.7)";
  }

});


// Scroll animation

const cards = document.querySelectorAll(".project-card, .skill");

cards.forEach(card => {

  card.style.opacity = "0";
  card.style.transform = "translateY(40px)";
  card.style.transition = "0.6s";

});

window.addEventListener("scroll", () => {

  cards.forEach(card => {

    const top = card.getBoundingClientRect().top;

    if(top < window.innerHeight - 100){
      card.style.opacity = "1";
      card.style.transform = "translateY(0)";
    }

  });

});

