/**
 * @fileoverview lodash-to-native/map
 * @author Natalia Karaseva
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
    meta: {
        type:"suggestion",
        docs: {
            description: "lodash-to-native/map",
            category: "ESList Plugin with rule appalse",
            recommended: true
        },
        fixable: "code"  // or "code" or "whitespace"
    },

    create: function(context) {

        // variables should be defined here

        //----------------------------------------------------------------------
        // Helpers
        //----------------------------------------------------------------------

        // any helper functions should go here or else delete this section

        //----------------------------------------------------------------------
        // Public
        //----------------------------------------------------------------------

        return {
            CallExpression(node) {
                const args = node.arguments;
                const arr = args[0];
                if (arr.type === "ObjectExpression") return;
                const srcCode = context.getSourceCode();
                const arrAsText = srcCode.getText(arr);
                const fn = args[1];                
                const fnAsText = srcCode.getText(fn);

                if (arr.type === "ArrayExpression" || arr.type === "Identifier") {
                    context.report({
                        node,
                        message: 'Replace lodash map by Array.map',
                        fix: function(fixer) {
                            return fixer.replaceText(node, `${arrAsText}.map(${fnAsText})`);
                        }
                    });
                }      
            }
        };
    }
};
