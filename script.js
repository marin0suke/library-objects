class Book { // changed from function (constructor on its own)
    constructor(title, author, pages, haveRead) { // Book obj with functionality for whether have read or not.
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.haveRead = haveRead; // this might need to change ? 
    }

	info() { // changed from this.info = function() {}; now a method in a class.
		return (`${this.title} by ${this.author}, ${this.pages} pages 
			${haveRead === true ? "completed" : "not read yet"}`)
    }

    toggleReadStatus() {
        this.haveRead = !this.haveRead;
    }
};

const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const haveReadInput = document.querySelector("#have-read");
const addBookButton = document.querySelector(".add-book");

addBookButton.addEventListener("click", (event) => {
    event.preventDefault(); // this stops form validation happening but also make sure only submitted when we want - so we need to hva validation here in script. 

    const title = titleInput.value;
    const author = authorInput.value || "Author Unknown";
    const pages = parseInt(pagesInput.value);
    const haveRead = haveReadInput.checked;

    if (!title) {
        alert("Must have title to submit into library.");
        return;
    };

    addBookToLibrary(title, author, pages, haveRead);

    titleInput.value = "";
    authorInput.value = "";
    pagesInput.value = "";
    haveReadInput.checked = false;
})

let book1 = new Book("The Ninth House", "Leigh Bardugo", 578, true); // dummy books for display.
let book2 = new Book("Hell Bent", "Leigh Bardugo", 655, false);
let book3 = new Book("Snow White", "Walt Disney", 267, false);

const myLibrary = [book1, book2, book3]; // initialise array for books to be stored.


function displayLibrary(array, index) { // guessing we need func instead of it running auto, so that any book card added is updated on submit instead of needing to refresh?
    const container = document.querySelector(".display-books"); // select the div that will be displaying.
    container.innerHTML = ""; // clears all elements (not just text) and safe to use here since we are removing and not adding from external sources.

    array.forEach(book => {
        const bookCard = document.createElement("div"); // must be a standard html tag.
        bookCard.classList.add("book-card"); // attach a class to created div element.

        bookCard.dataset.index = index; 

        const title = document.createElement("h3");
        title.textContent = book.title;
        bookCard.append(title);

        const author = document.createElement("h5");
        author.textContent = book.author;
        bookCard.append(author);

        const pages = document.createElement("p");
        pages.textContent = book.pages ? `${book.pages} pages` : "Length unknown";
        bookCard.append(pages);

        const haveRead = document.createElement("button");
        haveRead.textContent = book.haveRead ? "Read" : "Unread";
        bookCard.append(haveRead);

        haveRead.addEventListener("click", () => { // give button function on click.
            book.toggleReadStatus(); // instead of having logic here, have method in class and just calling here.
            haveRead.textContent = book.haveRead ? "Read" : "Unread";
        });

        const removeCardButton = document.createElement("button");
        removeCardButton.textContent = "Delete";
        bookCard.append(removeCardButton);

        removeCardButton.addEventListener("click", () => {
            const bookIndex = parseInt(bookCard.dataset.index, 10); // radix specifies base 10 number.
            myLibrary.splice(bookIndex, 1);
            displayLibrary(myLibrary);
        });

        container.appendChild(bookCard); // append completed bookcard to the container div. (display it).
    }); 
    //display each book on the page. ?
   //loop through myLibrary and for each - create an element that will display a card (dom manipulation).
}

function addBookToLibrary(title, author, pages, haveRead) { // function that will be called on click of "confirm add" after the inputs have been collected from user.
    const newBook = new Book(title, author, pages, haveRead); // create new book by declaring new book.
    myLibrary.push(newBook); // add to the array.
    displayLibrary(myLibrary);
};

displayLibrary(myLibrary); 
