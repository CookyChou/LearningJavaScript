function sum(num1, num2){
    return num1 + num2;
}

function callSum1(num1, num2){
    return sum.apply(this, arguments);
}


function callSum2(num1, num2){
    return sum.apply(this, [num1, num2]);
}

alert(callSum1(10, 10));
alert(callSum2(10, 10));

