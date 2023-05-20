var Person = function (name) {
    this._name = name;
}
Person.prototype.getName = function () {
    return this._name;
};

// Person의 인스턴스는 __proto__ 프로퍼티를 통해 getName 호출가능

var suzy = new Person('suzy');
suzy.__proto__.getName(); // udf
// getName()이 호출할 수 있다는 함수라는 뜻

Person.prototype === suzy.__proto__ // true 

var suzy = new Person('Suzi');
suzy.__proto__.name = 'SUZI_proto__'
suzy.__proto__.getName(); // SUZI__proto__

// this에 따라 출력결과가 달라짐
// this를 인스턴스로 할 수있음 !!! 그건
// __proto__ 없이 인스턴스에서 바로 메서드쓰기 

var suzy = new Person('Suzi', 28);
suzy.getName(); // Suzi 
// == suzy.__proto__.getName
// == == suzy().__proto__).getName
// * __proto__ 는 생략가능한 프로타입

var iu = new Person('wlrma', 28);
iu.getName(); // wlrma



var arr = [1,2];
Array.prototype.constructor === Array  // true
arr.__proto__.constructor === Array  // true
arr.constructor === Array  // true

var arr2 = new arr.constructor(3, 4);  // 인스턴스에서 직접 constructor에 접근 가능 
console.log(arr2);  // [3,4]


let NewConstructor = function () {
    console.log('this is new constructor!');
};
let dataTypes = [
    1, // Number & false
    'test', // String & false
    true, // Boolean & false
    {}, // NewConstructor & false
    [], // NewConstructor & false
    function () { }, // NewConstructor & false
    /test/, // NewConstructor & false
    new Number(), // NewConstructor & false
    new String(), // NewConstructor & false
    new Boolean, // NewConstructor & false
    new Object(), // NewConstructor & false
    new Array(), // NewConstructor & false
    new Function(), // NewConstructor & false
    new RegExp(), // NewConstructor & false
    new Date(), // NewConstructor & false
    new Error() // NewConstructor & false

        //* false 반환 시 constructor를 변경하더라도 참조하는 대상이 변경될 뿐 이미 만들어진 인스턴스의 원형이 바뀐다거나 데이터 타입이 변하는 것은 아님. 
];



dataTypes.forEach(function (d) {
    d.constructor = NewConstructor;
    console.log(d.constructor.name, '&', d instanceof NewConstructor);
    // instanceof 연산자는 생성자의 prototype 속성이 객체의 프로토타입 체인 '어딘가' 존재하는지 판별합니다.
});




//! 각 줄은 모두 동일한 대상을 가리킨다.
[Constructor]
[instance].__proto__.constructor
[instance].constructor
Object.getPrototypeOf([instance]).constructor
// Object.getPrototypeOf() 메서드는 지정된 객체의 프로토타입(가령 내부 [[Prototype]] 속성값)을 반환합니다.
[Constructor].prototype.constructor


//! 다음 각 줄은 모두 동일한 객체에 접근할 수 있다.
[constructor].prototype
[instance].__proto__
[instance]
Object.getPrototypeOf([instance])