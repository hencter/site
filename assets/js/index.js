
const root = document.body.parentElement

let media = window.matchMedia('(prefers-color-scheme:dark)');

//监听样式切换
let callback = e => {
  let prefersDarkMode = e.matches;
  if (prefersDarkMode) {
    // console.log("黑暗模式");
    root.classList.toggle("dark", true)
  } else {
    // console.log("亮色模式");
    root.classList.toggle("dark", false)
  }
}

if (typeof media.addEventListener === 'function') {
  media.addEventListener('change', callback);
} else if (typeof media.addEventListenertener === 'function') {
  media.addEventListenerer(callback);
}


console.log("/assets/js/index.js load success!");
