document.addEventListener("DOMContentLoaded", () => {
    const containerA = document.getElementById("containerA");
    const scrollMoveA = document.getElementById("scrollMoveA");
    
    let scrolling; // Holds the interval ID
  
    // Function to scroll the container
    const startScrolling = () => {
      scrolling = setInterval(() => {
        containerA.scrollLeft += 7; // Adjust the scroll speed as needed
      }, 20); // Adjust the interval time for smoother scrolling
    };
  
    // Stop scrolling
    const stopScrolling = () => {
      clearInterval(scrolling);
    };
  
    // Add event listeners
    scrollMoveA.addEventListener("mousedown", startScrolling);
    document.addEventListener("mouseup", stopScrolling);
    scrollMoveA.addEventListener("mouseleave", stopScrolling);
  });



  document.addEventListener("DOMContentLoaded", () => {
    const containerB = document.getElementById("containerB");
    const scrollMoveB = document.getElementById("scrollMoveB");
    
    let scrolling; // Holds the interval ID
  
    // Function to scroll the container
    const startScrolling = () => {
      scrolling = setInterval(() => {
        containerB.scrollLeft += 7; // Adjust the scroll speed as needed
      }, 20); // Adjust the interval time for smoother scrolling
    };
  
    // Stop scrolling
    const stopScrolling = () => {
      clearInterval(scrolling);
    };
  
    // Add event listeners
    scrollMoveB.addEventListener("mousedown", startScrolling);
    document.addEventListener("mouseup", stopScrolling);
    scrollMoveB.addEventListener("mouseleave", stopScrolling);
  });



  document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".hover-image");
  
    // Create fullscreen overlay
    const fullscreenOverlay = document.createElement("div");
    fullscreenOverlay.classList.add("fullscreen-overlay");
    document.body.appendChild(fullscreenOverlay);
  
    // Show fullscreen image on hover
    images.forEach((img) => {
      img.addEventListener("mouseenter", () => {
        fullscreenOverlay.style.backgroundImage = `url(${img.src})`;
        fullscreenOverlay.style.display = "block";
      });
  
      img.addEventListener("mouseleave", () => {
        fullscreenOverlay.style.display = "none";
      });
    });
  });
  
  

  document.addEventListener("DOMContentLoaded", () => {
    const a9 = document.getElementById("a9");
    const a10 = document.getElementById("a10");
  
    a9.addEventListener("mouseenter", () => {
      a9.style.minWidth = "23%"; // A9의 너비 증가
      a10.style.minWidth = "17%"; // A10의 너비 감소
    });
  
    a9.addEventListener("mouseleave", () => {
      a9.style.minWidth = "20%"; // A9의 초기 너비로 복원
      a10.style.minWidth = "20%"; // A10의 초기 너비로 복원
    });

    a10.addEventListener("mouseenter", () => {
        a9.style.minWidth = "10%"; // A9의 너비 증가
        a10.style.minWidth = "30%"; // A10의 너비 감소
      });
    
      a10.addEventListener("mouseleave", () => {
        a9.style.minWidth = "20%"; // A9의 초기 너비로 복원
        a10.style.minWidth = "20%"; // A10의 초기 너비로 복원
      });
  });

  document.addEventListener("DOMContentLoaded", () => {
    const a9 = document.getElementById("a11");
    const a10 = document.getElementById("a12");
  
    a11.addEventListener("mouseenter", () => {
      a9.style.minWidth = "30%"; // A9의 너비 증가
      a10.style.minWidth = "10%"; // A10의 너비 감소
    });
  
    a11.addEventListener("mouseleave", () => {
      a9.style.minWidth = "20%"; // A9의 초기 너비로 복원
      a10.style.minWidth = "20%"; // A10의 초기 너비로 복원
    });

    a12.addEventListener("mouseenter", () => {
        a9.style.minWidth = "10%"; // A9의 너비 증가
        a10.style.minWidth = "30%"; // A10의 너비 감소
      });
    
      a12.addEventListener("mouseleave", () => {
        a9.style.minWidth = "20%"; // A9의 초기 너비로 복원
        a10.style.minWidth = "20%"; // A10의 초기 너비로 복원
      });
  });
  