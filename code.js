// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

// function sayHello(input) {
//     if ( input === "Alex") {
//         return "Hello, Alex!";
//     }   else if (input === "Jane") {
//         return "Hello, Jane!";
//     }   else    {
//         return "Hello, Pat!"
//     }
// }
function sayHello(input) {
    if (input === "") {
        return "Hello World!";
    } else  {
        return "Hello, " + input + "!";
    }
}