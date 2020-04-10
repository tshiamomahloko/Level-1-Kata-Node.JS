let height = 6;

function Triangle(height){
    for(let begin = 1; begin <= height; begin++){
        console.log("#".repeat(begin));
    }
}

Triangle(height);

//Another way

let num2 = 6;

function triangle(num2){
    var hash = "#"
    
    for(var i=0; i < num2; i++){
         console.log(hash);
         hash += "#" ;
     }
}

triangle(num2);