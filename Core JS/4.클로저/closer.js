// #예제 5-6

var fruits = ['apple','banana','peach'];
var $ul = document.createElement('ul'); // 공통코드

fruits.forEach(function(fruit){    // 콜백함수 A
    // A는 fruits의 개수만큼실행 -> 그때 마다 새로운 실행 컨텍스트 활성화
    var $li = document.createElement('li'); 
    $li.innerText = fruit;
    $li.addEventListener('click', function(){  // 콜백함수 B
        alert('your choice is' + fruit);
    });
    $ul.appendChild($li);
})
document.body.appendChild($ul);

// => 최소한 (B)함수가 참조할 예정인 변수 fruit에 대해서는 (A)가 종료후에도 GC대상에서 제외되어 계속 참조 가능할 것.

// But (B)함수의 쓰임이 콜백 함수에 국한되지않는 경우라면 반복을 줄이기위해
// (B)를 외부로 분리하는 편이 나을 수도 있을 것.
// * 즉 fruit를 인자로 받아 출력하는 형태

// ...
var fruits = ['apple','banana','peach'];
var $ul = document.createElement('ul'); // 공통코드
var alertFruit =  function(fruit){
    alert('your choice is' + fruit); 
    // 콜백함수를 외부로 꺼내서 변수에 저장 -> 직접 실행 가능
}

fruits.forEach(function(fruit){
    var $li = document.createElement('li');
    $li.innerText = fruit;
    $li.addEventListener('click', alertFruit);
    $li.appendChild($li);
    console.log(fruits[1])
});
document.body.appendChild($ul);
alertFruit(fruits[1]);




