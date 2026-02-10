const fox = document.getElementById("fox");
const btn = document.getElementById("teachBtn");
const text = document.getElementById("text");
const silhouette = document.getElementById("silhouette");

let step = 0;

btn.addEventListener("click", () => {
  step++;

  if (step === 1) {
    text.innerHTML = "Okay… arms closer?";
    fox.classList.remove("nervous");
    fox.classList.add("hugging");
    btn.innerText = "Hold a little longer";
  }

  if (step === 2) {
    text.innerHTML = "I think I got it.";
    btn.innerText = "Your turn";
  }

  if (step === 3) {
    // silent pause before hug
    btn.style.display = "none";
    silhouette.style.opacity = "1";

    setTimeout(() => {
      text.innerHTML =
        "Hug bhi aata hai.<br>Aur hag toh deta hi hoon.";
      fox.classList.add("big-hug");
    }, 800);
  }
});
const fox = document.getElementById("fox");
const btn = document.getElementById("teachBtn");
const text = document.getElementById("text");

let step = 0;

btn.addEventListener("click", () => {
  step++;

  if (step === 1) {
    text.innerHTML = "Okay… arms closer?";
    fox.classList.remove("nervous");
    fox.classList.add("hugging");
    btn.innerText = "Hold a little longer";
  }

  if (step === 2) {
    text.innerHTML = "I think I got it.";
    btn.innerText = "Your turn";
  }

  if (step === 3) {
    text.innerHTML = "Hug bhi aata hai.<br>Aur hag toh deta hi hoon.";
    fox.classList.add("big-hug");
    btn.style.display = "none";
  }
});
