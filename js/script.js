let myLibrary = [];
const container = document.querySelector('#main-container');

function Book(title, author, pages, read) {
   if (!new.target) {
      throw Error("You must use the 'new' operator to call the constructor");
   }
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.read = read;
   this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, pages, read) {
   const newBook = new Book(title, author, pages, read);
   myLibrary.push(newBook);
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, 'no');

console.log(myLibrary);

addBookToLibrary('The Colour of Magic', 'Terry Pratchett', 228, 'yes');

function displayBooks() {
   myLibrary.forEach((book) => {
      const card = document.createElement("div");
      const title = document.createElement("h2");
      const author = document.createElement("h3");
      card.classList.add("card");
      title.classList.add("title");
      author.classList.add("author");

      card.setAttribute("data-index-number", book.id)

      title.textContent = book.title.toString();
      author.textContent = book.author.toString();

      card.append(title, author);
      container.appendChild(card);
   })
}

displayBooks();