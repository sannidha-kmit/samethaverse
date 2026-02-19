const { matchProverb } = require('./utils/matchProverb');

const testInputs = ['habit', 'luck', 'snake', 'sleep', 'will', ''];

testInputs.forEach(input => {
    const result = matchProverb(input);
    console.log(`Input: "${input}"`);
    console.log(`Matched Proverb: ${result.proverb}`);
    console.log(`Meaning: ${result.meaning}`);
    console.log('---');
});
