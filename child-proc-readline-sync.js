const readline = require('readline');

rl = readline.createInterface({ input: process.stdin, output: process.stdout });

rl.on('line', function(lineInput) {
    
    // TODO: throw an exception if command arg '--throw-exception' is present along with '--message'
    // if it's available...
    if (process.argv.includes('--throw-exception')) throw new Error(msg);
    
    process.stdout.write(lineInput);

    rl.close();
});

process.on('uncaughtException', (err, origin) => {
    
    // get out of this process
    process.exit(1);
});