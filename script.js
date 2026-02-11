document.addEventListener("DOMContentLoaded", () => {
  const fox = document.getElementById("fox");
  const btn = document.getElementById("teachBtn");
  const text = document.getElementById("text");
  const silhouette = document.getElementById("silhouette");
  const scene = document.getElementById("scene");

  let step = 0;

  btn.addEventListener("click", () => {
    step++;

    if (step === 1) {
      text.innerHTML =
        "I haven't hugged anyone in my life before.<br>I was always very averse to hugs.";
      fox.classList.remove("nervous");
      btn.innerText = "Show me how";
    }

    else if (step === 2) {
      text.innerHTML =
        "I can't remember the last time I hugged my parents.<br>Hugs always felt uncomfortable.";
      btn.innerText = "Teach me";
    }

    else if (step === 3) {
      btn.style.display = "none";
      silhouette.style.opacity = "1";

      // warm sunset
      document.body.style.background =
        "linear-gradient(#f7d9c4, #fbeee0)";

      // fox runs in
      fox.classList.remove("far");
      fox.classList.add("run-in", "hugging");

      setTimeout(() => {
        scene.classList.add("hug-moment");

        fox.classList.add("big-hug");

        text.innerHTML =
          "Thank you for teaching me what this really felt like.";

        // AFTER emotional pause → playful line
        setTimeout(() => {
          text.innerHTML =
            "Hug bhi aata hai…<br>aur hag toh deta hi hoon.";
          fox.classList.add("joke-tilt");
        }, 2500);

      }, 900);
    }
  });
});
