#예제 5-6

var fruit = ['apple','banana','peach'];
var $ul = document.createElement('ul'); // 공통코드

fruits.forEach(function(fruit){
    var $li = document.createElement('li');
    $li.innerText = fruit;
    $li.addEventListener('click', function(){
        alert('your choice is' + fruit);
    });
    $ul.appendChild($li);
})
document.body.appendChild($ul);
