let menu = document.querySelector('#menubar')
let navbar = document.querySelector('.navbar')
let header = document.querySelector('.header-2')

menu.addEventListener('click', () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

});

window.onscroll = () => {
  menu.classList.remove('fa-times');
  navbar.classList.remove('active');
  if (window.scrollY > 150) {
    header.classList.add('active')
  } else {
    header.classList.remove('active')
  }
}

let countDate = new Date('june10,2024 00:00:00').getTime();

function CountDown() {

  let now = new Date().getTime();
  gap = countDate - now;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  let d = Math.floor(gap / (day));
  let h = Math.floor(gap % (day) / (hour));
  let m = Math.floor(gap % (hour) / (minute));
  let s = Math.floor(gap % (minute) / (second));

  document.querySelector('#day').innerText = d;
  document.querySelector('#hour').innerText = h;
  document.querySelector('#minute').innerText = m;
  document.querySelector('#second').innerText = s;
}

setInterval(() => {
  CountDown();
}, 1000)


