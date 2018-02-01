function factorial(num){
    if (num<=1){
        return 1;
    }else{
        return num*factorial(num-1);
    }
}

function factorial1(num){
    if (num<=1){
        return 1;
    }else{
        return num*arguments.callee(num-1);
    }
}

var trueFactiruak = factorial;

factorial = function () {
    return 0;
};

alert(trueFactiruak(4));
alert(factorial(5));

var trueFactiruak1 = factorial1;

factorial1 = function () {
    return 0;
};

alert(trueFactiruak1(4));
alert(factorial1(5));