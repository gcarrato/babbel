/* document.addEventListener(
  "keydown",
  (e) => {
    if (e.key === "Enter") {
      toggleFullScreen();
    }
  },
  false
);

function toggleFullScreen() {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
}
 */

const btnMobile = document.getElementById('btn-mobile');
const nav = document.getElementById('nav');
const content = document.getElementById('content');

function toggleMenu(event){

  if (event.type === 'touchstart') event.preventDefault()


 
nav.classList.toggle('active')

content.classList.toggle('active') 

}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);




/* LOGIN */

const btSubscrever = document.getElementById('bt_subscrever');
const btLog = document.getElementById('bt_log');
const fechaLogin = document.getElementById('fechar_login');


btSubscrever.onclick = function () {

  cont.classList.add('active')
  bg.classList.add('active_bg') 
}

fechaLogin.onclick = function () {

  cont.classList.remove('active')
  bg.classList.remove('active_bg') 
}

btLog.onclick = function () {

  cont.classList.add('active')
  bg.classList.add('active_bg') 
}


















