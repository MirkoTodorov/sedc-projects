/*

1. Create an object for books
{
    "headers" : ["#", "name", "author", "genre", "comments"],
    "books" : [],
    "authors" : [],
    "genres" : []
}
Fill table headings with headers values from object for books

2. Create new object for book with Object.freeze
{
    id : 0,
    name : 'Default book name'
    author : 0,
    genres : [],
    comments: []
}

3. Create new object for genres with Object.freeze
{
    "SCI-FI": "Sci-Fi",
    "DRAMA": "Drama",
    "HORROR": "Horror",
    "COMEDY": "Comedy",
    "SPANSKA_SERIJA": "Spanska Serija",
    "TURSKA_SERIJA": "Turska Serija",
    "DOCUMENTARY": "Documentary",
    "THRILLER": "Thriller",
    "OTHERS": "Others"
}

4. Use genres object to print checkboxes in the add book form using function

5. Submit add book form, and get all values in a function

6. Create new object using object descruct with values from
submitted form by passing them to constructor (template funciton)

7. LList all books that are added into the table, using a function from books object

*/
function createHeaders(headers){
    let table = document.querySelector('.display-books > div > table');
    // console.log(table);
    let tr = document.createElement('tr');
    headers.map((header) => {
        let td = document.createElement('td');
        td.innerHTML = header;
        tr.appendChild(td);
    });
    table.appendChild(tr);
};

let books = {
    "headers" : ["#", "name", "author", "genre", "comments"],
    "books" : [],
    "authors" : [],
    "genres" : []
};

let defaultBook = Object.freeze({
    id : 0,
    name : 'Default Book Name',
    author : 0,
    genres : [],
    comments: []
});

function defaultBookObject(){
    return {
        id : 0,
        name : 'Default Book Name',
        author : 0,
        genres : [],
        comments: []
    }
}

let genres = Object.freeze({
    "SCI-FI": "Sci-Fi",
    "DRAMA": "Drama",
    "HORROR": "Horror",
    "COMEDY": "Comedy",
    "SPANSKA_SERIJA": "Spanska Serija",
    "TURSKA_SERIJA": "Turska Serija",
    "DOCUMENTARY": "Documentary",
    "THRILLER": "Thriller",
    "OTHERS": "Others"
})

let {headers} = books;
createHeaders(headers);

//Print all the gennres
function printGenres(genres){
    //<input type="checkbox" name="comedy" value="comedy">Comedy<br>
    let genresDiv = document.querySelector('.add-book-checkbox');
    // let counter = 1;
    let keys = Object.keys(genres);

    keys.map((key) => {
        let checkbox = document.createElement('input');
        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('name', 'genre');
        checkbox.setAttribute('value', key)
        // checkbox.innerHTML = genres[key];
        let label = document.createElement('label')
        label.innerHTML = genres[key];
        let br = document.createElement('br');
        genresDiv.appendChild(checkbox);
        genresDiv.appendChild(label);
        genresDiv.appendChild(br);
        //label element can contain the checkbox inside it
    })
}

printGenres(genres);


//Get add new book form
let addBookForm = document.querySelector('.add-book-form');
//Attach submit event to add new book form
addBookForm.addEventListener('submit', (e) => {
    e.preventDefault(); //Stops the page refresh

    // console.log(e);
    // console.log(e.target.elements);
    //Get target elements and its inputs
    let {target:{elements:inputs}} = e;
    console.log(inputs);

    // let fData = new FormData(addBookForm);

    // console.log(inputs, fData.keys());

    // fData.forEach((v) => console.log(v));

    //Make blanco copy of default book
    let bookCopy = defaultBookObject();

    //Cast HTMLElementCollection (array) to Array
    Array(...inputs).map((element) => {
        console.log(element);
        //Make blanco copy of default book
        // bookCopy = Object.assign({}, defaultBook);
        // console.log(bookCopy);

        let {name, value:val, type, checked} = element;
        // console.log(name, val, type, checked);

        if(type === 'text'){
            if(name === 'book-name')
                bookCopy.name = val;
                //Author will be skipt
        }
        else if(type === 'checkbox' && name === 'genre' && checked){
            bookCopy.genres.push(val);
        }
    })

    console.log(bookCopy);
    storeBookToBooks(bookCopy);
    // printBooks();

}, false)

function CorrectBooktemplate({id, name, author, genres, comments}){
    this.id = id || books.books.length + 1;
    this.name = name;
    this.author = author;
    this.genres = genres;
    this.comments = comments;
}

function storeBookToBooks(book){
    // console.log(book);
    books.books.push(new CorrectBooktemplate(book));
    console.log(books);
    // localStorage.setItem('li')
    printBooks();
}

function printBooks(){
    let table = document.querySelector('.display-books > div > table');
    // let [...b, book] = books.books;
    let tr = document.createElement('tr');
    let book = books.books[books.books.length-1];
    // con
    let keys = Object.keys(book);

    keys.map((propertyValue) => {
        let td = document.createElement('td');
        td.innerHTML = book[propertyValue];
        tr.appendChild(td);
    });
    table.appendChild(tr);
}