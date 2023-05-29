import "./App.css";

const button = document.getElementById("avoid-button");

document.getElementById("yes-button").addEventListener("click", function () {
  const image = document.getElementById("myImage");
  image.classList.remove("hidden");
  console.log(image);
});
document.addEventListener("mousemove", function (event) {
  const x = event.clientX;
  const y = event.clientY;
  const buttonRect = button.getBoundingClientRect();

  if (
    x > buttonRect.left &&
    x < buttonRect.right &&
    y > buttonRect.top &&
    y < buttonRect.bottom
  ) {
    const newX = Math.random() * (window.innerWidth - buttonRect.width);
    const newY = Math.random() * (window.innerHeight - buttonRect.height);

    button.style.left = newX + "px";
    button.style.top = newY + "px";
  }
});

const App = () => {};

export default App;
