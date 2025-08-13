let myLibrary = [];
const container = document.querySelector('#main-container');

function Book(title, author, published, read) {
   if (!new.target) {
      throw Error("You must use the 'new' operator to call the constructor");
   }
   this.title = title;
   this.author = author;
   this.published = published;
   this.read = read;
   this.id = crypto.randomUUID();
}

function addBookToLibrary(title, author, published, read) {
   const newBook = new Book(title, author, published, read);
   myLibrary.push(newBook);
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 1937, 'no');
addBookToLibrary('The Colour of Magic', 'Terry Pratchett', 1983, 'yes');
addBookToLibrary('The Light Fantastic', 'Terry Pratchett', 1986, 'no');
addBookToLibrary('5 Very Good Reasons to Punch a Dolphin in the Mouth (and Other Useful Guides)', 'Matthew Inman', 2010, 'no');


function displayBooks() {
   myLibrary.forEach((book) => {
      const card = document.createElement("div");
      const title = document.createElement("h2");
      const author = document.createElement("h3");
      const published = document.createElement("h4");
      card.classList.add("card");
      title.classList.add("title");
      author.classList.add("author");
      published.classList.add("published");

      title.textContent = book.title.toString();
      author.textContent = book.author.toString();
      published.textContent = book.published.toString();

      card.setAttribute("data-index-number", book.id);

      card.append(title, author, published);
      container.appendChild(card);
   })
}

displayBooks();