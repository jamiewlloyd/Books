let myLibrary = [];
const container = document.querySelector('#main-container');
const addBook = document.querySelector('#add-book');
const dialog = document.querySelector('#book-dialog');
const bookForm = document.querySelector('#book-form');
const cancelButton = document.querySelector("#cancel-button");

class Book {
   constructor(title, author, published, read) {
      this.title = title;
      this.author = author;
      this.published = published;
      this.read = read;
      this.id = crypto.randomUUID();
   }
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
   myLibrary.forEach((storedBook) => {
      createBook(storedBook);
   })
}

function createBook(book) {
   // Create elements
   const card = document.createElement("div");
   const title = document.createElement("h2");
   const author = document.createElement("h3");
   const published = document.createElement("h4");
   const readStatus = document.createElement("div");
   const deleteButton = document.createElement("div");

   // Add class lists
   card.classList.add("card");
   title.classList.add("title");
   author.classList.add("author");
   published.classList.add("published");
   readStatus.classList.add("status");
   deleteButton.classList.add("delete-button");

   // Add text content
   title.textContent = book.title.toString();
   author.textContent = book.author.toString();
   published.textContent = book.published.toString();
   deleteButton.textContent = "X";

   if (book.read.toString() === 'yes') {
      readStatus.textContent = 'Read';
      readStatus.classList.add("read");
   } else {
      readStatus.textContent = 'Unread';
      readStatus.classList.add("unread");
   }

   // Add event listeners
   card.addEventListener("click", (e) => {
      const mainCard = e.currentTarget;
      const mainDelete = mainCard.firstElementChild;
      const displayedBooks = Array.from(document.querySelectorAll('.card'))

      if (!e.target.classList.contains('status')) {
         displayedBooks.forEach((book) => {
            id = book.getAttribute("data-index-number");
            del = book.firstChild;

            if (id != mainCard.getAttribute("data-index-number") && (book.firstChild.classList.contains("active"))) {
               book.firstChild.style.zIndex = '-1';
               setTimeout(() => {
                  book.firstChild.classList.toggle('active');
               }, 10);
            }
         })

         mainDelete.classList.add("active");

         mainDelete.addEventListener('transitionend', (event) => {
            if (event.propertyName === 'transform') {
               if (mainDelete.classList.contains('active')) {
                  mainDelete.style.zIndex = '10';
               }
            }
         });
      };
   });

   deleteButton.addEventListener("click", (e) => {
      const card = e.currentTarget.parentNode;

      card.remove();
   });

   readStatus.addEventListener("click", (e) => {
      e.target.classList.toggle("read");
      e.target.classList.toggle("unread");

      if (e.target.classList.contains("read")) {
         e.target.textContent = 'Read';
      } else {
         e.target.textContent = 'Unread';
      }
   });

   // Set id attribute
   card.setAttribute("data-index-number", book.id);

   // Append items and append card to DOM
   card.append(deleteButton, title, author, published, readStatus);
   container.appendChild(card);
}

// "Show the dialog" button opens the dialog modally
addBook.addEventListener("click", () => {
   dialog.showModal();
});

bookForm.addEventListener("submit", (e) => {
   e.preventDefault();

   let newTitle = document.getElementById("title");
   let newAuthor = document.getElementById("author");
   let newPublished = document.getElementById("published");
   let newRead = document.getElementById("have-read");

   addBookToLibrary(newTitle.value, newAuthor.value, newPublished.value, newRead.value);
   createBook(myLibrary[myLibrary.length - 1]);

   dialog.close();
});

// "Close" button closes the dialog
cancelButton.addEventListener("click", (e) => {
   e.preventDefault();
   dialog.close();
});

//Page Load
displayBooks();
console.log(myLibrary);