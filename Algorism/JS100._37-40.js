// 37번은 Map
// 38번은 Set

// # 문제37 : 반장 선거

// 새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은 **학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램**을 작성하기로 하였습니다.

//     입력
//     원범 원범 혜원 혜원 혜원 혜원 유진 유진

//     출력
//     혜원(이)가 총 4표로 반장이 되었습니다.

// 뽑은 후보 입력받기
// 학생이름 비교 ==> 비교를 어케 해야 하는건지요,,,
// 뽑힌 학생이 받은 표 수 ==> 같은 문자열 개수 세기
// map으로 같은 문자열인 애들을 모아서 반환

let named = prompt("후보를 뽑아주세용").split(' ');
let dupYn = false;
for (let i = 0; i < named.length; i++) {
    const currElem = named[i];

    for (let j = i + 1; j < named.length; j++) {
        if (currElem === named[j]) {
            dupYn = true;
            break;
        }
    }

    if (dupYn) {
        break;
    }
}

document.writeln("DupYn : " + dupYn);


/* 답안지 */
const array = prompt('이름을 입력해주세요').split(' ');
// 이름 입력하고 split으로 나눔
let result = { };
// result  빈 객체 선언
let winner = " ";
// winner 빈 공간? 객체 선언
for(let index in array){
    // array 객체의 index(속성이름) 반복문 for~in
    // 객체의 속성들에 대해 반복함
    let val = array[index];
    // val 변수에 입력받은 array 변수의 Index를 대입
    result[val] = ( result[val] ===  undefined )? 1 : (result[val] = result[val] + 1);
    // Result의 val의 Index 를 삼항연산자< 만약 result[val]이 언디파인드라면 1 아니라면 result[val]에 1을 더해주세요
}

winner = Object.keys(result).reduce(function(a,b){
    return result[a] > result[b] ? a : b
})
// 뿌애앵
console.log(`${winner}(이)가 총 ${result[winner]}로 반장이 되었습니다.`)


Number.MIN_SAFE_INTEGER
-9007199254740991
Number.MAX_SAFE_INTEGER
9007199254740991
// => Number가 안전하게 제공하는 최소/ 최소 정수값 . 이것보다 작거나 큰 경우에는 자스에서 연산시 오류가 발생할 수있음
// -> 넘어가면 bigInt

// # 문제38 : 호준이의 아르바이트

// 호준이는 아르바이트로 영어 학원에서 단어 시험지를 채점하는 일을 하고 있다. 호준이가 일하는 학원은 매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다. 그런데 오늘은 마침 사탕이 다 떨어져서 호준이가 채점을 하고 점수를 보내면, 당신이 아이들의 숫자만큼 사탕을 사러 가기로 했다.

// 1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
// **학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.**

입출력

입력 : 97 86 75 66 55 97 85 97 97 95
출력 : 6

// 1위 ~ 3위 학생은 여러명일 수 있고 => 중복 가능성 O
/* 답안지 */
const scores = prompt('점수 입력').split(' ').map(function(n){
    // map()은 배열 내의 모든 요소 각각에 대하여 주어진 함수를 호출한 결과를 모아 !!새로운 배열!!을 반환
    return parseInt(n, 10);
    // 10진수 숫자형으로 리턴 (10이면 입력안해두댐!!!!!! )

})
scores.sort((a,b) => {
    // score을 오름차순으로 정렬
    return a-b;
})
let count = 0;
let arr = [];

while(arr.length < 3){
    // while 반복문으로 arr의 길이가 3보다 작을때까지
    let n = scores.pop();
    // n에다가 scores의 마지막요소를 제거하고 반환함
    if(!arr.includes(n)){
        // 만약 arr에 n 이 포함되어있지않다면
        arr.push(n);
        // n을 넣어주세요
    }
    count += 1;
    // count 에 1을 더해주셈요
}
console.log(count);




// # 문제39 : 오타 수정하기

// 혜원이는 평소 영타가 빠르고 정확한 것을 친구들에게 자랑하고 다녔습니다. 반 친구들이 혜원이의 타자 속도가 빠르다는 것을 모두 알게 되자 혜원이는 모두의 앞에서 타자 실력을 보여주게 됩니다. 

// 그런데 막상 보여주려니 긴장이 되서 문장의 모든 e를 q로 잘못 친 것을 발견했습니다. 
// 혜원이는 프로그램을 돌려 재빠르게 모든 q를 e로 바꾸는 프로그램을 작성하려고 합니다.

