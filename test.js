let chars = ['A', 'B', 'A', 'C', 'B'];

let lh = [];
chars.forEach((c) => {
    if (!lh.includes(c)) {
        lh.push(c);
    }
});

console.log(lh);

// or
let chars2 = ['A', 'B', 'A', 'C', 'B'];

let uniquechar = chars2.filter((c, index) => {
    return chars2.indexOf(c) === index;
});

console.log(uniquechar);