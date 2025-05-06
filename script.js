document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const sections = document.querySelectorAll(".section");

    // Click on links - active tab
    links.forEach(link => {
        link.addEventListener("click", function () {
            links.forEach(l => l.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // Scroll - activate section in menu + animation of section scaling
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const id = entry.target.getAttribute("id");
            const correspondingLink = document.querySelector(`.nav-link[href="#${id}"]`);

            if (entry.isIntersecting) {
                // Add scale effect
                entry.target.classList.add("scale-up");

                // Highlight current link in menu
                links.forEach(link => link.classList.remove("active"));
                if (correspondingLink) correspondingLink.classList.add("active");
            } else {
                entry.target.classList.remove("scale-up");
            }
        });
    }, {
        threshold: 0.2
    });

    sections.forEach(section => observer.observe(section));
});
function openContact() {
    const bar = document.getElementById('contactBar');
    const label = document.getElementById('horizontalContact');
  
    bar.classList.add('active');
    label.style.display = 'none';
  }
  
  function closeContact() {
    const bar = document.getElementById('contactBar');
    const label = document.getElementById('horizontalContact');
  
    bar.classList.remove('active');
  
    // Показати "Зв'язок" після завершення transition (через 400мс)
    setTimeout(() => {
      label.style.display = 'block';
    }, 400); // 400ms = transition duration from CSS
  }
  function sendMail() {
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    const subject = encodeURIComponent("Повідомлення з сайту Форма3D");
    const body = encodeURIComponent(message);
  
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  }
  function openContact() {
    document.getElementById("contactBar").classList.add("active");
    document.getElementById("contactOverlay").classList.add("active");
  }
  
  function closeContact() {
    document.getElementById("contactBar").classList.remove("active");
    document.getElementById("contactOverlay").classList.remove("active");
  }
  