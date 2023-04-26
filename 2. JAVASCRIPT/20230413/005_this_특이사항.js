

// a에서 this = person
// b 에서 This =  상위스코프(상위에서 Person을 보고있음) 즉 Person
// c 에서 This =  상위스코프(상위에서 Person을 보고있음) 즉 Person
const person = {
    name: 'hojun',
    age: 25,
    a() {
        console.log(this);
        console.log(this.name);
        function b() {
            console.log(this);
            console.log(this.name);
            function c() {
                console.log(this);
                console.log(this.name);
            }
            c()
        }
        b()
    }
}
person.a()


//this에 바인딩되는 객체가 동적으로 결정되는 기명함수와 달리 화살표 함수의 경우 상위 스코프의 this를 가리킵니다(Lexical this).
const person = {
    name: 'hojun',
    age: 25,
    a() {
        console.log(this);
        console.log(this.name);
        let b = () => {
            console.log(this);
            console.log(this.name);
            let c = () => {
                console.log(this);
                console.log(this.name);
            }
            c()
        }
        b()
    }
}
person.a()


///
[1,2,3].forEach(function(){console.log(this)}) // window
[1,2,3].forEach(function(){console.log(this)}, [10,20,30]) //window


////
let 인세규정 = {
    책: 10,
    영상콘텐츠: 50
}

function 인세계산함수책(e) {
    return e * (this.책 / 100)
}

function 인세계산함수영상(e) {
    return e * (this.영상콘텐츠 / 100)
}

[100, 200, 300].map(인세계산함수책, 인세규정)
[100, 200, 300].map(인세계산함수영상, 인세규정)

// 1. 전역공간의 this는 window(node는 global) → 실제로는 window.globalThis, window.this 아닙니다. [자바스크립트에서 `globalThis`의 소름끼치는 폴리필](https://ui.toast.com/weekly-pick/ko_20190503)
// 2. 메서드로 호출한 경우 this는 멤버접근연산자 앞에 객체
// 3. 함수로 호출할 경우 this는 window(node는 global)
// 4. 화살표 함수의 경우 this는 상위스코프
// 5. 생성자 함수의 경우 this는 인스턴스
// 6. 콜백함수의 경우 this가 다르게 동작 할 수 있음