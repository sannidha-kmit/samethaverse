import { getAllProverbs, getProverbById } from './lib/getProverbs';

async function testProverbs() {
    console.log('Testing getAllProverbs...');
    const allProverbs = getAllProverbs();
    console.log(`Total proverbs found: ${allProverbs.length}`);

    if (allProverbs.length > 0) {
        console.log('First proverb:', allProverbs[0].proverb);
        console.log('Last proverb:', allProverbs[allProverbs.length - 1].proverb);
    } else {
        console.error('FAILED: No proverbs found!');
        process.exit(1);
    }

    console.log('\nTesting getProverbById(100)...');
    const proverb100 = getProverbById(100);
    if (proverb100 && proverb100.id === 100) {
        console.log('SUCCESS: Found proverb 100:', proverb100.proverb);
    } else {
        console.error('FAILED: Proverb 100 not found or mismatch!');
        process.exit(1);
    }

    console.log('\nTesting getProverbById(202)...');
    const proverb202 = getProverbById(202);
    if (proverb202 && proverb202.id === 202) {
        console.log('SUCCESS: Found proverb 202:', proverb202.proverb);
    } else {
        console.error('FAILED: Proverb 202 not found or mismatch!');
        process.exit(1);
    }

    console.log('\nAll tests passed!');
}

testProverbs().catch(err => {
    console.error('Test execution failed:', err);
    process.exit(1);
});
