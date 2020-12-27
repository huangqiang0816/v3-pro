interface Counter {
    (start: number): string

    interval: number

    reset(): void
}

function getCounter(): Counter {
    let counter = (function (start: number) {
        console.log(start);
    }) as Counter

    counter.interval = 123

    counter.reset = function () {
        console.log('11');

    }

    return counter
}

interface Debounce {
    
}