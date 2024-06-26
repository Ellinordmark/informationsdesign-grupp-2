// Linda Hedström (h22linhe), Ellinor Nordmark (h22ellno)

// ------------------- EVENT LISTENERS -------------------- //

// Skapa hover-funktioner för grid-items
const source1 = document.querySelector(".source-1");
const colorChange1 = document.getElementById("S1");

//SOURCE 1
function sourceFunc1() {
  const html = `<p class="source-link">Source: <a href="https://www.unep.org/news-and-stories/story/putting-brakes-fast-fashion">The European Parliament</a></p>`;
  source1.insertAdjacentHTML("beforeend", html);
  colorChange1.style.color = "#e39800";
}

function removeSource1() {
  const remove = document.querySelector(".source-link");
  remove.remove();
  colorChange1.style.color = "#a1c144";
}

source1.addEventListener("mouseleave", removeSource1);
source1.addEventListener("mouseenter", sourceFunc1);

//SOURCE 2
const source2 = document.querySelector(".source-2");
const colorChange2 = document.getElementById("S2");

function sourceFunc2() {
  const html = `<p class="source-link">Source: <a href="https://www.bbc.com/future/article/20230227-how-to-recycle-your-clothes">BBC</a></p>`;
  source2.insertAdjacentHTML("beforeend", html);
  colorChange2.style.color = "#e39800";
}

function removeSource2() {
  const remove = document.querySelector(".source-link");
  remove.remove();
  colorChange2.style.color = "#a1c144";
}

source2.addEventListener("mouseenter", sourceFunc2);
source2.addEventListener("mouseleave", removeSource2);

//SOURCE 3
const source3 = document.querySelector(".source-3");
const colorChange3 = document.getElementById("S3");

function sourceFunc3() {
  const html = `<p class="source-link">Source: <a href="https://www.eea.europa.eu/publications/microplastics-from-textiles-towards-a">European Environment Agency</a></p>`;
  source3.insertAdjacentHTML("beforeend", html);
  colorChange3.style.color = "#e39800";
}

function removeSource3() {
  const remove = document.querySelector(".source-link");
  remove.remove();
  colorChange3.style.color = "#a1c144";
}

source3.addEventListener("mouseleave", removeSource3);
source3.addEventListener("mouseenter", sourceFunc3);

//SOURCE 4
const source4 = document.querySelector(".source-4");
const colorChange4 = document.getElementById("S4");

function sourceFunc4() {
  const html = `<p class="source-link">Source: <a href="https://www.bbc.com/future/article/20200710-why-clothes-are-so-hard-to-recycle">BBC</a></p>`;
  source4.insertAdjacentHTML("beforeend", html);
  colorChange4.style.color = "#e39800";
}

function removeSource4() {
  const remove = document.querySelector(".source-link");
  remove.remove();
  colorChange4.style.color = "#a1c144";
}

source4.addEventListener("mouseenter", sourceFunc4);
source4.addEventListener("mouseleave", removeSource4);

//SOURCE 5
const source5 = document.querySelector(".source-5");
const colorChange5 = document.getElementById("S5");

function sourceFunc5() {
  const html = `<p class="source-link">Source: <a href="https://www.europarl.europa.eu/topics/en/article/20201208STO93327/the-impact-of-textile-production-and-waste-on-the-environment-infographics">The European Parliament</a></p>`;
  source5.insertAdjacentHTML("beforeend", html);
  colorChange5.style.color = "#e39800";
}

function removeSource5() {
  const remove = document.querySelector(".source-link");
  remove.remove();
  colorChange5.style.color = "#a1c144";
}

source5.addEventListener("mouseenter", sourceFunc5);
source5.addEventListener("mouseleave", removeSource5);

//SOURCE 6
const source6 = document.querySelector(".source-6");
const colorChange6 = document.getElementById("S6");

function sourceFunc6() {
  const html = `<p class="source-link">Source: <a href="https://www.europarl.europa.eu/topics/en/article/20201208STO93327/the-impact-of-textile-production-and-waste-on-the-environment-infographics">The European Parliament</a></p>`;
  source6.insertAdjacentHTML("beforeend", html);
  colorChange6.style.color = "#e39800";
}

function removeSource6() {
  const remove = document.querySelector(".source-link");
  remove.remove();
  colorChange6.style.color = "#a1c144";
}

source6.addEventListener("mouseenter", sourceFunc6);
source6.addEventListener("mouseleave", removeSource6);

// ------------------- ANIMATIONER -------------------- //

// 121-animation, animation spelas när elementet syns i fönstret
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        entry.target.classList.remove("not-in-view");
      } else {
        entry.target.classList.remove("in-view");
        entry.target.classList.add("not-in-view");
      }
    });
  },
  {
    rootMargin: "-100px",
    threshold: [0, 0.5, 1],
  }
);

const tags = document.querySelector(".text-animation");

observer.observe(tags);

// Scroll to top-knapp
const myButton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

// Om användaren scrollat ner 500px i body visas knappen
function scrollFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    myButton.style.display = "block";
  } else {
    myButton.style.display = "none";
  }
}
// Scrollar till toppen av sidan
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// ------------------- MEDIA QUERIES -------------------- //

// Skriv ut länkar till källa i grid om fönstret är mindre än 700px
const x = window.matchMedia("(max-width: 700px)");

function myFunction(x) {
  if (x.matches) {
    source1.insertAdjacentHTML("beforeend", `<p class="source-link">Source: <a href="https://www.unep.org/news-and-stories/story/putting-brakes-fast-fashion">The European Parliament</a></p>`);
    source2.insertAdjacentHTML("beforeend", `<p class="source-link">Source: <a href="https://www.unep.org/news-and-stories/story/putting-brakes-fast-fashion">The European Parliament</a></p>`);
    source3.insertAdjacentHTML(
      "beforeend",
      `<p class="source-link">Source: <a href="https://www.eea.europa.eu/publications/microplastics-from-textiles-towards-a">European Environment Agency</a></p>`
    );
    source4.insertAdjacentHTML("beforeend", `<p class="source-link">Source: <a href="https://www.bbc.com/future/article/20200710-why-clothes-are-so-hard-to-recycle">BBC</a></p>`);
    source5.insertAdjacentHTML(
      "beforeend",
      `<p class="source-link">Source: <a href="https://www.europarl.europa.eu/topics/en/article/20201208STO93327/the-impact-of-textile-production-and-waste-on-the-environment-infographics">The European Parliament</a></p>`
    );
    source6.insertAdjacentHTML(
      "beforeend",
      `<p class="source-link">Source: <a href="https://www.europarl.europa.eu/topics/en/article/20201208STO93327/the-impact-of-textile-production-and-waste-on-the-environment-infographics">The European Parliament</a></p>`
    );
  }
}

myFunction(x);

x.addEventListener("change", function () {
  myFunction(x);
});
