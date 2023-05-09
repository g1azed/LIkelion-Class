function bubble(arr) {
    let result = arr.slice(); 
  
    for (let i = 0; i < result.length - 1; i++) {
      for (/*빈칸을 채워주세요.*/) {
        if (result[j] > result[j + 1]) {
           //빈칸을 채워주세요.
        }
      }
    }
    return result;
  }
  
  const items = prompt('입력해주세요.').split(' ').map((n) => {
    return parseInt(n, 10);
  });
  
  console.log(bubble(items));

  





  let a =10;
  let b = 20;
  let tep;

  tep =a;
  a =b;
  b= tep;

  [a,b] = [b,a]




  20. 'abcde1abc12abb'와 같은 문자열이 주어졌을 경우 이 안에 주어진 모든 숫자를 한자리씩 더하는 프로그램을 메서드 체이닝을 통해 완성하세요. 위 문제의 경우 1 + 1 + 2 = 4가 나와야 합니다.  'abcde1abc12abb'.split('') 부터 시작하시면 됩니다.


  let str = 'abcde1abc12abb'.split(''); 
  console.log(str);
  let regex = /[^0-9]/g;
  let result = str.replace(regex, "");
  console.log("result: " + result);

  let str = 'abcde1abc12abb'.split(''); 
  function solution(str){
    let answer;
    let regex = /[^0-9]/g;
    str = str.replace(regex, "");
    answer = parseInt(str);
    return answer;
  }

  function solution(str){
    let answer;
    str = str.replace(/[^0-9]/g, '');
    answer = parseInt(str);
    
    return answer;
}

let str = "abcde1abc12abb";
console.log(solution(str));

let sum = str.split('');
console.log(sum);
let result =0;
for(let i =0; i<str.length; i++){
    result += sum[i];
    console.log(result);
}