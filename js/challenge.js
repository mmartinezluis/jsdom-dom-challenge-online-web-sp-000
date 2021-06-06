counter = document.getElementById("counter");

let interval = setInterval(increment, 1000);

function increment() {
  counter.innerText++;
}

function start() {
  interval;
}

document.addEventListener("DOMcontentloaded", start());

const minus = document.getElementById("minus");
const plus = document.getElementById("plus");
const heart = document.getElementById("heart");
const pause = document.getElementById("pause");
const likes = document.querySelector('ul.likes');
const form = document.getElementsByTagName("form")[0];
const submit = document.getElementById("submit");
let toggle = 0;

minus.addEventListener("click", () => {
  counter.innerHTML--;
});

plus.addEventListener("click", () => {
  counter.innerHTML++;
});

heart.addEventListener("click", () => {
  let likesArray = likes.querySelectorAll('li');
  let lastLike = likesArray[likesArray.length -1];
  if (lastLike === undefined || lastLike.getAttribute("data-num") !== counter.innerHTML ) {
    newLike = document.createElement('li')
    newLike.setAttribute("data-num", counter.innerHTML);
    newLike.innerHTML = `${newLike.getAttribute("data-num")} has been liked <span>1</span> time`; 
    likes.appendChild(newLike);
  } else {
    let span = lastLike.children[0];
    span.innerText ++;
    lastLike.innerHTML = `${lastLike.getAttribute("data-num")} has been liked <span>${span.innerText}</span> times`; 
  }
});

pause.addEventListener("click", function() {
  if (!!toggle) {
    toggle = 0;
    clearInterval(interval);
    this.innerHTML = "resume";
  } else {
    toggle = 1;
    interval = start();
    this.innerHTML = "pause"
  }
  document.querySelectorAll(".button").forEach( function(button) {
    button.id !== "pause" && (button.disabled = !toggle);
  })
  }
)

form.addEventListener("submit", function(e) {
  e.preventDefault();
  let formInput = this.children[0];
  let p = document.createElement("p");
  p.innerText = formInput.value;
  document.getElementById("list").appendChild(p);
  formInput.value = "";
})