// var lotto = [1,2,3,4,5,6];
// lotto.push(7);
// document.write(lotto);

// var lottonum = Math.floor(Math.random() *6 + 1);
// for( var i =0; i <6; i++){
//     document.write(lottonum);
// }



var lotto = [];
while(lotto.length < 6){
    var num = parseInt(Math.random() *45 +1);
    if(lotto.indexOf(num) == -1){
        //indexOf :배열에 그 값이 있는지 검사
        lotto.push(num);
    }
}
lotto.sort((a,b) => a-b);
document.write(lotto);