document.addEventListener("DOMContentLoaded", () => {
  const fox = document.getElementById("fox");
  const btn = document.getElementById("teachBtn");
  const text = document.getElementById("text");
  const silhouette = document.getElementById("silhouette");

  console.log("Hug Day loaded"); // sanity check

  let step = 0;

  btn.addEventListener("click", () => {
    step++;

    if (step === 1) {
      text.innerHTML = "Okay… arms closer?";
      fox.classList.remove("nervous");
      fox.classList.add("hugging");
      btn.innerText = "Hold a little longer";
    }

    else if (step === 2) {
      text.innerHTML = "I think I got it.";
      btn.innerText = "Your turn";
    }

    else if (step === 3) {
      btn.style.display = "none";
      silhouette.style.opacity = "1";

      setTimeout(() => {
        text.innerHTML =
          "Hug bhi aata hai.<br>Aur hag toh deta hi hoon.";
        fox.classList.add("big-hug");
      }, 800);
    }
  });
});
