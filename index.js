const { execSync } = require('child_process');
const { createInterface } = require('readline');

// mclainsmt_cliPrompt();
module.exports = function(question, testMode) {

    try {
        
        let childProcess_returnValue = null;
        
        // make sure when we start the node process through execSync()
        // that were doing so from the same directory index.js
        // sit's in...
        process.chdir(__dirname);
        
        // 'testMode' put's this function into test mode...
        if (testMode) {
            
            // ******
            // TODO: maybe set expected input to string if it's not a string type or throw an exception???
            // ******
            
            // typeof(testMode) must be == 'object'
            (typeof(testMode) != 'object') ? (() => {throw new Error('\ntypeof(testMode) must be == "object"\n');})() : void(0);

            let testMode_command = (testMode.throwException && testMode.throwException == true) ? `node child-proc-readline-sync.js --throw-exception ${ testMode.message ? ( `--message "${testMode.message}"` ) : void (0) }` : 'node child-proc-readline-sync.js';  
                    
            // execSync() -> may return a Buffer obj - convert it to a string before returning it...
            childProcess_returnValue = execSync(testMode_command, {input: (testMode.input && typeof(testMode.input) == 'string' && testMode.input != "") ? testMode.input : (() => {throw new Error(`\n"ERROR @ ${__filename} -> testMode.input validation failed...\n`);})()});

            return (childProcess_returnValue) ? childProcess_returnValue.toString() : "";
            
        } else {

            rl = createInterface({ input: process.stdin, output: process.stdout });
            
            rl.setPrompt(`\n${question} > `);
            
            rl.prompt();
            
            rl.close();
            
            // execSync() -> may return a Buffer obj - convert it to a string before returning it...
            childProcess_returnValue = execSync('node child-proc-readline-sync.js', {stdio: ['inherit']});

            return (childProcess_returnValue) ? childProcess_returnValue.toString() : "";
        }
        
    } catch (error) {

        // **TODO: provide more meaningful error message to caller...
        // re-throw any exceptions raised...
        throw error;
    } 
}