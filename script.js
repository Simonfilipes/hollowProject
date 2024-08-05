const obs = new IntersectionObserver((entries) => {
  console.log(`1`);
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      entry.target.classList.add("notHiden");
      entry.target.classList.remove("hiden");
    }
  });
});

const elements = document.querySelectorAll(".hiden");

elements.forEach((element) => obs.observe(element));
