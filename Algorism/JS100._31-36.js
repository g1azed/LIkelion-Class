// #문제31 : 자바스크립트 자료형의 복잡도
// 다음 배열 내장함수의 시간 복잡도가 O(1)이 아닌 것을 모두 고르시오.

1) arr[i] // O(N)  만약 i가 1이라면 O(1) 이 될수도있으닉가 ok인듯
2) arr.push(5)  // O(1)
3) arr.slice() // index번호가 없으니까 O(-) == O(1)로 생각해도되는걸까요?
4) arr.pop() // 0(1)
5) arr.includes(5) // O(N) => O(5)

수지가 고른 정답: 5번
정답이 두개라는말은 안했잖아요 진짜 어이없네 아 했군요ㅋㅋ 수지야 정신차려
진짜 정답: 3, 5번


시간복잡도를 표기할땐 빅오표기법을 사용함.
(대충 이런게 있다 하고 넘기기 거리시간속력 그런거겍지,,,)






// # 문제32 : 문자열 만들기

// 취업 준비생인 혜림이는 자기소개서를 쓰고 있습니다. 열심히 자기소개서를 작성하던 도중 혜림이는 자기가 지금까지 단어를 얼마나 적었는지 궁금하게 됩니다. 

// 혜림이를 위해 **문자열을 입력받으면 단어의 갯수를 출력하는 프로그램**을 작성해 주세요.

//     Ex) 입출력

//     입력 : 안녕하세요. 저는 제주대학교 컴퓨터공학전공 혜림입니다.
//     출력 : 5

function userExport() {
    const input = window.prompt("문장을 입력해주세요");
    const input_split = input.split(' ');
    console.log(input_split.length);
}
userExport();

// 허거덩~ 완전 짧게 가능했엇음;; 프로그램 만들래서 함수로 만들라는줄ㅜ 알음ㅜㅜ






// # 문제33 : 거꾸로 출력하기

// 한 줄에 여러개의 숫자가 입력되면, 역순으로 그 숫자들을 하나씩 출력하는 프로그램을 작성하시오.


// function re_num(){
//     var num = [];
//     for( let i = 0; i <= num.length; i++){
//         num[i] =  prompt("숫자를 입력해주세용",' ');
//         // console.log(num);
//         if(!num) break;
//     }        console.log(num);
// }  문제 이해를 아직 제대로 못해서 너무너무 아쉬운 문제,,,ㅜㅜ 한줄에 입력하란걸 못봣음ㅜ


const num = prompt("숫자를 하나씩 띄어서 입력해주세요").split(' ');
let re_num = ' ';

for (let i = num.length; i > 0; i--) {
    re_num = re_num + ' ' + num[i - 1];
}
console.log(re_num);

/* * 승표님 풀이 */
//for문 사용
let input = prompt('여러개의 숫자를 입력하시오( 구분: 공백 )');
let inputArr = input.split(' ');
let str = '';
for (const a of inputArr) {
    str = a + ' ' + str;
}
const answer = str;
console.log(answer);
//1 2 3 4 5 을 입력값으로 받았을 때
/* inputArr = [1, 2, 3, 4, 5];
str = '';
for of 문에서
a가 1일 때 
str = 1 + ' ' + '';
str = 1;

a가 2일 때 
str = 2 + ' ' + 1;
str = 2 1;

a가 3일 때 
str = 3 + ' ' + '2 1';

중략

a가 5일 때
str = 5 + ' ' + '4 3 2 1'
str = '5 4 3 2 1'; */



// # 문제34 : sort 구현하기

// 민주는 체육부장으로 체육시간이 되면 반 친구들이 제대로 키 순서대로 모였는지를 확인해야 한다. 그런데 요즘 민주는 그것이 너무 번거롭게 느껴져 한 번에 확인하고 싶어한다. 

// 민주를 위해 **키가 주어지면 순서대로 제대로 섰는지 확인하는 프로그램**을 작성해보자.
// (키는 공백으로 구분하여 입력됩니다.)

const people_height = prompt("친구들의 키를 공백을 주어 입력해주세요").split(" ");
people_height.sort((a, b) => {
    if (a > b) {
        console.log("YES")
    } else {
        console.log("NO")
    }
})

/* 답안지 */
const unsorted = prompt('키를 입력하세요');
let sorted = "";

sorted = unsorted
    .split(" ")
    .sort(function (a, b) {
        return a - b;
    })
    .join(" ");

if (unsorted === sorted) {
    console.log("Yes");
} else {
    console.log("No");
}

/* * 나경님 답안지 */
const input = prompt('키를 공백으로 구분하여 입력하세요.').split(' ');
const check = [...input].sort(function (a, b) {
    return a - b;
});
let result = 'YES';
for (let i = 0; i < check.length; i++) {
    if (check[i] !== input[i]) {
        result = 'NO';
        break;
    }
}
console.log(result);
// check에서 input.sort로 하니까 원본 배열에도 변화가 생김 -> spread 처리
// input과 check는 배열이라 둘을 비교연산자로 비교하면 배열의 참조를 비교함. for문으로 요소를 하나하나 비교
// 배열을 다 비교하면 효율이 떨어지니까 값이 다른 인덱스를 찾으면 result에 NO를 넣고 break

/* * 승표님 풀이 */
let input = prompt('반 친구들의 키를 입력하세요.( 구분: 공백 )');
let inputArr = input.split(' ').map((el) => parseInt(el));
let flag = 0;
for (let i = 0; i < inputArr.length - 1; i++) {
    if (inputArr[i] > inputArr[i + 1]) flag++;
    if (flag === 1) break;
}
if (!flag) {
    console.log('YES');
} else console.log('NO');



// # 문제35 : Factory 함수 사용하기

// 2제곱, 3제곱, 4제곱을 할 수 있는 Factory 함수를 만들려고 합니다. 

// <pass>에 코드를 작성하여 two함수를 완성하세요.

function one(n) {
    function two(j) {
        //pass
        const square = Math.pow(j, n);
        return square;
    }
    return two;
}

const a = one(2);
const b = one(3);
const c = one(4);

console.log(a(10));
console.log(b(10));
console.log(c(10));





// # 문제36 : 구구단 출력하기

// 1~9까지의 숫자 중 하나를 입력하면 그 단의 구구단 결과를 한 줄에 출력하는 프로그램을 작성하세요.
// 입출력

// 입력 : 2
// 출력 : 2 4 6 8 10 12 14 16 18\

const number = prompt("숫자를 입력해주세요!!");
let result = ' ';

for (let i = 1; i <= 9; i++) {
    // console.log((number * i).replace(\n/getComputedStyle,""));
    // 개행 문자 어쩌고,,
    result += (number * i) + ' ';
}


