const Rectangle = function (width, length) {
    this.width = width;
    this.length = length;
    this.area = function () {
        console.log("Area: " + (length * width));
    }

    this.parameter = function () {
        console.log("Parameter: " + (length + width * 2));
    }

    this.display = function () {
        console.log("Width: " + width + "Length: " + length + "Area: " + area + "Parameter: " + parameter);
    }


}

let r1 = new Rectangle(4, 6);
let r2 = new Rectangle(10, 20);

r1.area(); r1.parameter();

r2.area(); r2.parameter();

r1.displayInfo(); r2.displayInfo();