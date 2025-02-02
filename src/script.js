
let swagQuote = document.querySelector("#quote");

new Typewriter('#quote', {
    strings: [swagQuote.textContent],
    autoStart: true,
    cursor: "",
    delay: 1,
    loop: true,
    
  });


function changeTheme() {
  let body = document.querySelector("body");
  body.classList.toggle("dark");
}
let themeButton = document.querySelector("#theme-button");
themeButton.addEventListener("click", changeTheme);




