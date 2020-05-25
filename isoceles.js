let height = 6;
let increment = 0;

function isoceles(height){
    for(let begin = 1; begin <= height; begin++){
        console.log('&nbsp;'.repeat(height-begin) + "#".repeat(begin + increment));
        increment = increment + 1;
    }
}

isoceles(height);
