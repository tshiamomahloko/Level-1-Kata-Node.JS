let firstList = [11,22,33,44,55];
let secondList = [1,2,3,4];

function combineArrays(firstList, secondList){
    let combined = [];

    for(var word = 0; word < firstList.length || word < secondList.length; word++){
        combined.push(firstList[word],secondList[word]);
    }

    for (var a = 0; a < combined.length; a++) {
        console.log(combined[a]);
    }
}

combineArrays(firstList, secondList);