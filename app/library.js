module.exports = function(s){
    s = s.replace(/(^\s*)|(\s*$)/gi,""); //exclude  start and end white-space
    s = s.replace(/[ ]{2,}/gi," "); //2 or more space to 1
    s = s.replace(/\n\r/,"\n"); //newline
	var words = s.split(/\s/);
    var wordMap = {};
    words.forEach(function(w) {
        //check if a word has its own property
        if(Object.hasOwnProperty.call(wordMap, w)){
            wordMap[w] += 1;
        }
        else{
            wordMap[w] = 1;
        }
        
    });

    return wordMap;
}