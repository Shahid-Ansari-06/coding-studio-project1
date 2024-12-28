function dynamicTyper(element) {
  const words = element.getAttribute("data-words").split(",");
  const delay = parseInt(element.getAttribute("data-delay")) || 100; 
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function type() {
      const currentWord = words[wordIndex];
      let typingSpeed = delay;

      if (isDeleting) {
          charIndex--;
          typingSpeed = delay / 2; 
      } else {
          charIndex++;
      }

      element.textContent = currentWord.substring(0, charIndex);

      if (!isDeleting && charIndex === currentWord.length) {
          isDeleting = true;
          typingSpeed = 1000;
      } 
      else if (isDeleting && charIndex === 0) {
          isDeleting = false;
          wordIndex = (wordIndex + 1) % words.length;
      }

      setTimeout(type, typingSpeed);
  }

  type();
}
const typerElement = document.querySelector(".typer");
dynamicTyper(typerElement);