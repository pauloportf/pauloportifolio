// Animar a minha logo
const logo = document.querySelector(".logo");
logo.addEventListener("mouseover", () => {
  logo.classList.toggle("animate__bounce");
});

// Animar meus quadros no sobre mim
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

// Animar cartão react
const react = document.querySelector(".react");
react.addEventListener("mouseover", () => {
  const reactstyle = document.querySelector(".react");
  reactstyle.style.backgroundColor = "#61DAFB";
  reactstyle.style.color = "#060606";
  reactstyle.style.cursor = "pointer";
  reactstyle.style.fontSize = "20px";

  react.classList.toggle("animate__pulse");
  react.innerHTML = "<h3>ReactJS</h3>";
});

react.addEventListener("mouseout", () => {
  react.classList.toggle("animate__pulse");
  react.innerHTML =
    '<img src="./IMG/icons/react.svg" width="100px" height="100px" alt="react"></img>';

  const reactstyle = document.querySelector(".react");
  reactstyle.style.backgroundColor = "#fff";
  reactstyle.style.transition = "0.8s ease";
});

const sass = document.querySelector(".sass");
sass.addEventListener("mouseover", () => {
  const sassstyle = document.querySelector(".sass");
  sassstyle.style.backgroundColor = "#CC6699";
  sassstyle.style.color = "#F5F5F5";
  sassstyle.style.cursor = "pointer";
  sassstyle.style.fontSize = "20px";

  sass.classList.toggle("animate__pulse");
  sass.innerHTML = "<h3>SCSS</h3>";
});

sass.addEventListener("mouseout", () => {
  sass.classList.toggle("animate__pulse");
  sass.innerHTML =
    '<img src="./IMG/icons/sass.svg" width="100px" height="100px" alt="sass"></img>';

  const sassstyle = document.querySelector(".sass");
  sassstyle.style.backgroundColor = "#fff";
  sassstyle.style.transition = "0.8s ease";
});

const bootstrap = document.querySelector(".bootstrap");
bootstrap.addEventListener("mouseover", () => {
  const bootstrapstyle = document.querySelector(".bootstrap");
  bootstrapstyle.style.backgroundColor = "#7952B3";
  bootstrapstyle.style.color = "#F5F5F5";
  bootstrapstyle.style.cursor = "pointer";
  bootstrapstyle.style.fontSize = "20px";

  bootstrap.classList.toggle("animate__pulse");
  bootstrap.innerHTML = "<h3>Bootstrap</h3>";
});

bootstrap.addEventListener("mouseout", () => {
  bootstrap.classList.toggle("animate__pulse");
  bootstrap.innerHTML =
    '<img src="./IMG/icons/bootstrap.svg" width="100px" height="100px" alt="bootstrap"></img>';

  const bootstrapstyle = document.querySelector(".bootstrap");
  bootstrapstyle.style.backgroundColor = "#fff";
  bootstrapstyle.style.transition = "0.8s ease";
});

const tailwind = document.querySelector(".tailwind");
tailwind.addEventListener("mouseover", () => {
  const tailwindstyle = document.querySelector(".tailwind");
  tailwindstyle.style.backgroundColor = "#38B2AC";
  tailwindstyle.style.color = "#F5F5F5";
  tailwindstyle.style.cursor = "pointer";
  tailwindstyle.style.fontSize = "20px";

  tailwind.classList.toggle("animate__pulse");
  tailwind.innerHTML = "<h3>Tailwind</h3>";
});

tailwind.addEventListener("mouseout", () => {
  tailwind.classList.toggle("animate__pulse");
  tailwind.innerHTML =
    '<img src="./IMG/icons/tailwindcss.svg" width="100px" height="100px" alt="tailwind"></img>';

  const tailwindstyle = document.querySelector(".tailwind");
  tailwindstyle.style.backgroundColor = "#fff";
  tailwindstyle.style.transition = "0.8s ease";
});

const javascript = document.querySelector(".javascript");
javascript.addEventListener("mouseover", () => {
  const javascriptstyle = document.querySelector(".javascript");
  javascriptstyle.style.backgroundColor = "#F7DF1E";
  javascriptstyle.style.color = "#060606";
  javascriptstyle.style.cursor = "pointer";
  javascriptstyle.style.fontSize = "20px";

  javascript.classList.toggle("animate__pulse");
  javascript.innerHTML = "<h3>JavaScript</h3>";
});

javascript.addEventListener("mouseout", () => {
  javascript.classList.toggle("animate__pulse");
  javascript.innerHTML =
    '<img src="./IMG/icons/javascript.svg" width="100px" height="100px" alt="javascript"></img>';

  const javascriptstyle = document.querySelector(".javascript");
  javascriptstyle.style.backgroundColor = "#fff";
  javascriptstyle.style.transition = "0.8s ease";
});

const python = document.querySelector(".python");
python.addEventListener("mouseover", () => {
  const pythonstyle = document.querySelector(".python");
  pythonstyle.style.backgroundColor = "#3776AB";
  pythonstyle.style.color = "#F5F5F5";
  pythonstyle.style.cursor = "pointer";
  pythonstyle.style.fontSize = "20px";

  python.classList.toggle("animate__pulse");
  python.innerHTML = "<h3>Python</h3>";
});

python.addEventListener("mouseout", () => {
  python.classList.toggle("animate__pulse");
  python.innerHTML =
    '<img src="./IMG/icons/python.svg" width="100px" height="100px" alt="python"></img>';

  const pythonstyle = document.querySelector(".python");
  pythonstyle.style.backgroundColor = "#fff";
  pythonstyle.style.transition = "0.8s ease";
});

const java = document.querySelector(".java");
java.addEventListener("mouseover", () => {
  const javastyle = document.querySelector(".java");
  javastyle.style.backgroundColor = "#F89820";
  javastyle.style.color = "#F5F5F5";
  javastyle.style.cursor = "pointer";
  javastyle.style.fontSize = "20px";

  java.classList.toggle("animate__pulse");
  java.innerHTML = "<h3>Java</h3>";
});

java.addEventListener("mouseout", () => {
  java.classList.toggle("animate__pulse");
  java.innerHTML =
    '<img src="./IMG/icons/java.svg" width="100px" height="100px" alt="java"></img>';

  const javastyle = document.querySelector(".java");
  javastyle.style.backgroundColor = "#fff";
  javastyle.style.transition = "0.8s ease";
});
