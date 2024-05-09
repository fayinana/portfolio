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


const navLists = document.querySelectorAll(".list a");
navLists.forEach((navList) => {
  navList.addEventListener("click", (e) => {
    e.preventDefault();
    navLists.forEach((nav) => {
      nav.parentElement.classList.remove("active");
    });
    const id = e.currentTarget.getAttribute("href");
    const element = document.querySelector(id);
    navList.parentElement.classList.add("active");
    // console.log(navList);
    let position = element.offsetTop;
    window.scrollTo({
      left: 0,
      top: position - 70,
    });
  });
});
