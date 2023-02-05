function add (x ,y) {
// add 는 식별자 이자 변수 임 
    return x + y

}

add ( 1, 3)

console.log(add(2,3))
/// 함수가 아무값도 반환하지 않는다면 undefind를 반환한다.

// 호이스팅 변수는 안됨 , 함수는 가능 
// 함수도 객체이다!!!!
// 함수는 객체 이기떄문에 리터럴에 값으로도 들어갈수 있다.
const a  = function  (x ,y) {

    return x + y

}

// // 일급객체
// 변수에 할당 가능
// 인자로 전달 가능
// 다른함수의 결과값으로 리턴가능
// 커링 활용과 공부하기 

///////////////////////
// 매개변수는 순서만 맞다면 컴파일에러 x
// 디폴트 값 정의 가능 
// arguments 라는 배열로 매개변수 활용가능

function add (a, b){
    return arguments[0] + arguments[1] ;
}

function getAverage() {
    let result =0;
    for ( const num of arguments){
        result += num
    }

    return result / arguments.length ;
}// 이런 식으로 매개변수 수를 동적으로 관리 


// 자바스크립트 private ?? 있나?