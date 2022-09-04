function findLongestWordLength(str) {
    let word = str.split(' ');
    let maxLength = 0;
    for (let i = 0; i < word.length; i++) {
        if ( word[i].length > maxLength) {
            maxLength = word[i].length;
        }        
    }
    return maxLength;
  }
  document.writeln(findLongestWordLength("learn the fundamentals of algorithmic thinking by writing"));