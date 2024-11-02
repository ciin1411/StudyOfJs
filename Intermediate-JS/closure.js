/**
 * 보충학습 필요
 * 클로저
 * 변수와 호이스팅, 기초강좌 11장 함수선언문 특징 선행학습 필요
 *
 * 함수와 렉시컬 환경의 조합
 * 함수가 생성될 당시의 외부 변수를 기억
 * 생성 이후에도 계속 접근 가능
 */

/**
 * 어휘적 환경
 * 자바스크립트는 어휘적 환경을 갖는다
 */
// let one;
// one = 1;

// function addOne(num) {
//   console.log(num + one); // 내부 렉시컬에서 num은 찾았지만 one은 없어서 외부 렉시컬을 탐색
// }
// addOne(5);

/**
 * 어휘적 환경 2
 */
// function makeAdder(x) {
//   return function (y) { // y를 가지고있고 상위함수인 makeAdder()의 x에 접근 가능
//     return x + y;
//   };
// }
// const add3 = makeAdder(3);
// console.log(add3(2)); // 5, add3 함수가 생성된 이후에도 상위함수인 makeAdder()의 x에 접근 가능

// const add10 = makeAdder(10);
// console.log(add10(5));
// console.log(add3(1));

/**
 * 테스트
 *
 *
 */
function makeClosure() {
  let num = 0; // 은닉화

  return function () {
    return num++;
  };
}
let counter = makeCounter();
console.log(counter()); // 0
console.log(counter()); // 1
console.log(counter()); // 2
