//构造函数模式
function Person(name, age, job){
    this.name = name;
    this.age = age;
    this.job = job;
    this.sayName = function(){
        alert(this.name);
    };
}

var person1 = new Person("Nicole", 29, "teacher");
var person2 = new Person("Bgzhou", 25, "engineer");

alert(person1.constructor == Person);
alert(person2.constructor == Person);
