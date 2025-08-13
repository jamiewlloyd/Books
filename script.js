function Book(title, author, pages, read) {
   if (!new.target) {
      throw Error("You must use the 'new' operator to call the constructor");
   }
   this.title = title;
   this.author = author;
   this.pages = pages;
   this.read = read;
   this.info = function (read) {
      let readState
      if (this.read === 'yes') {
         readState = 'read';
      } else {
         readState = 'not read yet';
      }
      return `${this.title} by ${this.author}, ${this.pages} pages, ${readState}.`
   };
}

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 295, 'yes');

console.log(theHobbit.info());