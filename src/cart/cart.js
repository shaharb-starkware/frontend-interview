// Maps product -> price per unit
const products = {
    eggs: 10,
    jam: 6,
    pasta: 9,
    tea: 4,
    bread: 12
};

const coupons = [
    {
        valid: ['eggs'],
        discount: 10, // %
        minQuantity: 2
    },
    {
        valid: ['tea', 'bread'],
        discount: 15
    },
    {
        valid: ['tea'],
        discount: 5,
        minQuantity: 3
    }
];


// Map product -> quantity
const cart = {
    eggs: 2,
    jam: 1,
    bread: 1,
    tea: 4
};


let finalPrice = 0;

// your code goes here
function calcCartPrice(withCoupons = false) {

}

console.log(`Your cart price is: ${finalPrice}`);
