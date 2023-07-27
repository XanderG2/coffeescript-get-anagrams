// Compiled from Coffeescript (index/main.coffee)
(function() {
  var findAnagram, isEqual, word1, word2,
    indexOf = [].indexOf;

  alert("Welcome to my anagram finder written in 100% CoffeeScript.");

  word1 = prompt("Please enter your first word:");

  word2 = prompt("Please enter your second word:");

  isEqual = function(array1, array2) {
    return array1.length === array2.length && array1.every((value, index) => {
      return value === array2[index];
    });
  };

  findAnagram = function(word1, word2) {
    var i, j, len, len1, letter, letters1, letters2;
    letters1 = [];
    letters2 = [];
    for (i = 0, len = word1.length; i < len; i++) {
      letter = word1[i];
      letters1.push(letter);
    }
    for (j = 0, len1 = word2.length; j < len1; j++) {
      letter = word2[j];
      letters2.push(letter);
    }
    if (indexOf.call(letters1, " ") >= 0 || indexOf.call(letters2, " ") >= 0) {
      return alert("Enter 1 word, not multiple.");
    } else {
      if (isEqual(letters1.sort(), letters2.sort())) {
        return alert("These words are anagrams");
      } else {
        return alert("These words are not anagrams");
      }
    }
  };

  findAnagram(word1, word2);

}).call(this);
