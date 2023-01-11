const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

buttons.forEach((item) => {
  item.onclick = () => {
    // removeZero();
    if (item.id == "clear") {
      display.innerText = "";
    } else if (display.innerText != "" && item.id == "%") {
      display.innerText = eval(display.innerText) / 100;
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
    } else if (display.innerText != "" && item.id == "equal") {
      display.innerText = eval(display.innerText);
    } else if (display.innerText == "" && (item.id == "equal" || item.id == ")" || item.id == "+" || item.id == "*" || item.id == "/" || item.id == "%")) {
      display.innerText = "";
    } else if (display.innerText != "" && item.id == "+/-") {
      display.innerText = eval(display.innerText) * -1;
    } else {
      display.innerText += item.id;
    }
  };
});

// function removeZero() {
//   if (display.innerText == "0") {
//     display.innerText = " ";
//   }
// }

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".calculator");
const toggleIcon = document.querySelector(".toggler-icon");
var icon = document.querySelector("i");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");

  icon.classList.toggle("bi-moon-stars-fill");
  icon.classList.toggle("bi-brightness-high-fill");
  isDark = !isDark;
};
