function fibonacci(n) {
    if (n < 1) {
        return 0;
    } else if (n <= 2) {
        return 1;
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

onmessage = function(e) {
    const start = Date.now();
    const input = parseInt(e.data);
    const result = fibonacci(input);
    const duration = Date.now() - start;

    postMessage({   
        input: input,
        result: result,
        duration: Math.ceil(duration / 1000) // convert to seconds
    });
}