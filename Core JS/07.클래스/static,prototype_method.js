var Rectangle = function(width, height){
    this.width = width;
    this.height = height;
}; // -> 생성자

Rectangle.prototype.getArea = function(){
    return this.width * this.height;
} // -> 프로토타입 메서드

Rectangle.isRectangle = function(instance){
    return instance instanceof Rectangle &&
        instance.width > 0 && instance.height > 0;
} // -> 스태틱 메서드

var rect1 = new Rectangle(3,4);
console.log(rect1.getArea());  // 12(O)
console.log(rect1.isRectangle(rect1)); // Error(X)
console.log(Rectangle.isRectangle(rect1)); // true


// -----

//TODO 7-3-1
// 7-2 Grade 생성자 함수 및 인스턴스
var Grade = function(){
    var args = Array.prototype.slice.call(arguments);
    for(var i =0; i < args.length; i++){ //! length 프로퍼티는 삭제 가능함
        this[i] = args[i];
    }
    this.length = args.length;
}
Grade.prototype = []; //! 여기에 빈 배열을 참조시킴
var g = new Grade(100, 80);


// 7-5
var Rectangle = function(width, height){
    this.width = width;
    this.height = height;
}; 

Rectangle.prototype.getArea = function(){
    return this.width * this.height;
}
var rect = new Rectangle(3,4);
console.log(rect.getArea());
 
var Square =  function(width){
    this.width = width;
}
Square.prototype.getArea = function(){
    return this.width * this.width;
}
var sq = new Square(5);
console.log(sq.getArea());
// Square 클래스 변형
var Square = function(width){
    this.width = width;
    this.height = width;
}
Square.prototype.getArea =  function(){
    return this.width * this.height;
}
// 7-7
    //...
var Square = function(width){
    Rectangle.call(this, width, width);
    // Square 생성자 함수 내부에서 Rectangle 생성자 함수로써 호출
    // 이때 인자 height자리에 width 를 전달.
}
Square.prototype = new Rectangle();
// 메서드를 상속하기 위해 Square의 프로토타입 객체에 Rectangle 인스턴스를 부여함

// 추가했지롱~

var Rectangle = function(width, height){
    this.width = width;
    this.height = height;
}; 

Rectangle.prototype.getArea = function(){
    return this.width * this.height;
}

var Square = function(width){
    Rectangle.call(this, width, width);
}
Square.prototype = new Rectangle();

