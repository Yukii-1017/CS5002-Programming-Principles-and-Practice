//Question 1
var books = {
    isbns: ["9780744016697", "9780099549482", "9780744016680",  "9780062409904", "9780099529125", "9781785150289", "9780554579901", 
    "9781853260001", "9781784871894"],
    titles: ["The Legend of Zelda: Tri Force Heroes", "To Kill a Mockingbird", "The Legend of Zelda: Tri Force Heroes", "Go Set A Watchman",
    "Catch-22","Go Set A Watchman", "A Clash of Kings", "Pride and Prejudice", "Casino Royale"],
    authors: ["Prima Games", "Harper Lee", "Prima Games", "Harper Lee", "Joseph Heller", "Harper Lee", "George R. R. Martin", "Jane Austin", 
    "Ian Fleming"],
    formats: ["Hardcover", "Paperback", "Paperback", "Audio Book CD", "Paperback", "Hardcover", "Paperback", "Paperback", "Hardcover"],
    prices: [14.99, 4.99, 9.99, 10.89, 6.29, 9.89, 4.95, 1.99, 6.79],
    stocks: [2, 3, 1, 2, 0, 3, 5, 4, 1]
}


var printBook = function(i) {

    books.isbns[i] = books.isbns[i].substring(0,3) + '-'+books.isbns[i].substring(3,4) + '-'+ 
                     books.isbns[i].substring(4,7) + '-'+books.isbns[i].substring(7,12) + '-'+ 
                     books.isbns[i].substring(12,13);

    console.log(`[${books.isbns[i]}] ${books.titles[i].italics()}, written by ${books.authors[i]}, format: ${books.formats[i]}, price: £${books.prices[i]}, current stock: ${books.stocks[i]}`);
}

var printAllBooks = function () {
    for (var i = 0; i < books.isbns.length; i++) {printBook(i);}
}

//printAllBooks();



var sell = function (isbn) {
    var index = books.isbns.indexOf(isbn);

    if (index !== -1) {
        books.stocks[index] !== 0
        ?   books.stocks[index]--
        :   alert("There is no stocks.");
    } else alert("This book is not found in this database.");
}
// console.log(books.stocks)
// var isbn = prompt('please input the ISBN of the sold book: ');
// sell(isbn);
// console.log(books.stocks);



var printByTitle = function(title) {
    books.titles.forEach(function(t, i) {
        if(t === title){
            printBook(i)
        }
    });
}
//var title = prompt('please input the title of the sold book: ');
//printByTitle(title);



var printByAuthor = function(author) {
    books.authors.forEach(function(a, i) {
        if(a === author){
            printBook(i)
        }
    });
}
//var author = prompt('Please input an author: ');
//printByAuthor(author);


var printOverPrice = function(price) {

    books.prices.forEach(function(p, i) {
        if(p >= price){
            printBook(i);
        }
    });
}
//var price = prompt('Please input your minimum price: ');
//printOverPrice(price);


var search = function(text) {
    for(var i = 0; i < books.titles.length; i++) {
        if(books.titles[i].includes(text) || books.authors[i].includes(text)){
            printBook(i);
        }
    }
}
//var text = prompt('Please input the text you want to search: ');
//search(text);






//Question 2

var validISBN = function(isbn){
    var product = 0;
    for (var i = 0; i < isbn.length-1; i++){
        (i % 2 === 0)
            ? product += +isbn[i]
            : product += +isbn[i] * 3;
    }

    console.log(product, isbn);
    return (10 - (product % 10)) === +isbn[isbn.length-1] || ((product % 10 === 0) && +isbn[isbn.length-1] === 0);
}
var isbn = prompt('Please input a ISBN: ').split("").map(x=>+x);
validISBN(isbn);




var validateISBNs = function(){
    for (var a = 0; a < books.isbns.length; a++){
        if (validISBN(books.isbns[a])) {
            printBook(a);
        }else{
            console.log(`${books.titles[a].italics()}, [${books.isbns[a]}] dose not have a valid isbn.`);
            books.isbns.splice(a, 1);
            books.titles.splice(a, 1);
            books.authors.splice(a, 1);
            books.formats.splice(a, 1);
            books.prices.splice(a, 1);
            books.stocks.splice(a, 1);
        }
    }
}
//validateISBNs();