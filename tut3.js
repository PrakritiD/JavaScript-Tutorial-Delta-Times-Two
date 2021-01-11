let a = 1 + 2 + +('2') + 1 + 1; // 7

//Don't declare the same variable twice! Use the statements below one at a time to get the commented result.

//let b = ++a; // b = 8
//let b = a++; // b = 7

let b = (a++, --a); //b = 7
