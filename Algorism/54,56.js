// # 문제54 : 연속되는 수

// 은주는 놀이공원 아르바이트를 하고 있다. 은주가 일하는 놀이공원에서는 현재 놀이공원 곳곳에 숨겨진 숫자 스탬프를 모아 오면 선물을 주는 이벤트를 하고 있다. 숫자 스탬프는 매일 그 수와 스탬프에 적힌 숫자가 바뀌지만 그 숫자는 항상 연속된다. 
// 그런데 요즘 다른 날에 찍은 스탬프를 가지고 와 선물을 달라고 하는 손님이 늘었다.

// 스탬프에 적힌 숫자가 공백으로 구분되어 주어지면 이 숫자가 연속수인지 아닌지 "YES"와 "NO"로 판별하는 프로그램을 작성하시오

// 입력1
// 1 2 3 4 5

// 출력1
// YES


// 입력2
// 1 4 2 6 3

// 출력2
// NO


const num_arr = parseInt(prompt("숫자를 입력해주세요. (띄어쓰기 필수)"));
function solution() {

    num_arr.sort((a,b) => a - b );
    console.log(num_arr);

    for (let i = 0; i < num_arr.length; i++) {
        if (num_arr[i] + 1 === num_arr[i + 1]) {
            // 연속되야하니까 [i]+ 1과 [i+1]은 숫자가 같아야함
            return "YES"
        } else {
            return "NO";
        }
    }

}
solution();

// * 답안지
function sol(l) {
    l.sort((a, b) => {
        return a - b;
    });

    for (let i = 0; i < l.length - 1; i++) {
        if (l[i] + 1 !== l[i + 1]) {
            return 'NO';
        }
    }
    return 'YES';
}

const n = prompt('입력해주세요').split(' ').map(n => parseInt(n, 10));

console.log(sol(n));


// # 문제56 : 객체의 함수 응용

// 다음의 객체가 주어졌을 때 한국의 면적과 가장 비슷한 국가와 그 차이를 출력하세요.

    // ** 출력 **
    // England 22023


const nationWidth = {
    'korea': 220877,
    'Rusia': 17098242,
    'China': 9596961,
    'France': 543965,
    'Japan': 377915,
    'England': 242900,
}

const k = nationWidth['korea'];
delete nationWidth['korea'];
// delete 는 객체의 속성을 제거 

// key / value 나누기 -> 추출
let nation_name = Object.keys(nationWidth);
let nation_width = Object.values(nationWidth);
// console.log(nation_name);
// console.log(nation_width);
let gap = Math.max.apply(null, values);
let res = [];

for(let i in nation_name){
    if(gap > Math.abs(nation_name[i][1] - k)){
        gap = Math.abs(nation_name[i][1] - k);
        res =  nation_name[i];
    }
    // Math.abs() : 주어진 숫자의 절대값을 반환. x(숫자)가 양수이거나 0이라면 x리턴 / x가 음수라면 x의반댓값(음수) 반환
}
console.log(res[0], res[1] - k);

// undefined NaN 출력이네요 머지 코드이해가 잘 안돼요ㅠ