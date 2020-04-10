let length = 5;

function Square(length) {

    for (let begin = 1; begin <= length; begin++) {
        console.log('#'.repeat(length));
    }
}

Square(length);

//Another Way

let num1 = 5;

function square(num1) {
    var hash = "#";

    for (var i = 0; i < num1; i++) {
        console.log(hash.repeat(num1));
    }
}

square(num1);