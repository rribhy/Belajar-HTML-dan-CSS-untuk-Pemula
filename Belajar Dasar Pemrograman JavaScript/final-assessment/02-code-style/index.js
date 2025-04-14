const books = { };
function getBooks() {
  return books; //Sudah ditambahkan semicolon ;
}

function getBookById(id) {
  const book = books[id]; //Sudah ditambahkan semicolon ;

  if (!book) {
    return null; //Sudah ditambahkan semicolon ;
  }

  return book.id; //Sudah ditambahkan semicolon ;
}

function saveBook(book) {
  books[book.id] = book; //Sudah ditambahkan semicolon ;
}

saveBook({ id: 'book-1', name: 'Book 1' }); //Sudah ditambahkan space sesudah { dan sebelum }
const myBooks = getBooks(); //Sudah menggunakan const pada myBooks 
const myBook = getBookById('book-1');

console.log(myBooks);
console.log(myBook);