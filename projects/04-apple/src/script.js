//prevent default for all controls
document
  .querySelectorAll('.watch-control, .controls a, .iphone-btn')
  .forEach((control) => {
    control.addEventListener('click', (e) => {
      e.preventDefault();
    });
  });

//global VARS
const cube = document.querySelector('.cube');
let y = 20;
let x = 0;
let z = 0;
let interval;
let boolVar = true;

function slideShowDivs() {
  const slideShowEl = document.querySelector('.slideshow');
  for (let i = 0; i < 5; i++) {
    const emptyDiv = document.createElement('div');

    emptyDiv.style.backgroundImage = `url(images/slideshow/section-1-bg-${
      i + 1
    }.jpg)`;

    i === 0 && emptyDiv.classList.add('change');
    slideShowEl.appendChild(emptyDiv);
  }
}

function infiniteBackgroundSlide() {
  let c = 0;

  const images = document.querySelectorAll('.slideshow div');

  setInterval(() => {
    c++;

    const changeEl = document.querySelector('.slideshow div.change');
    changeEl.classList.remove('change');

    if (c < images.length) {
      changeEl.nextElementSibling.classList.add('change');
    } else {
      images[0].classList.add('change');
      c = 0;
    }
  }, 20000);
}

// workin on cube

function playPauseCube() {
  if (boolVar) {
    interval = setInterval(() => {
      cube.style.transform = `rotateX(${x}deg) rotateY(${y++}deg) rotateZ(${z}deg)`;
    }, 100);
  } else {
    clearInterval(interval);
  }
}

function allControls() {
  //top
  document.querySelector('.top-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${(x += 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
  });

  //bttm
  document.querySelector('.bottom-x-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${(x -= 20)}deg) rotateY(${y}deg) rotateZ(${z}deg)`;
  });

  //left
  document.querySelector('.left-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${(y -= 20)}deg) rotateZ(${z}deg)`;
  });

  document.querySelector('.right-y-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${(y += 20)}deg) rotateZ(${z}deg) `;
  });

  document.querySelector('.top-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z -= 20)}deg) `;
  });

  document.querySelector('.bottom-z-control').addEventListener('click', () => {
    cube.style.transform = `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${(z += 20)}deg) `;
  });
}

function hoverOnCube() {
  document.querySelector('.controls').addEventListener('mouseover', () => {
    boolVar = false;
    playPauseCube();
  });

  document.querySelector('.controls').addEventListener('mouseout', () => {
    boolVar = true;
    playPauseCube();
  });
}

// section3
function macBook() {
  const section3Content = document.querySelector('.section-3-content');

  window.addEventListener('scroll', () => {
    if (
      window.pageYOffset + window.innerHeight >=
      section3Content.offsetTop + section3Content.offsetHeight / 2
    ) {
      section3Content.classList.add('change');
    }
  });
}

// section4

const watchBands = document.querySelector('.watch-bands');
const watchCases = document.querySelector('.watch-cases');

const watchTopControl = document.querySelector('.watch-top-control');
const watchRightControl = document.querySelector('.watch-right-control');
const watchBottomControl = document.querySelector('.watch-bottom-control');
const watchLeftControl = document.querySelector('.watch-left-control');

let axisY = 0;
let axisX = 0;

const hideControl = () => {
  if (axisY === -280) {
    watchTopControl.classList.add('hideControl');
  } else {
    watchTopControl.classList.remove('hideControl');
  }

  if (axisY === 280) {
    watchBottomControl.classList.add('hideControl');
  } else {
    watchBottomControl.classList.remove('hideControl');
  }

  if (axisX === 280) {
    watchRightControl.classList.add('hideControl');
  } else {
    watchRightControl.classList.remove('hideControl');
  }

  if (axisX === -280) {
    watchLeftControl.classList.add('hideControl');
  } else {
    watchLeftControl.classList.remove('hideControl');
  }
};

watchTopControl.addEventListener('click', () => {
  watchCases.style.marginTop = `${(axisY -= 70)}rem`;
  hideControl();
});

watchBottomControl.addEventListener('click', () => {
  watchCases.style.marginTop = `${(axisY += 70)}rem`;
  hideControl();
});

watchRightControl.addEventListener('click', () => {
  watchBands.style.marginRight = `${(axisX += 70)}rem`;
  hideControl();
});

watchLeftControl.addEventListener('click', () => {
  watchBands.style.marginRight = `${(axisX -= 70)}rem`;
  hideControl();
});

// slideShowDivs();
// infiniteBackgroundSlide();
// allControls();
// playPauseCube();
// hoverOnCube();
macBook();
