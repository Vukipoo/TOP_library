let myLibrary = ['A Song of Ice and Fire', 'Lord Of The Rings']
let bookCatalog = document.querySelector('.book-catalog')
const newBookBtn = document.querySelector('.new-book-btn')
const bookForm = document.querySelector('.book-form')
newBookBtn.addEventListener('click', ()=> {
    bookForm.style.display = 'flex'
})
function Book (){

}

function addBookToLbrary(){

}

myLibrary.forEach(book => {
    bookCatalog.innerHTML += book + '<br>'
})



