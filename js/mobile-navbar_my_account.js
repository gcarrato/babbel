const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){

  if (event.type === 'touchstart') event.preventDefault()

  const nav = document.getElementById('nav');
  const content = document.getElementById('content');
 
nav.classList.toggle('active')

content.classList.toggle('active') 

}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);




/* LOGIN */

const btnLogin = document.getElementById('bt_login');
const btnSubscrever = document.getElementById('bt_subscrever');  
/* const btnSubscrever2 = document.getElementById('bt_subscrever');   */

 const modal = document.querySelector('dialog');
 const fechaModal = document.getElementById('fechar_login');


function activeModal(event){

  if (event.type === 'touchstart') event.preventDefault()


  modal.showModal()

}
fechaModal.onclick = function () {

  modal.close()
}


btnLogin.addEventListener('click', activeModal); 
btnLogin.addEventListener('touchstart', activeModal);  




/* BT- BACK */
const btBack = document.getElementById('back');


function funBack(event){

  if (event.type === 'touchstart') event.preventDefault()

  window.open("index.html");

}


btBack.addEventListener('click', funBack); 
btBack.addEventListener('touchstart', funBack);  
 
