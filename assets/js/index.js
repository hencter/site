
const root = document.body.parentElement

let colorMode = localStorage.getItem("color-mode")
console.log(colorMode);
root.classList.toggle(colorMode, true)

let media = window.matchMedia('(prefers-color-scheme:dark)');
console.log(media);

//监听样式切换
let callback = e => {
  let prefersDarkMode = e.matches;
  if (prefersDarkMode) {
    // console.log("黑暗模式");
    root.classList.toggle("dark", true)
    localStorage.setItem("color-mode","dark")
  } else {
    // console.log("亮色模式");
    root.classList.toggle("dark", false)
    localStorage.setItem("color-mode","light")
  }
}

if (typeof media.addEventListener === 'function') {
  media.addEventListener('change', callback);
} else if (typeof media.addEventListenertener === 'function') {
  media.addEventListenerer(callback);
}


console.log("/assets/js/index.js load success!");
