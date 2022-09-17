var menu = document.querySelector(".mainList"),
  menuIcon = document.querySelector("#openClose"),
  myClose = document.querySelector(".header .container .mainList .ex");
var links_head = document.querySelectorAll(".forEach");
// let avtiveHome = document.querySelector(".save");
let edit_button = document.querySelector(".edit-button");
let edit_view = document.querySelector(".edit-view");
let main_color = document.querySelector(".main-color");
let sub_color = document.querySelector(".sub-color");
let def = document.querySelector(".def");
let save = document.querySelector(".save");
let header = document.querySelector(".header");

let close_veiw = document.querySelector(".close_veiw");

menuIcon.onclick = function () {
  menu.classList.add("show");
};
myClose.addEventListener("click", () => {
  menu.classList.remove("show");
});
links_head.forEach((e) => {
  e.addEventListener("click", function () {
    links_head.forEach((all) => {
      all.classList.remove("active");
    });
    e.classList.add("active");
    menu.classList.remove("show");

    if (e.textContent === "Home") {
      if (x.matches) {
        window.scrollTo({
          top: 0,
        });
      } else
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
    } else if (e.textContent === "About") {
      if (x.matches) {
        window.scrollTo({
          top: 907,
        });
      } else
        window.scrollTo({
          top: 550,
          behavior: "smooth",
        });
    } else if (e.textContent === "Skills") {
      if (x.matches) {
        window.scrollTo({
          top: 1544,
        });
      } else
        window.scrollTo({
          top: 1200,
          behavior: "smooth",
        });
    } else if (e.textContent === "Portfolio") {
      if (x.matches) {
        window.scrollTo({
          top: 2400,
        });
      } else
        window.scrollTo({
          top: 1730,
          behavior: "smooth",
        });
    } else if (e.textContent === "Contact") {
      window.scrollTo({
        top: end,
        behavior: "smooth",
      });
    }
  });
});

var body = document.body;
let end = Math.max(body.scrollHeight);
console.log(end);
var x = window.matchMedia("(max-width: 768px)");
x.addEventListener("change", function () {
  if (x.matches) {
    console.log("gi");
  }
});
let toTopButton = document.querySelector(".toTopButton");

let skills = document.querySelector(".skill-page");
window.onscroll = function () {
  if (window.scrollY > 100) {
    header.style.backgroundColor = "#ffffffe3";
  } else header.style.backgroundColor = "#ffffff";
  if (window.scrollY > 100) {
    toTopButton.classList.add("show");
  } else toTopButton.classList.remove("show");

  let skillsOfsetTop = skills.offsetTop;
  let windowScrollTop = this.pageYOffset;
  if (windowScrollTop > skillsOfsetTop) {
    let allskills = document.querySelectorAll(".skill-tog .span");
    allskills.forEach((skill) => {
      skill.style.width = skill.dataset.width;
    });
  }
};

toTopButton.onclick = (_) => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

// edit veiw

if (window.localStorage.getItem("main") && window.localStorage.getItem("sub")) {
  document.documentElement.style.setProperty(
    "--main-color",
    window.localStorage.getItem("main")
  );
  document.documentElement.style.setProperty(
    "--text-color",
    window.localStorage.getItem("sub")
  );
}
main_color.value = "#ff9442";
sub_color.value = "#0b0a5d";
save.addEventListener("click", function () {
  document.documentElement.style.setProperty("--main-color", main_color.value);
  document.documentElement.style.setProperty("--text-color", sub_color.value);
  edit_view.classList.remove("show");
  window.localStorage.setItem("main", main_color.value);
  window.localStorage.setItem("sub", sub_color.value);
});

def.addEventListener("click", function () {
  document.documentElement.style.setProperty("--main-color", "#ff9442");
  document.documentElement.style.setProperty("--text-color", "#0b0a5d");
  window.localStorage.setItem("main", "#ff9442");
  window.localStorage.setItem("sub", "#0b0a5d");
  edit_view.classList.remove("show");
});

edit_button.addEventListener("click", function () {
  edit_view.classList.add("show");
});

close_veiw.onclick = function () {
  edit_view.classList.remove("show");
};

// window.onscroll = () => {
//   console.log(window.scrollY);
// };
