//原型模式
//使用hasOwnProperty()方法，当一个属性存在于实例中的时候，返回true
function Person(){}

Person.prototype.name = "Nicholas";
Person.prototype.age = 29;
Person.prototype.job = "Software Engineer";
Person.prototype.sayName = function(){
    alert(this.name);
};

var person1= new Person();
var person2 = new Person();

person1.name = "Greg";
alert(person1.name);
alert(person2.name);

delete person1.name;
alert(person1.name);