const mclainsmt_readlineSync = require('../index.js');
const assert = require('assert').strict;

// 'mclainsmt-readlineSync()' test suite
describe('[Non-interactive testMode]... Module: mclainsmt-cli-prompt -> mclainsmt_readlineSync()\n', function() {

    it('should return a truthy (non-empty string) value from a testMode->input string', function() {

        let testMode = {
            input: "Mclain SMT"
        };

        assert.ok(mclainsmt_readlineSync(null, testMode), "testMode->input must be a valid (truthy) string value...");
    });

    it('should throw an error for a falsy or non-string type testMode->input', function() {

        let testMode = {
            input: ""
        };

        assert.throws(() => {

            mclainsmt_readlineSync(null, testMode);

        }, null, "This unit test should have passed if testMode->input is an invalid (falsy) string type value...");
    });

    it('should return a value equal to a given testMode->input', function() {

        let testMode = {
            input: "Mclain SMT"
        };
    
        assert.equal(mclainsmt_readlineSync(null, testMode), "Mclain SMT", "mclainsmt_readlineSync()'s return value must be equal to expected value...");
    });

    it('should return a string equal in length to a testMode->input string', function() {
        
        let testMode = {
            input: "Mclain SMT"
        };

        assert.ok(String(mclainsmt_readlineSync(null, testMode)).length == testMode.input.length, "mclainsmt_readlineSync()'s return value must be equal in string-length to testMode->input");
    });

    it('should return a string-typed value', function() {

        let testMode = {
            input: "Mclain SMT"
        };

        assert.ok(typeof mclainsmt_readlineSync(null, testMode) == 'string', "typeof mclainsmt_readlineSync()'s return value must be a string");
    });

    it('should throw an exception if an exception is raised in "child-proc-readline-sync.js"', function() {

        let testMode = {
            input: "Mclain SMT",
            throwException: true,
            message: "child-proc-readline-sync.js exception test..."
        };

        assert.throws(() => {

            mclainsmt_readlineSync(null, testMode);

        }, null, "This unit test should have passed if testMode->throwException is set to true...");

    });
});