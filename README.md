string-similarity
=================

A fork of: https://github.com/aceakash/string-similarity.

Finds degree of similarity between two strings, based on [Dice's Coefficient](http://en.wikipedia.org/wiki/S%C3%B8rensen%E2%80%93Dice_coefficient), which is mostly better than [Levenshtein distance](http://en.wikipedia.org/wiki/Levenshtein_distance).

## API

The package contains only one method:

### compareTwoStrings(string1, string2)

Returns a fraction between 0 and 1, which indicates the degree of similarity between the two strings. 0 indicates completely different strings, 1 indicates identical strings. The comparison is case-sensitive.

##### Arguments
  
1. string1 (string): The first string
2. string2 (string): The second string
  
Order does not make a difference.
  
##### Returns
  
(number): A fraction from 0 to 1, both inclusive. Higher number indicates more similarity.

##### Examples
  
```javascript
stringSimilarity.compareTwoStrings('healed', 'sealed');
// → 0.8

stringSimilarity.compareTwoStrings('Olive-green table for sale, in extremely good condition.', 
  'For sale: table in very good  condition, olive green in colour.');
// → 0.6060606060606061

stringSimilarity.compareTwoStrings('Olive-green table for sale, in extremely good condition.', 
  'For sale: green Subaru Impreza, 210,000 miles');
// → 0.2558139534883721

stringSimilarity.compareTwoStrings('Olive-green table for sale, in extremely good condition.', 
  'Wanted: mountain bike with at least 21 gears.');
// → 0.1411764705882353
```
