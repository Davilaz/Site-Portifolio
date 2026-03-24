function typeWriter(text, speed){
  const el = document.getElementById('typed');
  let i = 0;

  function step(){
    if (i < text.length)  {
      el.textContent += text[i++];
      setTimeout(step, speed);
    }
  }

  step();
}

window.addEventListener('load', () => {
  typeWriter("Olá eu sou um Desenvolvedor Web", 80);
});

particlesJS("particles-js", {
  particles: {
    number: {
      value: 120
    },
    color: {
      value: "#8b5cf6"
    },
    shape: {
      type: "circle"
    },
    opacity: {
      value: 0.5
    },
    size: {
      value: 3
    },
    move: {
      enable: true,
      speed: 2
    }
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "repulse"
      }
    },
    modes: {
      repulse: {
        distance: 100
      }
    }
  }
});