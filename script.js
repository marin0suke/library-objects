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

function addBookToLibrary() { // call on click of add book button.
    // take user input and store new book objects into array. make sure validation for each required.
    // form? alert? button to press that then brings up a form to input. form takes input and stores into obj using book function. (woo how to do this lol).
};

function displayLibrary() {
    //display each book on the page. 
}