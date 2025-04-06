function log(value) {
    console.log(value);
}

log('1');

setTimeout(() => {
    log('setTimeout 1');
    Promise.resolve().then(() => {
        console.log('promise setTimeout 1');
    });
    queueMicrotask(() => {
        log('queueMicrotask setTimeout 1');
    })
    queueMicrotask(() => {
        log('queueMicrotask setTimeout 2');
    })
}, 0);

setTimeout(() => {
    log('setTimeout 2');
}, 0);

Promise.resolve().then(() => {
    log('promise 1');
});

queueMicrotask(() => {
    log('queueMicrotask 1');
})

Promise.resolve().then(() => {
    log('promise 2');
});

queueMicrotask(() => {
    log('queueMicrotask 2');
})

log('4');


// 1-4-promise1-promise2-queueMicrotask1-setTimeout1-promiseSetTimeout1-queueMicrotask setTimeout 1-queueMicrotask setTimeout 2-setTimeout2
