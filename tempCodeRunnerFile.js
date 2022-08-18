const num = 12000000.11;

const [front, end] = num.toString().split('.');

let result = [];

for (let i = front.length - 1; i >= 0; i--) {
    result.unshift(front[i]);
    if ((front.length - i) % 3 === 0) result.unshift(',');
}

console.log(result);