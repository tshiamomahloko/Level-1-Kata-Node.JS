let length = 5;

function Square(length) {

    for (let begin = 1; begin <= length; begin++) {
        console.log('#'.repeat(length));
    }
}

Square(length);
