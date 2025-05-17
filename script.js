document.querySelectorAll(".copy-btn").forEach(button => {
    button.addEventListener("click", () => {
      const text = button.parentElement.querySelector(".copy-text").innerText;
      navigator.clipboard.writeText(text);
    });
  });