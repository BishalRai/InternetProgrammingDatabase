const bookList = ["Book 1","Book 2","Book 3"];

const book = {
    getAllBooks(){
        console.log(bookList);
        //select * from book;
    },
    addNewBook(NameOFNewBook){
        console.log("New Book " + NameOFNewBook + " has been added.");
        //insert into book
    }
}

book.getAllBooks();
book.addNewBook("Alchimist");
