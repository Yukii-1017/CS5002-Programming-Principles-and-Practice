//Question 1
var books = [
    ["9780744016697", "9780099549482", "9780744016680",  "9780062409904", "9780099529125", "9781785150289", "9780554579901", 
    "9781853260001", "9781784871894"],
    ["The Legend of Zelda: Tri Force Heroes", "To Kill a Mockingbird", "The Legend of Zelda: Tri Force Heroes", "Go Set A Watchman",
     "Catch-22","Go Set A Watchman", "A Clash of Kings", "Pride and Prejudice", "Casino Royale"],
    ["Prima Games", "Harper Lee", "Prima Games", "Harper Lee", "Joseph Heller", "Harper Lee", "George R. R. Martin", "Jane Austin", 
    "Ian Fleming" ],
    ["Hardcover", "Paperback", "Paperback", "Audio Book CD", "Paperback", "Hardcover", "Paperback", "Paperback", "Hardcover"],
    ["14.99", "4.99", "9.99", "10.89", "6.29", "9.89", "4.95", "1.99", "6.79"],
    ["2", "3", "1", "2", "0", "3", "5", "4", "1"]
];

// printAllBooks()
//Method 1 (preferable)
var printBook = function(i) {
    console.log(`[${books[0][i]}] 
    ${books[1][i].italics()}, 
    written by ${books[2][i]}, 
    format: ${books[3][i]}, 
    price: £${books[4][i]}, 
    current stock: ${books[5][i]}`);
}

var printAllBooks = function () {
    for (var i = 1; i < books[1].length; i++) {printBook(i);}
};

printAllBooks();

//Method 2
//console.table(book);

// Method 3
/*
for (var idx = 0; idx < book.length; idx++){
    console.log(book[idx]);
};
*/

// Method 4
/*
book.forEach(function(item){
    console.log(item);
});
*/



// Function 2 - sell(isbn)
/*var sell = function(isbn){
    var idx = book[0].indexOf(isbn,1); 
    while (idx === -1){
        var isbn = prompt('Please input a right ISBN: ');
        var idx = book[0].indexOf(isbn,1); 
    };

    if (idx > -1 && book[5][idx] != 0){
        book[5][idx] -= 1;
        console.log(book[5][idx]);            
    }else{
        prompt('Sorry, there is no stock.');
    };
};

var isbn = prompt('Please input your ISBN: ');
sell(isbn);*/


// Function 3 - printByTitle(title)
/*var printByTitle = function(title){

    var unBook = [];
    for (var i = 1; i < book[1].length; i ++){
        //test if in the database
        if (book[1][i].toLowerCase().indexOf(title,1) === -1){
            var unBookLength = unBook.push(book[1][i].toLowerCase().indexOf(title,1));
            if(unBookLength === 9){
                var title = prompt('This book does not exist in the database. Please input another title: ').toLowerCase;
            };
        };
        // output detail
        if (book[1][i].toLowerCase() == title){
            console.log(book[0][0]+': '+book[0][i]+'\n',
                        book[1][0]+': '+book[1][i]+'\n',
                        book[2][0]+': '+book[2][i]+'\n',
                        book[3][0]+': '+book[3][i]+'\n',
                        book[4][0]+': '+book[4][i]+'\n',
                        book[5][0]+': '+book[5][i]+'\n')
        };
    };
            
};

var title = prompt ("Please input a book title: ").toLowerCase();  

printByTitle(title);*/


//Function 4 - printByAuthor(author)
/*var printByAuthor = function(author){

    var unAuthor = [];
    for (var i = 1; i < book[2].length; i ++){
        //test if in the database
        if (book[2][i].toLowerCase().indexOf(author,1) === -1){
            var unAuthorLength = unAuthor.push(book[1][i].toLowerCase());
            if(unAuthorLength === 9){
                var author = prompt("This author is not in this database. You could input another author: ");
            };
        };
        // output detail
        if (book[2][i].toLowerCase() == author){
            console.log(book[2][i],book[1][i]);
        };
    };
            
};

var author = prompt("Please input an author: ");
printByAuthor(author);*/


//Function 5 - printOverPrice(price)
/*
var printOverPrice = function(price){

    if (price > 14.99){
        alert("there is no book higher than this price.");
    }else if(isNaN(price)){
        alert("Please input a right number.");
    }else{
        for (var i = 1; i < book[4].length; i ++){
            if (parseFloat(book[4][i]) > price){
                console.log(book[1][i],book[4][i]);
            };
        };
    };
};

var price = parseFloat(prompt("Please input the minimun price: "));
printOverPrice(price);
*/
// Function 6 

