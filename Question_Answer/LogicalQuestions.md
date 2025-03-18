## Basic Logical question
1. true == 1 // ?
1. true === 1 // ?
1. false == 0 // ?
1. false === 0 // ?
1. null == false // ?
1. null === false // ?
1. undefined == false // ?
1. undefined === false // ?
1. null == 0 // ?
1. null === 0 // ?
1. undefined == 0 // ?
1. undefined === 0 // ?
1. undefined == NaN // ?
1. undefined === NaN // ?
1. NaN == false // ?
1. NaN === false // ?
1. NaN == 0 // ?
1. NaN === 0 // ?
1. NaN == "" // ?
1. NaN === "" // ?
1. "" == false // ?
1. "" === false // ?
1. " " == false // ?
1. " " === false // ?
1. "1" == true // ?
1. "1" === true // ?
1. [] == false // ?
1. [] === false // ?
1. [] == 0 // ?
1. [] === 0 // ?
1. [0] == false // ?
1. [0] === false // ?
1. [0] == 0 // ?
1. [0] === 0 // ?
1. ["0"] == false // ?
1. ["0"] === false // ?
1. {} == false // ?
1. {} === false // ?
1. null == [] // ?
1. null === [] // ?
1. undefined == [] // ?
1. undefined === [] // ?
1. null == {} // ?
1. null === {} // ?
1. 0 == {} // ?
1. 0 === {} // ?
1. "" == {} // ?
1. "" === {} // ?
1. false == {} // ?
1. false === {} // ?

## Comparisons with Objects and Arrays

1. [] == ![] // ?
1. [] === ![] // ?
1. +[] == false // ?
1. +[] === false // ?
1. [] + [] == "" // ?
1. [] + {} == "[object Object]" // ?
1. {} + [] == 0 // ?
1. {} + {} == "[object Object][object Object]" // ?
1. ({} == {}) // ?
1. ([] == []) // ?
1. ([] == ![]) // ?
1. ([] == false) == (![] == false) // ?
1. ({} + []) == "[object Object]" // ?
1. ([] + {}) == "[object Object]" // ?
1. ({} + []) === "[object Object]" // ?

##  Comparisons with null, undefined, and NaN

1. null == 0 // ?
1. null >= 0 // ?
1. null > 0 // ?
1. null < 0 // ?
1. null <= 0 // ?
1. undefined == 0 // ?
1. undefined > 0 // ?
1. undefined < 0 // ?
1. undefined >= 0 // ?
1. undefined <= 0 // ?
1. null == undefined // ?
1. null === undefined // ?
1. NaN == NaN // ?
1. NaN === NaN // ?
1. NaN != NaN // ?
1. NaN > NaN // ?
1. NaN < NaN // ?
1. NaN >= NaN // ?
1. NaN <= NaN // ?

## Comparisons with Strings and Numbers

1. "" == 0 // ?
1. "0" == 0 // ?
1. "0" === 0 // ?
1. " " == 0 // ?
1. "\t" == 0 // ?
1. "\n" == 0 // ?
1. " 1" == 1 // ?
1. "1 " == 1 // ?
1. " 1 " == 1 // ?
1. parseInt("1px") == 1 // ?
1. parseInt("0x10") == 16 // ?
1. parseInt("010") == 10 // ?

## Boolean Coercion & Logical Comparisons

1. !!"false" == !!"true" // ?
1. !!"0" == !!"1" // ?
1. !!{} == true // ?
1. !![] == true // ?
1. 