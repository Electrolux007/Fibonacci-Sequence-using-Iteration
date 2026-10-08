const getFibonacci = (n)=>{  // This is the functions to get a FIBONACCI SEQUENCE with the max index of the sequence based on the nth argument passed when its called
    const fibonacciArray = [0,1]  // Fibonacci array called inside the function so that a new array is formed when the function is recalled

    for (let index = 0; index < fibonacciArray.length; index++) {
        const element = fibonacciArray[index];
        console.log(element);
    }

    for (let index = 0; index < n-2; index++) {
        let fibonacciNumber = fibonacciArray[index] + fibonacciArray[index+1] 
        fibonacciArray.push(fibonacciNumber)
        // console.log(fibonacciArray);
    } return fibonacciArray  
}

const getFibonacciNumber = (x)=>{  // This is the function to get a SPECIFIC Nth in the entire Fibonacci Sequence based on the nth passed as argument when called
    const fibonacciArray = [0,1]
    let fibNumber = 0   // Declaring the fibNumber variable outside the loop then redeclaring inside the loop helped fixed a bug related to Scope of variable assignment

    // for (let index = 0; index < fibonacciArray.length; index++) {
    //     const element = fibonacciArray[index];
    //     console.log(element);
    // }

    for (let index = 0; index <= x-2; index++) {
        let fibonacciNumber = fibonacciArray[index] + fibonacciArray[index+1] 
        fibonacciArray.push(fibonacciNumber)
        fibNumber = fibonacciArray[x]
    } 
    return fibNumber
}

// These lines of Code display the answers in the console based the argument passed
console.log(getFibonacci(5));
console.log(getFibonacciNumber(0));