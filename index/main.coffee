alert "Welcome to my anagram finder written in 100% CoffeeScript."

word1 = prompt "Please enter your first word:"
word2 = prompt "Please enter your second word:"

isEqual =(array1,array2) ->
  array1.length == array2.length && array1.every (value, index) => value == array2[index]

findAnagram =(word1,word2) ->
  letters1 = []
  letters2 = []
  for letter in word1
    letters1.push letter
  for letter in word2
    letters2.push letter
  if " " in letters1 or " " in letters2
    alert "Enter 1 word, not multiple."
  else
    if isEqual letters1.sort(),letters2.sort()
      alert "These words are anagrams"
    else
      alert "These words are not anagrams"

findAnagram word1,word2