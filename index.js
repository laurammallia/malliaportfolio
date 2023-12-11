
  // Smooth scroll function
  <script>
  function smoothScroll(target) {
    const element = document.querySelector(target);
    if (element) {
      const position = element.offsetTop;
      window.scrollTo({
        top: position,
        behavior: 'smooth'
      });
    }
  }

  // Add event listener to the "Learn More" button
  const learnMoreButton = document.querySelector('.button');
  if (learnMoreButton) {
    learnMoreButton.addEventListener('click', function (event) {
      event.preventDefault();
      smoothScroll(learnMoreButton.getAttribute('href'));
    });
  }


    // Get the image links by their IDs
    const michaelLink = document.getElementById("michael-link");
    const sarahLink = document.getElementById("sarah-link");

    // Add click event listeners to the image links
    michaelLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        window.open("https://dashing-bienenstitch-befa3a.netlify.app", "_blank");
    });

    sarahLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        window.open("https://whimsical-bunny-f517f3.netlify.app", "_blank");
    });



  // Get the image links by their IDs
  const michaelLink = document.getElementById("michael-link");
  const sarahLink = document.getElementById("sarah-link");

  // Function to open the website in a new window
  function openWebsiteInNewWindow(url) {
    window.open(url, "_blank");
  }

  // Add click event listeners to the image links
  michaelLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    openWebsiteInNewWindow("https://dashing-bienenstitch-befa3a.netlify.app");
  });

  sarahLink.addEventListener("click", function(event) {
    event.preventDefault(); // Prevent default link behavior
    openWebsiteInNewWindow("https://whimsical-bunny-f517f3.netlify.app");
  });
