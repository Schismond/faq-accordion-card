let buttons = document.querySelectorAll("button");
let hiddenContent = document.querySelectorAll(".hidden-content");
let questions = document.querySelectorAll(".question");

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    if (window.getComputedStyle(hiddenContent[i]).display === "none") {
      hiddenContent[i].style.display = "block";
      questions[i].style.fontWeight = "bold";
      questions[i].style.color = "black";

      buttons[i].style.transform = "rotate(180deg)";
    } else {
      hiddenContent[i].style.display = "none";
      questions[i].style.fontWeight = "normal";
      buttons[i].style.transform = "rotate(0deg)";
    }
  });
}
