// 생성자 함수
// 생성자 함수(constructor function)와 일반 함수에 기술적인 차이는 없습니다. 다만 생성자 함수는 아래 두 관례를 따릅니다.

// 함수 이름의 첫 글자는 대문자로 시작합니다.
// 반드시 'new' 연산자를 붙여 실행합니다.
// 예시:

function User(name) {
    this.name = name;
    this.isAdmin = false;
}

let user = new User("보라");

alert(user.name); // 보라
alert(user.isAdmin); // false

// new User(...)를 써서 함수를 실행하면 아래와 같은 알고리즘이 동작합니다.

// 빈 객체를 만들어 this에 할당합니다.
// 함수 본문을 실행합니다. this에 새로운 프로퍼티를 추가해 this를 수정합니다.
// this를 반환합니다.
// 예시를 이용해 new User(...)가 실행되면 무슨 일이 일어나는지 살펴 보도록 하겠습니다.

function User(name) {
    // this = {};  (빈 객체가 암시적으로 만들어짐)

    // 새로운 프로퍼티를 this에 추가함
    this.name = name;
    this.isAdmin = false;

    // return this;  (this가 암시적으로 반환됨)
}

var choco = new Cat('초코', 7)

var Cat = function (name, age) {
    this.bark = '야옹';
    this.name = name;
    this.age = age;
}
var choco = new Cat('초코', 7);



var nabi = new Cat('나비', 5);






'abcde1abc12abb'와 같은 문자열이 주어졌을 경우 이 안에 주어진 모든 숫자를 한자리씩 더하는 프로그램을 메서드 체이닝을 통해 완성하세요. 위 문제의 경우 1 + 1 + 2 = 4가 나와야 합니다.  'abcde1abc12abb'.split('') 부터 시작하시면 됩니다.

'abcde1abc12abb'.split('');

console.log()