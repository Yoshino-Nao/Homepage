const number = document.querySelector("p");
const countButton = document.querySelector("button");

window.addEventListener("load", () => {
  var jsonCount = localStorage.getItem("storage");
  count = JSON.parse(jsonCount);

  if (!count) {
    number.innerHTML = 0;
  } else {
    number.innerHTML = count;
  }
});
countButton.addEventListener("click", function () {
  count++;
  number.innerHTML = count;

  jsonCount = JSON.stringify(count);
  localStorage.setItem("storage", jsonCount);
});
