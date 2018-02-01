function createComparisonFunction(propertyName){
    return function(object1,object2) {
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];

        if (value1 < value2) {
            return -1;
        } else if (value1 > value2) {
            return 1;
        } else {
            return 0;
        }
    };
}

var data = [{name: "Bgzhou", age: 29}, {name: "Zhsang", age: 24}];

data.sort(createComparisonFunction("name"));
alert(data[0].name);

data.sort(createComparisonFunction("age"));
alert(data[0].name);
