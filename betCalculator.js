const readline = require('readline');

// Create interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function convertOddsToProbability(odds) {
    const numericOdds = Number(odds);
    if (isNaN(numericOdds)) {
        return "Invalid odds format. Please provide a valid number.";
    }
    let probability;
    if (numericOdds < 0) {
        probability = -numericOdds / (-numericOdds + 100);
    } else {
        probability = 100 / (numericOdds + 100);
    }
    return (probability * 100).toFixed(2) + '%';
}

// Ask for user input
rl.question('Enter the name of the bet: ', (betName) => {
    rl.question('Enter the odds for the bet: ', (odds) => {
        const probability = convertOddsToProbability(odds);
        console.log(`${betName} has a ${probability} implied probability.`);
        rl.close(); // Close the readline interface
    });
});
