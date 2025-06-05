// Fibonacci sequence generator up to a maximum value
function fibonacci(max) {
    let sequence = [0, 1];
    
    while (true) {
        let next = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        if (next > max) break;
        sequence.push(next);
    }
    
    return sequence;
}

// Generate and print the Fibonacci sequence up to 100
const fibSequence = fibonacci(100);
console.log("Fibonacci Sequence up to 100:");
console.log(fibSequence.join(", "));