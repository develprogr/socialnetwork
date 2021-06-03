const obj = {
    a: 1,
    for: {
        g: 264,
        t: 255,
        yo: {
            z: 55,
            k: 70
        }
    },
    b: 2,
    c: {
        d: true,
        e: 'Hello'
    },
    f: ['Best', 'Hi', false, 35, 'OK', 32]
}

const {b, c : {d, e},  f : [first, second, ...lastArray] , ...lastObj} = obj;

console.log(b, d, second, lastObj)

