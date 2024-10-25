/**
 *   함수      함수명  매개변수
 * function sayHello(name)
 */
// function sayHello(name) {
//     console.log(`Hello, ${name}`);
//   }
//   sayHello("Mike");

/**
 *  매개변수 없는 함수
 */
// function showError() {
//   alert("에러가 발생했습니다. 다시 시도해주세요.");
// }
// showError();

/**
 * 매개변수 있는 함수
 */
// function sayHello(name) {
//   const msg = `Hello, ${name}`;
//   console.log(msg);
// }
// sayHello("Mike");
// sayHello("Tom");
// sayHello("Jane");

/**
 * 사용자의 이름을 모르는 경우
 * 함수 내부에서 선언된 msg는 함수 외부에서 사용이 불가함
 * 밖에서 미리 선언하면(전역 변수) 함수 내부에서 및 외부에서 사용가능
 * 함수 내부에서 선언하면(지역 변수) 함수 내부에서만 사용가능
 */
// function sayHello(name) {
//   console.log(typeof name); // undefined
//   let msg = `Hello`;
//   if (name) {
//     msg = `Hello, ${name}`;
//   }
//   console.log(msg);
// }
// sayHello();

/**
 * OR연산자를 이용한 if문 대체
 */
// function sayHello(name) {
//   let newName = name || "friend";
//   let msg = `Hello, ${newName}`;
//   console.log(msg);
// }
// sayHello();
// sayHello("Jane");

/**
 * 매개변수 기본값 설정 버전
 */
// function sayHello(name = "friend") {
//   let msg = `Hello, ${name}`;
//   console.log(msg);
// }
// sayHello();
// sayHello("Jane");

/**
 * return 으로 값 반환
 */
// function add(num1, num2) {
//   return num1 + num2;
// }
// const result = add(2, 3);
// console.log(result);
