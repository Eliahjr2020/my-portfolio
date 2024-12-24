document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".navbar a");

    window.addEventListener("scroll", function () {
        sections.forEach((section, index) => {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 0 && rect.bottom > 0) {
                navLinks[index].classList.add("active");
            } else {
                navLinks[index].classList.remove("active");
            }
        });
    });
});


const text = "Hi, I'm Eliah E. ka.";
const textElement = document.getElementById("animated-text");

let index = 0;
let deleting = false;

function animateText() {
  if (!deleting) {
    index++;
    textElement.style.width = `${index}ch`;
    if (index === text.length) {
      deleting = true;
      setTimeout(animateText, 1000); // Delay before deleting
      return;
    }
  } else {
    index--;
    textElement.style.width = `${index}ch`;
    if (index === 0) {
      deleting = false;
      setTimeout(animateText, 500); // Delay before writing
      return;
    }
  }
  setTimeout(animateText, 100); // Typing/deleting speed
}

setTimeout(animateText, 20); // Initial delay

document.addEventListener("DOMContentLoaded", function() {
  const aboutSection = document.getElementById('about');

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              aboutSection.classList.add('fade-in');
          } else {
              aboutSection.classList.remove('fade-in');
          }
      });
  });

  observer.observe(aboutSection);
});


    document.addEventListener("DOMContentLoaded", function() {
        const animateElements = document.querySelectorAll('.animate');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                } else {
                    entry.target.classList.remove('in-view');
                }
            });
        });

        animateElements.forEach(element => {
            observer.observe(element);
        });
    });