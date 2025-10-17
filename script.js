var curSize = null; // localStorage.getItem("saveSize");
var slider = document.querySelector('.font-slider input[type="range"]')
var body = document.body
var defaultSize = body.style.getPropertyValue('font-size');

if (curSize) {
  var saveSize = curSize;
  document.documentElement.style.setProperty("--font-size", saveSize + "px");
  //body.style.fontSize = saveSize + 'px';
}

slider.addEventListener("input", function(e) {
  var newSize = this.value,
    minSize = 10,
    maxSize = 72;

  if (newSize <= maxSize && newSize >= minSize) {
    document.documentElement.style.setProperty("--font-size", newSize + "px");
    //    body.style.fontSize = newSize + 'px';
    //    localStorage.setItem("saveSize", newSize);
  }
});

const pageMain = document.querySelector(".dynamic");

let __wghtVal = 400;
let __slntVal = 12;
let __opszVal = 72;

const wghtInput = document.getElementById("wght");
const wghtSpan = document.getElementById("wghtVal");

const slntInput = document.getElementById("slnt");
const slntSpan = document.getElementById("slntVal");

const opszInput = document.getElementById("opsz");
const opszSpan = document.getElementById("opszVal");

const Trigger = new Event("changeVal");

function wghtVal(val = undefined) {
  if (val) {
    __wghtVal = val;
  }
  return `"wght" ${__wghtVal}`;
}

function slntVal(val = undefined) {
  if (val) {
    __slntVal = val;
  }
  return `"slnt" ${__slntVal}`;
}

function opszVal(val = undefined) {
  if (val) {
    __opszVal = val;
  }
  return `"opsz" ${__opszVal}`;
}

const content = document.querySelector(".dynamic");

window.addEventListener("DOMContentLoaded", (event) => {
  content.dispatchEvent(new Event("changeVal"));
});

content.addEventListener("changeVal", () => {
  content.setAttribute(
    "style",
    `font-variation-settings: ${wghtVal()},${slntVal()},${opszVal()};`
  );
});

wghtInput.addEventListener(".font-slider", (e) => {
  wghtVal(e.target.value);
  wghtSpan.innerText = __wghtVal;
  content.dispatchEvent(Trigger);
});

slntInput.addEventListener(".font-slider", (e) => {
  slntVal(e.target.value);
  slntSpan.innerText = __slntVal;
  content.dispatchEvent(Trigger);
});

opszInput.addEventListener(".font-slider", (e) => {
  opszVal(e.target.value);
  opszSpan.innerText = __opszVal;
  content.dispatchEvent(Trigger);
});

function dice() {
  wghtVal(Math.floor(Math.random() * 400) + 300);
  slntVal(Math.floor(Math.random() * 10) + 8.5);
  opszVal(Math.floor(Math.random() * 62) + 10);

  wghtInput.value = __wghtVal;
  slntInput.value = __slntVal;
  opszInput.value = __opszVal;
  wghtInput.dispatchEvent(new Event("input"));
  slntInput.dispatchEvent(new Event("input"));
  opszInput.dispatchEvent(new Event("input"));
}

document.getElementById("randbutton").addEventListener("click", dice);

function copyElementText(id) {
    var text = document.getElementById(id).innerText;
    var elem = document.createElement("textarea");
    document.body.appendChild(elem);
    elem.value = text;
    elem.select();
    document.execCommand("copy");
    document.body.removeChild(elem);
}
function ShowSecond() {
    var div2 = document.getElementById("div2");
    div2.className = "show";
    setTimeout(function () {
        div2.className = 'hide';
    }, 2000);
}