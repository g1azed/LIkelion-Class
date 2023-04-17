
// 객체의 깊은 복사를 수행하는 범용 함수
var copyObjectDeep = function (target) {
    var result = {};
    if (typeof target === 'object' && target !== null) {
        for (var prop in target) {
            result[prop] = copyObjectDeep(target[prop]);
        }
    } else {
        result = target;
    }
    return result;
}

var obj = {
    a: 1,
    b: {
        c: null,
        d: [1, 2]
    }
};
var obj2 = copyObjectDeep(obj);

//재귀함수를 이용한 복사 (위에거랑 비슷함)
const obj = {
    a: 1,
    b: {
        c: 2,
    },
};

function copyObj(obj) {
    const result = {};

    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            result[key] = copyObj(obj[key]);
        } else {
            result[key] = obj[key];
        }
    }

    return result;
}

const copiedObj = copyObj(obj);

copiedObj.b.c = 3

obj.b.c === copiedObj.b.c //false 



//일반적인 복사
let origin = { name: 'Jinny' }
let copy = origin;

copy.name = 'Mr.Lee';

console.log(origin.name); // 'Mr.Lee'
console.log(origin === copy); // true




const parent = { name: "Parent" };

// parent 객체를 상속한 child 객체 생성
const child = Object.create(parent);
child.name = "Child";

// 객체 복제 함수
function cloneObject(obj) {
    // 빈 객체 생성
    const clonedObj = {};

    // 객체의 모든 프로퍼티를 순회하며, hasOwnProperty() 메서드를 사용하여 직접적으로 속한 프로퍼티만 복제
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            clonedObj[key] = obj[key];
        }
    }

    return clonedObj;
}

// child 객체를 복제하여 clonedChild 객체 생성
const clonedChild = cloneObject(child);

console.log(clonedChild.name); // "Child"
console.log(clonedChild.hasOwnProperty("name")); // true
console.log(clonedChild.hasOwnProperty("toString")); // false


// 객체의 프로퍼티를 복제하고자 할 때, 일반적인 복제 방법으로는 객체의 프로토타입 체인을 따라 상속된 프로퍼티도 함께 복제됩니다. 
// 하지만, hasOwnProperty() 메서드를 이용하면 해당 객체에 직접적으로 속한 프로퍼티만 복제할 수 있습니다.
// 아래는 hasOwnProperty() 메서드를 사용하여 객체를 복제하는 예시입니다.

// 위의 예시에서, cloneObject() 함수는 빈 객체를 생성하고, for...in 문을 사용하여 객체의 모든 프로퍼티를 순회합니다. 
// 그리고 hasOwnProperty() 메서드를 사용하여 해당 프로퍼티가 객체 자체에 직접적으로 속한 프로퍼티인지 확인한 후, 직접적으로 속한 프로퍼티만 새로 생성한 빈 객체에 복제합니다.
// 이러한 방식으로, 객체의 프로토타입 체인을 따라 상속된 프로퍼티를 복제하지 않고, 해당 객체에 직접적으로 속한 프로퍼티만 복제할 수 있습니다.



const obj = {
    a: 1,
    b: {
        c: 2,
    },
};

const copiedObj = JSON.parse(JSON.stringify(obj));

copiedObj.b.c = 3

obj.b.c === copiedObj.b.c //false 

// JSON.stringify()는 객체를 json 문자열로 변환하는데 이과정에서 원본 객체와의 참조가 모두 끊어진다.
// 객체를 json 문자열로 변환후 JSON.parse()를 이용해 다시 자바스크립트 객체로 만들어주면 깊은 복사가 된다.

// 하지만 이방법은 사용하기는 쉽지만 다른 방법에비해 아주 느리다고 알려져있다