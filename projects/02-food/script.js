// menu click event
document.querySelector('.menu').addEventListener('click', () => {
  document.querySelectorAll('.target').forEach((item) => {
    item.classList.toggle('change');
  });
});

const iconsEls = document.querySelectorAll('.section-1-icons i');

let i = 0;
// setInterval(() => {
//   const iconChange = document.querySelector('.section-1-icons i.change');

//   if (i < iconsEls.length - 1) {
//     iconChange.classList.remove('change');
//     iconChange.nextElementSibling.classList.add('change');
//     i++;
//   } else {
//     i = 0;
//     iconChange.classList.remove('change');
//     iconsEls[0].classList.add('change');
//   }
// }, 4000);
