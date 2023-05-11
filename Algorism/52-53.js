// # 문제52 : quick sort

// 다음 빈 칸을 채워 퀵 정렬을 완성해주세요.

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[0];
    const left = [];
    const right = [];

    for (let i = 1; i < arr.length; i++) {
        if (left[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }
    // return true;
    return quickSort(left).concat(pivot, quickSort(right));
    //concat() 메서드는 인자로 주어진 배열이나 값들을 기존 배열에 합쳐서 새 배열을 반환합니다.
}

const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

console.log(quickSort(array));




// # 문제53 : 괄호 문자열

// 괄호 문자열이란 괄호 기호인 '{', '}', '[', ']', '(', ')' 와 같은 것을 말한다. 그중 괄호의 모양이 바르게 구성된 문자열을 **바른 문자열**, 그렇지 않은 문자열을 **바르지 않은 문자열**이라 부르도록 하자. 

// (())와 같은 문자열은 바른 문자열이지만 ()()) 와 같은 문자열은 바르지 않은 문자열이다.
// (해당 문제에서는 소괄호만 판별하지만,  중괄호와 대괄호까지 판별해 보세요.)

// **입력으로 주어진 괄호 문자열이 바른 문자열인지 바르지 않은 문자열인지 "YES"와 "NO"로 구분된 문자열을 출력해보자.**

// const correct = ['{','}','[',']','(',')']


function solution(s){
    let answer = true;
    // 1. 괄호의 개수를 체크하는 변수를 생성한다.
    let bracketList = 0;

    // 2. 괄호 문자열(s)에서 괄호 하나하나 확인한다.
    for(let i = 0; i < s.length; i++) {
        //  2-1. 열린 괄호를 찾으면 변수의 값을 1 증가시킨다.
        if(s[i] === '(') {
            bracketList++;
        // 2-2. 닫힌 괄호를 찾으면, 현재 변수의 값이 양수인지 확인한다.
        } else {
            // 2-2-1. 값이 양수라면 열린 괄호가 앞에 있으므로 
            //        정상적임을 판단하여 변수의 값을 1 감소시킨다.
            if (bracketList > 0) {
                bracketList--;
            // 2-2-2. 값이 양수가 아니라면 열린 괄호가 앞에 없는 
            //        비정상적임을 판단하여 false를 반환한다.
            } else {
                answer = false;
                break;
            }
        }
    }

    // 3. 모든 괄호 문자열(s)를 확인한 결과 변수가 0보다 크면 
    //    열린 괄호가 더 많다는 의미이므로 false를 반환한다.
    if(bracketList > 0) {
        answer = false;
    }

    // 4. 변수가 0이라면 true를 반환한다.
    return answer;
}

/* 답안지 */
function mathBrackets(e){
    let count = 0;
    
    //괄호 개수가 같지 않으면 false
    for (let i=0; i<e.length; i++){
        if (e[i] === '('){
            count++;
        }
        if (e[i] === ')'){
            count--;
        }
    }
    if (count !== 0){
        return false;
    }
    
    let 괄호 = [];
    for (let i in e){
        if (e[i] === '(') {
            괄호.push('(');
        }
            
        if (e[i] === ')') {
            if (괄호.length === 0) {
                return false;
            }
            괄호.pop();
        }   
    }
    return true;
}
    

const n = prompt('입력해주세요.').split('');

if (mathBrackets(n) === true) {
    console.log('YES');
} else {
    console.log('NO');
}