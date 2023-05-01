let myLibrary = [
    {title: "A song of Ice and Fire", author: 'George RR Martin', pages: '300', read: 'finished'},
    {title: "Harry Potter", author: 'JK Rowling', pages: '300', read: 'in progress'}
]
let bookCatalog = document.querySelector('.book-catalog')
const newBookBtn = document.querySelector('.new-book-btn')
const bookForm = document.querySelector('.book-form')


Array.prototype.addBook = function(book) {
    this.push(book)
}


newBookBtn.addEventListener('click', ()=> {
    bookForm.style.display = 'flex'
})

bookForm.addEventListener('submit', (event)=> {
    event.preventDefault();
    //create variables which will be used for creation of
    //new book based on user input
    const bookTitle = document.getElementById('title').value;
    const bookAuthor = document.getElementById('author').value;
    const bookPages = document.getElementById('pages').value;
    const bookRead = document.getElementById('read').value;
    const newBook = {title : bookTitle, author: bookAuthor, pages: bookPages, read: bookRead};
    myLibrary.addBook(newBook);//use method created with prototype
    bookForm.reset();//resets form after submission
    bookForm.style.display = 'none'; //makes form dissapear after submission
    addBookToLibrary(newBook)
    
})

//function that creates a div with the content input from the user
//and appends it to the main div
function addBookToLibrary (book){
    const bookDiv = document.createElement('div')
    bookDiv.innerHTML = `<div>Title: ${book.title} <br> Author: ${book.author} <br> Pages: ${book.pages} <br> Read Status: ${book.read}</div>`
    bookCatalog.appendChild(bookDiv)
}


//loops through the array displaying all books
myLibrary.forEach(book => {
    bookCatalog.innerHTML += `<div>Title: ${book.title} <br> Author: ${book.author} <br> Pages: ${book.pages} <br> Read Status: ${book.read}</div>`
})



