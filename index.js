console.log("welcome");

const customJs = document.getElementById("custom-js-content");
const htmlContent = "<button>custom button injected from javascript</button>";
console.log(customJs);
customJs.innerHTML = htmlContent;

const customJsText = document.getElementById("custom-js-text");
console.log(customJsText);
// https://stackoverflow.com/questions/1358810/how-do-i-change-the-text-of-a-span-element-using-javascript
if ("textContent" in customJsText) {
  customJsText.textContent = "newtext";
} else {
  customJsText.innerText = "newtext";
}
