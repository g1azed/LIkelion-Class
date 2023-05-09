// # 문제44 : 각 자리수의 합

// **사용자가 입력한 양의 정수의 각 자리수의 합을 구하는 프로그램**을 만들어주세요

// **예를들어**
// 18234 = 1+8+2+3+4 이고 정답은 18 입니다.
// 3849 = 3+8+4+9 이고 정답은 24입니다.

let n = prompt("숫자를 입력해주세요");
let output = 0;


while(n !== 0){
    output += (n % 10);
    n =  Math.floor(n/10);
}
console.log(output);

// for(let i= 0; i<n.length; i++){
//     if( n !== 0 ){
//         output += (n % 10);
//         n = Math.floor(n/10);
//     }
// }




// # 문제46 : 각 자리수의 합 2

// 1부터 20까지의(20을 포함) 모든 숫자를 일렬로 놓고 모든 자릿수의 총 합을 구하세요. 

// 예를 들어 10부터 15까지의 모든 숫자를 일렬로 놓으면 101112131415이고 
// 각 자리의 숫자를 더하면 21입니다. (1+0+1+1+1+2+1+3+1+4+1+5 = 21)

// 1부터 20까지의 모든 숫자를 일렬로 놓고 

let num_arr = [];
for(let i = 1; i<=20; i++){
    num_arr.push(i); // 1 2 3 4 5 5 y/.. 20
}    
console.log(num_arr);
let sum = 0;
for(let i =0; i < num_arr.length; i++){
    sum += parseInt(num_arr[i]);
}
console.log(sum);


// # 문제49 : 최댓값 구하기

// 순서가 없는 10개의 숫자가 공백으로 구분되어 주어진다. 주어진 숫자들 중 최댓값을 반환하라.
// 입출력

// 입력 : 10 9 8 7 6 5 4 3 2 1
// 출력 : 10

let num = parseInt(prompt("숫자를 10개 입력해주세요"));
for(let i = 0; i < num.length; i++){
    num.sort( (a,b) => {
        return b - a;
    });
    console.log(num[0]);
}
console.log(num);

Math.max : Math 의 최댓값

let numbers = prompt('10개의 숫자를 입력하세요').split(' ').map((n) => {
    return parseInt(n, 10);
  });
  
  numbers.sort((a, b) => {
    return b-a;
  });
  
  console.log(numbers[0]);