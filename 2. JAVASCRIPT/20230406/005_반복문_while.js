let x = 0;
while(x <10){
    console.log('start')
    console.log(x)
    x += 1
    console.log('end')
}

let input;
do{
    input = comfirm('다음에도 우리랑 같이?');
}while(!input);

console.log("입력한 숫자는"+ input +"입니다" );


//구구단
//암기코드
for(let i=2; i < 10; i++){
    for(let j =0; j< 10; j++ ){
        console.log(`${i} X ${j} = ${i *j}`)
    }
}

let i = 2

while(i < 10){
    let j = 1;
    while(j < 10){

        console.log(`${i} X ${j} = ${i *j}`)
        j++;
    }
    i++;
}


//암기코드 2
let s = 'hello world'
for(let i = 0; i< s.length; i++){
    console.log(i)
}
 // 강사님 ver
let result = ''
for (let i = 0; i < s.length; i++) {
    // result = result + s[i]
    result = s[i] + result
}

console.log(result)

// s[0] + result => 'h' + ' ' => 'h'
// s[1] + result => 'e' + 'h' => 'eh'
// s[2] + result => 'l' + 'eh' => 'leh'
// s[3] + result => 'l' + 'leh' => 'lleh'
// s[4] + result => 'o' + 'lleh' => 'olleh'

let s = 'hello world'
let result = ''
let count =0;
while(count < s.length){
    result = s[i] + result
    count++
}

console.log(result)
// 암기코드 2 end

let x = 0
while (x < 10) {
    console.log('start')
    console.log(x)
    x += 1
    console.log('end')
}

/////
// why? 10까지 출력이 되는가?
let x = 0
while (x < 10) {
    console.log(x)
    x += 1
}

let x = 0
while (x < 10) {
    console.log(x)
    x += 1
    console.log('')
}

/////


//암기코드 3
// 팩토리얼
// 5! =  5 * 4* 3* 2* 1
let s =  1;
for(let i = 1; i< 6; i++){
    s *= i

}
console.log(s)



let s =1;
i =1;

while(i < 6){
    s *= i;
    i += 1;
}
console.log(s)