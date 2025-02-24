const logo = document.querySelector(".logo");
logo.addEventListener("mouseover", () => {
  logo.classList.toggle("animate__bounce");
});

const quadroUm = document.querySelector(".box1");
quadroUm.addEventListener("click", () => {
  quadroUm.classList.toggle("animate__hinge");

  setTimeout(() => {
    quadroUm.classList.remove("animate__hinge");
    quadroUm.classList.toggle("animate__fadeIn");
  }, 3000);
});

const quadroDois = document.querySelector(".box2");
quadroDois.addEventListener("click", () => {
  quadroDois.classList.toggle("animate__hinge");

  setTimeout(() => {
    quadroDois.classList.remove("animate__hinge");
    quadroDois.classList.toggle("animate__fadeIn");
  }, 3000);
});

const quadroTres = document.querySelector(".box3");
quadroTres.addEventListener("click", () => {
  quadroTres.classList.toggle("animate__hinge");

  setTimeout(() => {
    quadroTres.classList.remove("animate__hinge");
    quadroTres.classList.toggle("animate__fadeIn");
  }, 3000);
});
