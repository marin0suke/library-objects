function Book(title, author, pages, haveRead) { // Book obj with functionality for whether have read or not.
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.haveRead = haveRead; // this might need to change ? 
	this.info = function() {
		return (`${this.title} by ${this.author}, ${this.pages} pages 
			${haveRead === true ? "completed" : "not read yet"}`)
        }
};

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const haveReadInput = document.querySelector("#have-read");
const addBookButton = document.querySelector(".add-book");

addBookButton.addEventListener("click", () => {
    const title = titleInput.value;
    const author = authorInput.value;
    const pages = pagesInput.value;
    const haveRead = haveReadInput.value;
    addBookToLibrary(title, author, pages, haveRead);
})

let book1 = new Book("The Ninth House", "Leigh Bardugo", 578, true); // dummy books for display.
let book2 = new Book("Hell Bent", "Leigh Bardugo", 655, false);
let book3 = new Book("A Course of Thorns and Roses", "Sarah J Maas", 390, true);
let book4 = new Book("Snow White", "Walt Disney", 267, false);

const myLibrary = [book1, book2, book3, book4]; // initialise array for books to be stored.

function addBookToLibrary(title, author, pages, haveRead) { // function that will be called on click of "confirm add" after the inputs have been collected from user.
    const newBook = new Book(title, author, pages, haveRead); // create new book by declaring new book.
    myLibrary.push(newBook); // add to the array.
    displayLibrary(myLibrary);
};

function displayLibrary(array) { // guessing we need func instead of it running auto, so that any book card added is updated on submit instead of needing to refresh?
    const container = document.querySelector(".display-books"); // select the div that will be displaying.
    container.innerHTML = ""; // clears all elements (not just text) and safe to use here since we are removing and not adding from external sources.

    array.forEach(book => {
        const bookCard = document.createElement("div"); // must be a standard html tag.
        bookCard.classList.add("book-card"); // attach a class to created div element.

        const title = document.createElement("h3");
        title.textContent = book.title;
        bookCard.append(title);

        const author = document.createElement("h5");
        author.textContent = book.author;
        bookCard.append(author);

        const pages = document.createElement("p");
        pages.textContent = book.pages;
        bookCard.append(pages);

        const haveRead = document.createElement("button");
        haveRead.textContent = book.haveRead ? "Read" : "Not Read";
        bookCard.append(haveRead);

        container.append(bookCard); // append completed bookcard to the container div. (display it).
    }); 
    //display each book on the page. ?
   //loop through myLibrary and for each - create an element that will display a card (dom manipulation).
}

displayLibrary(myLibrary);