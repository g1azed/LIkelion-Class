
// Promise 만를 써서 비동기적 작업을 동기적작업으로
new Promise(function (resolve) {
    //비동기작업이 성공한경우 resolve를 호출
    setTimeout(function () {
        var name = '에스프레소';
        console.log(name);
        resolve(name);
    }, 500);
}).then(function (prevName) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            var name = prevName + ",아메리카노";
            console.log(name);
            resolve(name);
        }, 500);
    });
}).then(function (prevName) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            var name = prevName + ",카페모카";
            console.log(name);
            resolve(name);
        }, 500);
    });
}).then(function (prevName) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            var name = prevName + ",카페라떼";
            console.log(name);
            resolve(name);
        }, 500);
    });
})



// => 더 짧게 표현함
// resolve
var addCoffee = function (name) {
    return function (prevName) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                var newName = prevName ? (prevName + ', ' + name) : name;
                console.log(newName);
                resolve(newName);
            }, 500);
        });
    };
};
addCoffee('에스프레소')()
    .then(addCoffee('아메리카노'))
    .then(addCoffee('카페모카'))
    .then(addCoffee('카페라떼'));
// 결과 : 에스프레소    
//        에스프레소, 아메리카노
//        에스프레소, 아메리카노, 카페모카
//        에스프레소, 아메리카노, 카페모카, 카페라떼

//reject
var addCoffee = function (name) {
    return function (prevName) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                var newName = prevName ? (prevName + ', ' + name) : name;
                console.log(newName); 
                reject(newName);
            }, 500);
        });
    };
};
addCoffee('에스프레소')()
    .then(addCoffee('아메리카노'))
    .then(addCoffee('카페모카'))
    .then(addCoffee('카페라떼'));
// 결과 : 에스프레소



// promise + async, await
var addCoffee = function (name) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(name);
        }, 500);
    });
};
var coffeeMaker = async function () {
    var coffeeList = ' ';
    var _addCoffee = async function (name) {
        coffeeList += (coffeeList ? ',' : ' ') + await addCoffee(name);
    };

    await _addCoffee('에스프레소');
    console.log(coffeeList);
    await _addCoffee('아메리카노');
    console.log(coffeeList);
    await _addCoffee('카페모카');
    console.log(coffeeList);
    await _addCoffee('카페라떼');
    console.log(coffeeList);
}
coffeeMaker();



async function message() {
    let hello = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('hello');
        }, 100)
    })

    let world = await new Promise((resolve) => {
        setTimeout(() => {
            resolve('world');
        }, 100)
    })

    console.log(`${hello} ${world}`);
}

message();



