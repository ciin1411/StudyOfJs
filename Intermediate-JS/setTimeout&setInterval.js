/**
 * setTimeout()
 *  일정 시간이 지난 후 함수를 실행
 *
 * setInterval()
 *  일정 시간 간격으로 함수르 반복
 */
// function fn() {
//   console.log(3);
// }
// setTimeout(fn, 3000); // 3초 후에 fn 함수를 실행

/**
 * 함수를 전달하지 않고 직접 코드를 전달해도 동일하게 작동
 */
// setTimeout(function () {
//   console.log(3);
// }, 3000);

/**
 * 인수를 전달하고 싶을때
 */
// function showName(name) {
//   console.log(name);
// }
// setTimeout(showName, 3000, "Mike"); // 3초 후에 showName('Mike') 함수를 실행

/**
 * clearTimeout()
 * 스케줄링 취소
 */
// const tId = function showName(name) {
//   console.log(name);
// };
// setTimeout(showName, 3000, "Mike");
// clearTimeout(tId); //3초가 지나기전에 이 코드가 실행됨

/**
 * setInterval()
 */
// function showName(name) {
//   console.log(name);
// }
// const tId = setInterval(showName, 3000, "Mike");
// 3초마다 "Mike"가 찍힘 중단하려면 clearInterval(tId);를 실행하면 됨

/**
 * delay = 0?
 * 0이여도 딜레이는 발생
 */
// setTimeout(function () {
//   console.log(2);
// }, 0); // 브라우저는 기본적으로 4ms의 딜레이가 있음 0이라 적어도 4 혹은 그 이상의 delay가 발생
// console.log(1);

/**
 * setInterval, clearInterval 예제
 */
let num = 0;
function showTime() {
  console.log(`안녕하세요. 접속하신지 ${num++}초가 지났습니다.`);
  if (num > 5) {
    clearInterval(tId);
  }
}

const tId = setInterval(showTime, 1000);
