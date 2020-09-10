word-similarity
=================

A fork of: https://github.com/aceakash/string-similarity.

Finds the degree of similarity between two words, based on the [Dice's Coefficient](http://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient), which is mostly better than [Levenshtein distance](http://en.wikipedia.org/wiki/Levenshtein_distance).

## API

The package contains only one method:

### compareWords(word1, word2)

Returns a score between 0 and 1, which indicates the degree of similarity between the two words. 0 indicates completely different words, 1 indicates identical words. The comparison is case-sensitive.

##### Arguments
  
1. word1 (string): The first word
2. word2 (string): The second word
  
Order does not make a difference.
  
##### Returns
  
(number): A number from 0 to 1, both inclusive. A higher number indicates a greater similarity.

##### Examples
  
```javascript
wordSimilarity.compareWords('healed', 'sealed');
// → 0.8

wordSimilarity.compareWords('fRaNce', 'france');
// → 0.2

wordSimilarity.compareWords('france', 'france');
// → 1
```
