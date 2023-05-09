// 'abcde1abc12abb'와 같은 문자열이 주어졌을 경우 이 안에 주어진 모든 숫자를 한자리씩 더하는 프로그램을 메서드 체이닝을 통해 완성하세요. 위 문제의 경우 1 + 1 + 2 = 4가 나와야 합니다.  'abcde1abc12abb'.split('') 부터 시작하시면 됩니다.

'abcde1abc12abb'.split('');

console.log(
    'abcde1abc12abb'.split('').replace( '/[^0-9]/g\`' ,'')
    );


    const str = 'abcde1abc12abb';
    const pickNum = str.replace(/[^0-9]/g, "");

    const separateNum = pickNum.split("");
  
    const changToNum = separateNum.map((i) => Number(i));
  
    const answer = changToNum.reduce((a, b) => a + b);

console.log(answer);