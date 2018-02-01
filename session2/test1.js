//工厂模式
function createPerson(name, age, job){
    var o = new Object();
    o.name = name;
    o.age = age;
    o.job = job;
    o.sayName = function(){
        alert(this.name);
    }
    return o;
}

var person1 = createPerson("haha", 29, "teacher");
var person2 = createPerson("bgzhou", 24, "engineer");