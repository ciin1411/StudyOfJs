/**
 * 배열의 특징
 * 배열은 문자 뿐만 아니라, 숫자, 객체, 함수 등도 포함할 수 있음
 */
// let arr = [
//   "민수",
//   3,
//   flase,
//   {
//     name: "Mike",
//     age: 30,
//   },
//   function () {
//     console.log("TEST");
//   },
// ];

/**
 * length : 배열의 길이
 * 배열이름.length
 * 배열이 가지고있는 요소의 개수를 반환함
 */

/**
 * push() : 배열 끝에 추가
 */
// let days = ["월", "화", "수"];
// days.push("목");
// console.log(days); // [ '월', '화', '수', '목' ]

/**
 * pop() : 배열 끝 요소 제거
 */
// let days = ["월", "화", "수"];
// days.pop();
// console.log(days); // [ '월', '화' ]

/**
 * shift, unshift 배열 앞에 제거/추가
 */
// let days = ["월", "화", "수"];

// //추가
// days.unshift("일");
// console.log(days); // [ '일', '월', '화', '수' ]

// //제거
// days.shift();
// console.log(days); // [ '월', '화', '수' ]

/**
 * 배열을 사용하는 가장 큰 이유는 반복을 위해서
 * 반복문 : for
 */
// let days = ["월", "화", "수"];

// for (let index = 0; index < days.length; index++) {
//   console.log(days[index]);
// }
// 월
// 화
// 수

/**
 * 반복문 : for ... of
 * 객체를 순회하는 for ... in 과 헷갈리지 않게 주의
 * 물론 배열도 객체형이기 때문에 for ... in을 사용할 수 있지만
 * 장점보다 단점이 많기때문에 권장하지 않음
 * for ... of로 기억할것
 */
// let days = ["월", "화", "수"];

// for (let day of days) {
//   console.log(day);
// }
// for문보다는 간단하지만 index를 못 얻는다는 단점이 있음

/**
 * 코드로 살펴보기
 */
let days = ["mon", "tue", "wed"];
// days[1] = "화요일";
days.push("thu");
days.unshift("sun");

// console.log(days);

// for 반복문
// for (let index = 0; index < days.length; index++) {
//   console.log(days[index]);
// }

// for ... of 반복문
// for (let day of days) {
//   console.log(day);
// }
