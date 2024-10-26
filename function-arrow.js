/**
 * 화살표 함수(arrow function)
 */

/**
 * 함수 표현식으로 작성
 */
// let add = function(num1, num2){
//     return num1 + num2;
// }

/**
 * 화살표 함수로 작성
 */
// let add = (num1, num2) => {
//   return num1 + num2;
// };

/**
 * 코드 본문이 한줄이고 return문이 있으면 중괄호를 소괄호로 대체 가능
 */
// let add = (num1, num2) => (num1 + num2)

/**
 * return문이 한줄이면 괄호도 생략 가능
 */
// let add = (num1, num2) => num1 + num2;

/**
 * 인수가 하나라면 괄호도 생략 가능
 */
// let sayHello = name => `Hello, ${name}`;

/**
 * 인수가 없으면 괄호 생략 불가
 */
// let showError = () => {
//   alert("error!");
// };

/**
 * return문이 있다고 해도 return 전에 여러줄의 코드가 있을경우
 * 일반 괄호를 사용할 수 없다
 */
// let add = function (num1, num2) {
//   const result = num1 + num2;
//   return result;
// };

let add = (num1, num2) => {
  const result = num1 + num2;
  return result;
};
