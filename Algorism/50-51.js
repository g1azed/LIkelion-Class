
// 버블정렬 내가 이해한거 : 앞에서부터 하나씩 비교해가면서 1-2, 2-3, 3-4 .. 로 비교
function bubble(arr) {
  let result = arr.slice();
  console.log(result);

  for (let i = 0; i < result.length - 1; i++) { // 0부터 시작해서 result 길이에서 하나빠짐 웨지
    for (j=0; j<i; i++) { 
      if (result[j] > result[j + 1]) {
         let temp = result[j]; // Temp 선언과 동시에 result J번을 반복해서 넣음
         result[j] = result[j+1]; //result I, i+1 대입
         result[j+1] = temp; // 대입
         

      }
    }
  }
  return result;
}

const items = prompt('입력해주세요.').split(' ').map((n) => {
  return parseInt(n, 10);
});

console.log(bubble(items));







// let a = 10;
// let b = 20;
// let tep;

// tep = a;
// a = b;
// b = tep;

// [a, b] = [b, a]









// # 문제51 : merge sort를 만들어보자

// 병합정렬(merge sort)은 대표적인 정렬 알고리즘 중 하나로 다음과 같이 동작합니다.

// > 1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다. 그렇지 않은 경우에는

// 2. 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.

// 3. 각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.

// 4. 두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.
// > 

// 출처 : 위키피디아

// 다음 코드의 빈칸을 채워 병합정렬을 완성해 봅시다.

function mergeSort(arr){

  if (arr.length <= 1){ // 만약 인자 arr의 길이가 1보다 작거나 같다면 arr리턴
    return arr;
  }

  const mid = Math.floor(arr.length / 2); // arr길이를 반으로 줄임
  const left = arr.slice(0,mid); // arr 뒤를 반정도 자른다
  const right = arr.slice(mid); // arr 앞을 반정도 자름

  return merge(mergeSort(left), mergeSort(right)); 
}

function merge(left, right){
  let result = [];

  while ( left.length && right.length){
    if (left[0] <= right[0]){
      result.push(left.shift()); 
      // shift() : 배열에서 첫번째 요소제거, 제거된 요소 반환.
      // => 제거된 요소를 Result 끝에 추가
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) { // left.length (== 0)
    // 이거 조건문이 어케 불린이 되는거죠?ㅜㅜ
    // result = left.slice(mid);
    result.push(left.shift())
  }
  while (right.length) {
    // result = right.slice(mid);
    result.push(right.shift())
  }

  return result;
}

const array = prompt('배열을 입력하세요').split(' ').map(n => parseInt(n, 10));

console.log(mergeSort(array));