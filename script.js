let btn = document.querySelector(".btn");

let input = document.querySelectorAll("input");

btn.addEventListener("click", () => {
  input.forEach((el) => {
    el.value = "";
  });
  return alert("Wellcome!!!");
});
