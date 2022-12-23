var Box = function (height, width, length, material, content) {
    Object.defineProperties(this, 
        {
        "content": 
        {
            value: content,
            writable: true,
            enumerable: true,
            configurable: true
        },
        "height": {
            value: height,
        },
        "width": {
            value: width,
        },
        "length": {
            value: length,
        },
        "material": {
            value: material,
        },
        "numOfBooks": 
        {
            value: function () {
                var counter = 0;
                for (var i in content) {
                    counter += content[i].numOfCopies;
                }
                return counter;
            }
        },
        deleteBook: 
        {
            value: function (bookTitle) 
            {
                var found = false;
                for (var i in this.content) 
                {
                    if (this.content[i].title === bookTitle) 
                    {
                        (content[i].numOfCopies > 1) ? content[i].numOfCopies-- : content.splice(i, 1);
                        found = true;
                    }
                }
                if (!found) console.log("There is no book named " + bookTitle + " in this box!");
            }
        },

    });

};


Box.prototype.valueOf = function () 
{
    return this.numOfBooks();
}


Box.prototype.toString = function () 
{
    console.log("\nBox Dimensions are L x W x H : " + this.length + " x " + this.width + " x " + this.height);
    console.log("\n**** Data of " + this.numOfBooks() + " Books *****\n");

    for (var i in this.content) 
    {
        console.log("Book: '" + this.content[i].title + "' has " + this.content[i].numOfCopies + " copies");
    }

}

var Book = function (title, numOfChapters, author, numOfPages, publisher, numOfCopies) {
    Object.defineProperties(this, {
        numOfCopies: {
            value: numOfCopies,
            writable: true,
        },
        title: {
            value: title,
        },
        numOfChapters: {
            value: numOfChapters,
        },
        author: {
            value: author,
        },
        numOfPages: {
            value: numOfPages,
        },
        publisher: {
            value: publisher,
        }
    });
};
