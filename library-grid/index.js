/* 
    Library
    
    Fetch the collection of books 
        from books.json, assign each 
        a unique id
        
    Create a div to represent a book
        using Grid & grid-template-areas 
        build a book component
        display all books using Flexbox
*/

/* 
    Library (Challenge)

    Write a displayLibrary(books) function
        - Add error catching

    Use CSS Grid instead of Flexbox to style 
        the library container
        - Use a gap of 1rem
        - Display 3 books per row
*/

async function getBooks() {
    let res = await fetch('books.json')
    let books = await res.json()
    let n = 1
    return books.map(book => {
        book.id = n
        n++
        return book
    })
}



function getBookHTML(book) {
    return `
    <div class="my-book">
        <div class="my-book-cover">${book.title}</div>
        <div class="my-book-spine"></div>
        <div class="my-book-footer"></div>
    </div>
`
}

function displayLibrary(books) {
    document.body.innerHTML = `
    <div class="my-library">
       ${books.map(getBookHTML).join('')}
    </div>
`
}


getBooks().then(displayLibrary).catch(err => console.log(err))