function getBookView(book){
    const bookView = document.createElement("div");
    bookView.classList.add("book");

    // title view
    const titleView = document.createElement("div");
    titleView.innerText = book.title;
    titleView.classList.add("name");
    bookView.append(titleView);
    // author view
    const authorView = document.createElement("div");
    authorView.innerText = book.author;
    authorView.classList.add("author");
    bookView.append(authorView);
    // pages view
    const pagesView = document.createElement("div");
    pagesView.innerText = book.pages;
    pagesView.classList.add("pages");
    bookView.append(pagesView);
    return bookView;
}