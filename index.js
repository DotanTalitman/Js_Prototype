

function Foo(who){
    this.name = who;
}

Foo.prototype.whoAmI=function(){
    return "I am"+ this.me;
}

var a = new Foo("a");
var b = new Foo("b");

b.say=function(){
    console.log("hello",+this.whoAmI());
};

a.constructor===Foo;
a.constructor===b.constructor;
a.__proto__===Foo.prototype;
a.__proto__===b.__proto__;
