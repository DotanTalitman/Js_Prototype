

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

b.__proto__== b.constructor.prototype;

function Bar(who){
    Foo.call(this,who);
}
//Bar.prototype = new Foo()
Bar.prototype = Object.create(Foo.prototype); //better way
var b = new Bar("b");
