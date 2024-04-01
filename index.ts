const cancelButtons = document.querySelectorAll('.cancel-btn'); 
const redirectAddBookBtn = document.querySelector('.redirect-add-book') as Element; 
const redirectLibaryBtn = document.querySelector('.redirect-libary') as Element; 
const redirectSearchBtn = document.querySelector('.redirect-search') as Element; 
const addBookForm = document.querySelector('.add-book-form') as Element; 
const libaryContainer = document.querySelector('.libary-container') as Element; 
const searchContainer = document.querySelector('.search-container') as Element; 
const mainMenu = document.querySelector('.main-menu')

function redirect(redirectButton: Element, elementToShow: Element){
  redirectButton?.addEventListener('click', (e) => {
    e.preventDefault();
    redirectButton?.parentElement?.classList.add('hidden'); 
    elementToShow?.classList.remove('hidden'); 
  })
}

redirect(redirectAddBookBtn, addBookForm); 
redirect(redirectLibaryBtn, libaryContainer);
redirect(redirectSearchBtn, searchContainer); 


cancelButtons.forEach(button => {
   button.addEventListener('click', (e) => {
    e.preventDefault(); 
    button.parentElement?.classList.add('hidden'); 
    mainMenu?.classList.remove('hidden')
   })
})

