var calc = {
    num1: 0,
    num2: 0,
    add: function () {
        return (this.num1 + this.num2);
    },
    sub: function () {
        return (this.num1 - this.num2);
    },
    mul: function () {
        return (this.num1 * this.num2);
    },
    div: function () {
        return (this.num1 / this.num2);
    }
};
calc.num1 = 10;
calc.num2 = 2;
console.log(calc.add());
console.log(calc.sub());
console.log(calc.mul());
console.log(calc.div());
