/*
piglatin.js
Authored By Sean Gilliland
01/19/2017

If first letter in a word is a vowel,
add 'way' to the end of the word.

if first letter is a consonant and second letter is a vowel,
append first letter to the end of the word and add 'ay' to the end.

if first two letters are consonants
append first two letters to the end of the word and add 'ay' to the end.

*/
    
        
var sentence = prompt("Enter a Sentence to translate it to Pig Latin");

while (sentence == ""){
    alert("Please enter A sentence!");
    var sentence = prompt("Enter a Sentence to translate it to Pig Latin");
}

var words = sentence.split(" ");

var translatedWords = [];

var vowels = 'aeiou';


for (var i in words) {
    var word = words[i];
    if (vowels.includes(word.charAt(0))){
        var vowelStart = word+"way";
        translatedWords.push(vowelStart);
    } else if(vowels.includes(word.charAt(1))){
        var oneConsP1 = word.substring(1);
        var oneConsP2 = word.substring(0, 1);
        var oneCons = oneConsP1 + oneConsP2 + 'ay';
        translatedWords.push(oneCons);
    } else {
        var twoConsP1 = word.substring(2);
        var twoConsP2 = word.substring(0,2);
        var twoCons = twoConsP1 + twoConsP2 + 'ay';
        translatedWords.push(twoCons);
    }
    
}

document.write(translatedWords);