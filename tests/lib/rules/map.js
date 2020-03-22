/**
 * @fileoverview lodash-to-native/map
 * @author Natalia Karaseva
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/map"),

    RuleTester = require("eslint").RuleTester;


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run('lodash-to-native', rule, {

    valid: [
        {
            code: '[1, 2, 3].map(cb)'
        },
        {
            code: '_.map({a: 1, b: 2}, cb)'
        },
        {
            code: 'lodash.map([1, 2, 3], cb)'
        }
    ],

    invalid: [
        {
            code: '_.map(collection, cb)',
            errors: [{
                message: 'Replace lodash map by Array.map',
                type: 'CallExpression'
            }]
        }
    ]
});
