// # 문제42 : 2020년

// 2020년 1월 1일은 수요일입니다. 2020년 a월 b일은 무슨 요일일까요?
// 두 수 a, b를 입력받아 2020년 a월 b일이 무슨 요일인지 리턴하는 함수 solution을 완성하세요.
// 요일의 이름은 일요일부터 토요일까지 각각 SUN, MON, TUE, WED, THU, FRI, SAT 입니다.

// 예를 들어 a = 5, b = 24라면 5월 24일은 일요일이므로 문자열 "SUN"를 반환하세요.

// **제한 조건**
// 2020년은 윤년입니다.
// 2020년 a월 b일은 실제로 있는 날입니다. 
// (13월 26일이나 2월 45일 같은 날짜는 주어지지 않습니다.)

let a =  parseInt(prompt("해당 월을 입력해주세요"));
let b =  parseInt(prompt("해당 일을 입력해주세요"));
const week = [ 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];
// 일 로 시작하면 자꾸 하루씩 빨리 나옴 이거 어케고침?ㅜㅜ

function getDayOfWeek(a,b){
    
    const dayOfWeek = week[new Date(`'2022-${a}-${b}'`).getDay()];
    // 템플릿리터럴 안에 따옴표넣는거,,,첨알았다
    // dayOfweek 변수에 입력한 날짜의 요일을 반환하는 체이닝을 만들어서 week 배열에 넣음(?)
    console.log(dayOfWeek);
}
getDayOfWeek(a,b);




// # 문제45 : getTime()함수 사용하기

// Date객체의 메소드 중 하나인 getTime()은 1970년 1월 1일 0시 0분 0초 이후로부터 지금까지 흐른 시간을 천분의 1초 단위(ms)로 반환합니다.

// 이를 이용하여 **현재 연도(2019)를 출력해보세요.**
// 1년 -> 365일 -> 8760시간 -> 525600분 -> 31,536,000초
let second = new Date().getTime();
console.log(second);
let oneYear = 31536000;
console.log( ( second / oneYear) )
//사칙연산만 해서 초를 년으로 변환하면 될거같은데 어케함?

let date = new Date();
let year = date.getTime();
year = Math.floor(year/(3600*24*365*1000)) + 1970;
console.log(year);



# 문제48 : 대소문자 바꿔서 출력하기

문자열이 주어지면 대문자와 소문자를 바꿔서 출력하는 프로그램을 작성하세요.

입출력

입력 : AAABBBcccddd
출력 : aaabbbCCCDDD

let str = prompt("문자를 적어주세요");
let output = ' ';
function pro(){
    for(let value of str){ // for of 문으로 문자열을 분리
        // console.log(value);
        if(value === str.toUpperCase()){
            output += str.toLowerCase();
        }else{
            output += str.toUpperCase();
        }
        return output;
    }
}

console.log(pro(output));
// 힝 다됐는데 왜 안되지ㅜ? 왜? ㅠㅠ??

// change_str = str.toLowerCase().toUpperCase();
// console.log(change_str);

// function pro(str){
//     for(let x of str){
//         if(x == x.toUpperCase()){
//             output += x.toLowerCase();
//         }else{
//             output += x.toUpperCase();
//         }
//         return output;
//     }

// }
// console.log(pro(output));


/*** 담안지  */
let a = prompt('문자열을 입력하세요.');
let b = [];
let s = '';

for (let i=0; i<a.length; i++){
	//toLowerCase() 메서드는 문자열을 소문자로, toUpperCase() 메서드는 문자열을 대문자로 변환하여 반환합니다.
  if(a[i] === a[i].toLowerCase()){ 
    b.push(a[i].toUpperCase());
  } else {
    b.push(a[i].toLowerCase());
  }
}

for (let j=0; j<b.length; j++){
  s += b[j];
}

console.log(s);