// **문장이 입력되면 모든 q를 e로 바꾸는 프로그램을 작성해 주세요.**

let input = prompt('타자 쳐주세요');
// input = input.replace('q','e'); 이렇게 하믄 첫번째 q만 바뀜
input = input.replaceAll('q','e');
console.log(input);


// # 문제40 : 놀이동산에 가자

// 테마파크에 온 원범이와 친구들은 놀이기구를 타려고 합니다. 모든 놀이기구는 한번에 타는 인원수에는 제한이 없지만 제한 무게를 넘으면 무조건 다음 기구를 타야 합니다. 

// **원범이와 친구들이 총 몇 명 탈 수 있는지 알 수 있는 프로그램을 작성해 주세요.**

// 첫번째 입력으로 제한 무게가 주어지고 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다. 
// 그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다. 몸무게는 무작위로 주어집니다.

// 배열의 0번째 인덱스 => 몸무게(제한무게)
// 1 인덱스  + .. + N <= 0인덱스
// => 인덱스.length


let total = 0;
let count =0;
//첫번째 입력으로 제한 무게가 주어지고 
let limit = prompt('제한무게');
// 두번째 입력으로는 함께한 친구들의 수 n이 주어집니다. 
let n = prompt('친구 수');

// 그 다음 차례대로 탑승할 친구들의 몸무게가 주어집니다.
for( let i =1; i<n; i++){
    // var weight = prompt('친구들의 몸무게');
    // weight[i] == n;
    // console.log(weight);
    sort()로 정렬해서 하믄 오류?버그? 잡을수잇슴 < 다시풀어라~

    total += parseInt(prompt('친구들의 무게를 입력해주세요'),10);
    
    if(total <= limit){
        count = i;
    }
}
console.log(count);

// let num_input;
// for( let i= 0; i < input.length; i++){
//     // ++input[i]<= input[0];
//     num_input = parseInt(input);
//     ++num_input[i];
//     console.log(num_input) 
// }



/* 승표님 풀이  */
//
37
todo 반장 선거
새 학기를 맞아 호준이네 반은 반장 선거를 하기로 했습니다.  그런데 표를 하나씩 개표하는 과정이 너무 번거롭게 느껴진 당신은
* 학생들이 뽑은 후보들을 입력받으면 뽑힌 학생의 이름과 받은 표 수를 출력하는 프로그램을 작성하기로 하였습니다.

let inputArr = prompt('학생들이 뽑은 후보들을 입력해주세요 (구분: 공백)').split(' ');
let count = new Map();
let max = Number.MIN_SAFE_INTEGER;
let answer;
for (let a of inputArr) {
  count.set(a, 0);
}
inputArr.forEach((item) => {
  count.set(item, count.get(item) + 1);
});
for (let [key, value] of count) {
  if (value > max) {
    max = value;
    answer = key;
  }
}
console.log(answer);
! 투표 수가 중복이 되는 경우에 대해서는 문제에서 제시하고 있지 않다.

입력
원범 원범 혜원 혜원 혜원 혜원 유진 유진

출력
혜원(이)가 총 4표로 반장이 되었습니다.


38
todo 호준이의 아르바이트
호준이는 아르바이트로 영어 학원에서 단어 시험지를 채점하는 일을 하고 있다. 호준이가 일하는 학원은 매번 1위부터 3위까지의 학생에게 상으로 사탕을 준다. 그런데 오늘은 마침 사탕이 다 떨어져서 호준이가 채점을 하고 점수를 보내면, 당신이 아이들의 숫자만큼 사탕을 사러 가기로 했다.
1위 ~ 3위 학생은 여러명일 수 있고 1~3위 학생 중 중복되는 학생까지 포함하여 사탕을 사기로 한다.
**학생들의 점수를 공백으로 구분하여 입력을 받고 사탕을 받을 학생의 수를 출력하세요.**

let inputArr = prompt('점수를 일력해주세요 (구분: 공백)')
  .split(' ')
  .map((el) => parseInt(el));
let inputSet = new Set(inputArr);
let tempArr = [];
let cutRank = 3;
let candyCount = 0;
for (let a of inputSet) {
  tempArr.push(parseInt(a));
}
tempArr = tempArr.sort((a, b) => b - a);
let cutScore = tempArr[cutRank - 1];
for (let b of inputArr) {
  if (b >= cutScore) candyCount++;
}
console.log(candyCount);

입출력

입력 : 97 86 75 66 55 97 85 97 97 95
출력 : 6