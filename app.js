const submitBtn = document.querySelector("#submit");
const signinBtn = document.querySelector("#signin");
const signupBtn = document.querySelector("#signup");
const booksContainer = document.querySelector(".books-container");

/* Sign In and Sign Up Button */
signinBtn.addEventListener("click", () => {
    alert("You Have Successfully Signed In to our Library");
});
signupBtn.addEventListener("click", () => {
    alert("You Have Successfully Signed Up to our Library");
});

/* Constructor */
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

const books = [];

function addBookToLibrary() {
    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked;

    if (title && author && pages) {
        const newBook = new Book(title, author, pages, read);
        books.push(newBook);

        // Create a card for the book
        const div = document.createElement("div");
        div.setAttribute("style",
            "display:inline-block; margin:10px;padding:10px; text-align:left; width:40%; height:auto; background-color:white; border-radius:10px; color:black; font-size:1rem; font-weight:bold;"
        );

        // Create title, author, pages, read status, and delete button elements
        const titleElement = document.createElement("h3");
        const authorElement = document.createElement("p");
        const pagesElement = document.createElement("p");
        const readElement = document.createElement("p");
        const buttonElement = document.createElement("button");

        // Set content for each element
        titleElement.textContent = `Title: ${newBook.title}`;
        authorElement.textContent = `Author: ${newBook.author}`;
        pagesElement.textContent = `Pages: ${newBook.pages}`;
        readElement.textContent = `Read: ${newBook.read ? "Yes" : "No"}`;
        buttonElement.textContent = "Delete";

        // Style the delete button
        buttonElement.setAttribute("style", "margin-top:10px; background-color:red; color:white; border:none; padding:5px 10px; border-radius:5px; cursor:pointer;");
        titleElement.setAttribute("style", "margin-top:10px; color:brown;font-size:1.5rem; font-weight:bold; ");
        authorElement.setAttribute("style", "margin-top:10px; color:brown;font-size:1.2rem; font-weight:bold; ");
        pagesElement.setAttribute("style", "margin-top:10px; color:brown;font-size:1.1rem; font-weight:bold; ");
        readElement.setAttribute("style", "margin-top:10px; color:brown; font-size:1.1rem; font-weight:bold;");
        // Add delete functionality
        buttonElement.addEventListener("click", () => {
            div.remove();
            const index = books.indexOf(newBook);
            if (index > -1) {
                books.splice(index, 1); // Remove book from array
            }
        });

        // Append elements to the card
        div.appendChild(titleElement);
        div.appendChild(authorElement);
        div.appendChild(pagesElement);
        div.appendChild(readElement);
        div.appendChild(buttonElement);

        // Append card to the container
        booksContainer.appendChild(div);
    } else {
        alert("Please fill in all fields.");
    }
}

submitBtn.addEventListener("click", () => {
    addBookToLibrary();
});
