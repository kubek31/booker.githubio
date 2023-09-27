// Define an array to store published books with titles
const publishedBooks = [];
// Define an array to store saved books (from local storage)
let savedBooks = JSON.parse(localStorage.getItem('savedBooks')) || [];

// Function to publish a book
function publishBook() {
    const bookTitle = document.getElementById('bookTitle').value;
    const bookContent = document.getElementById('bookContent').value;

    if (bookTitle.trim() !== '' && bookContent.trim() !== '') {
        // Create an object with title and content
        const book = {
            title: bookTitle,
            content: bookContent
        };

        // Add the book object to the array
        publishedBooks.push(book);

        // Display the published books
        displayPublishedBooks();

        // Clear the input fields
        document.getElementById('bookTitle').value = '';
        document.getElementById('bookContent').value = '';
    }
}

// Function to display published books
function displayPublishedBooks() {
    const publishedBooksContainer = document.getElementById('publishedBooks');
    publishedBooksContainer.innerHTML = '';

    publishedBooks.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.innerHTML = `
            <h3><a href="#" onclick="loadBook(${index})">${book.title}</a></h3>
            <p>${book.content}</p>
        `;
        publishedBooksContainer.appendChild(bookDiv);
    });
}

// Function to load a book
function loadBook(index) {
    const bookToLoad = publishedBooks[index];

    // Populate the title and content fields
    document.getElementById('bookTitle').value = bookToLoad.title;
    document.getElementById('bookContent').value = bookToLoad.content;
}

// Function to save a book
function saveBook() {
    const bookTitle = document.getElementById('bookTitle').value;
    const bookContent = document.getElementById('bookContent').value;

    if (bookTitle.trim() !== '' && bookContent.trim() !== '') {
        // Create an object with title and content
        const book = {
            title: bookTitle,
            content: bookContent
        };

        // Add the book object to the savedBooks array
        savedBooks.push(book);

        // Save the updated list of saved books to local storage
        localStorage.setItem('savedBooks', JSON.stringify(savedBooks));

        // Display the saved books
        displaySavedBooks();
    }
}

// Function to display saved books
function displaySavedBooks() {
    const savedBooksContainer = document.getElementById('savedBooks');
    savedBooksContainer.innerHTML = '';

    savedBooks.forEach((book, index) => {
        const bookDiv = document.createElement('div');
        bookDiv.innerHTML = `
            <h3><a href="#" onclick="loadBook(${index})">${book.title}</a></h3>
            <p>${book.content}</p>
        `;
        savedBooksContainer.appendChild(bookDiv);
    });
}

// Display published and saved books on page load
displayPublishedBooks();
displaySavedBooks();
