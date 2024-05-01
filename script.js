const navBar = document.querySelector('.nav-inner');
const menuBar = document.querySelector('.menu-nav');
const exit = document.querySelector('.exit');
const dateDom = document.querySelector('.date');

const date = new Date();

dateDom.innerHTML = date.getFullYear()

menuBar.addEventListener('click',()=>{
  navBar.style.display = 'flex';
  exit.style.display = 'flex'
  menuBar.style.display = 'none'
});

exit.addEventListener('click',()=>{
  navBar.style.display = 'none'
  menuBar.style.display = 'flex'
  exit.style.display = 'none'

});
