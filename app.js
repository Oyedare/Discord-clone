const navlinks = document.querySelector('.nav-links');
const menuBtn = document.querySelector('#menu-btn');

// menuBtn.addEventListener('click',()=>{
//   navlinks.classList.toggle('active')
//   console.log('hey');
// })
menuBtn.addEventListener('click', ()=>{
  navlinks.classList.toggle('active')
  console.log('hello');
})
// window.onscroll = () =>{
//   navlinks.classList.remove('active')
// }

window.onscroll = () =>{
  navlinks.classList.remove('active')
}