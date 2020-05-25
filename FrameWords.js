let words = ["Write", "good", "code", "every", "day","Tshiam"];

function frame(words){

    console.log('*********');
    for (let begin = 0; begin < words.length; begin++) {
        console.log('*' + words[begin] + "\t" +"*");
    }
    console.log('*********');
}

frame(words);
