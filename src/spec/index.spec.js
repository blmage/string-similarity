var wordSimilarity = require('../index');

describe('compareWords', () => {
  var compareWords = wordSimilarity.compareWords;

  it('is a function', () => {
    expect(typeof compareWords).toEqual('function');
  });

  it('returns the correct value for different inputs:', () => {
    const testData = [
      {
        first: 'french',
        second: 'quebec',
        expected: 0,
      }, {
        first: 'france',
        second: 'france',
        expected: 1,
      }, {
        first: 'fRaNce',
        second: 'france',
        expected: 0.2,
      }, {
        first: 'healed',
        second: 'sealed',
        expected: 0.8,
      }, {
        first: 'a',
        second: 'a',
        expected: 1,
      }, {
        first: 'a',
        second: 'b',
        expected: 0,
      }, {
        first: '',
        second: '',
        expected: 1
      }, {
        first: 'a',
        second: '',
        expected: 0,
      }, {
        first: '',
        second: 'a',
        expected: 0,
      },
    ];

    testData.forEach(test => {
      expect(compareWords(test.first, test.second)).toBe(test.expected, test);
    });
  });
});
