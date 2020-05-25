let words = ['the', 'quick', 'brown', 'fox', 'ate', 'my', 'chickens', 'tshiamoa', 'ththasdf'];

function longest(words) {
    let longest = '';
    let longestList = [];

    for (var word of words) {
        if (word.length >= longest.length) {
            longest = word;
            longestList.push(longest);
        }
        for (var longer of longestList) {
            if (longer.length < longest.length) {
                longestList.shift();
            }
        }
    }
    
    function display(longestList) {
        for (var a = 0; a < longestList.length; a++) {
            console.log(longestList[a]);
        }
    }
    display(longestList);
}

longest(words);
