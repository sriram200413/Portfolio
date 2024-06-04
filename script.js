const scrollRevealOption = {
    distance: "50px",
    origin: "right",
    duration: 1000,
  };
  ScrollReveal().reveal(".container1 ,.about-img", {
    ...scrollRevealOption,
    origin: "left",
    delay: 500,
    reset:true,
  });
  ScrollReveal().reveal(".container2 ,.about-text", {
    ...scrollRevealOption,
    delay: 1000,
    reset:true,
  });