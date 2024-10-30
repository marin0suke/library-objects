const myLibrary = []; // initialise array for books to be stored.

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

let book1 = new Book("The Ninth House", "Leigh Bardugo", 578, true); // dummy books for display.
let book2 = new Book("Hell Bent", "Leigh Bardugo", 655, false);
let book3 = new Book("A Course of Thorns and Roses", "Sarah J Maas", 390, true);
let book4 = new Book("Snow White", "Walt Disney", 267, false);

function addBookToLibrary(title, author, pages, haveRead) { // function that will be called on click of "confirm add" after the inputs have been collected from user.
    const newBook = new Book(title, author, pages, haveRead); // create new book by declaring new book.
    myLibrary.push(newBook); // add to the array.
};

function displayLibrary() {
    //display each book on the page. ?
    //loop through myLibrary and for each - create an element that will display a card (dom manipulation).
}