/**
 * 문자열 메소드
 * ', ", `
 */

// 여러줄
// let desc = `오늘은 맑고 화창한
// 날씨가 계속 되겠습니다.
// 내일은 비소식이 있습니다.`;

// let desc = "오늘은 맑고 화창한 \n날씨가 계속 되겠습니다.";

/**
 * length : 문자열 길이
 * 보통 가입할때 아이디나 비밀번호를 몇자이상 몇자이하로 제한할때 체크하곤 함
 */
// let desc = "안녕하세요.";
// desc.length; // 6
// desc[2]; // '하'
// desc[4] = "용"; // 배열과는 다르게 한글자만 바꾸는건 허용 안됨

/**
 * toUpperCase()/ toLoweraCase()
 */

// let desc = "Hi guys. Nice to meet you.";
// desc.toUpperCase();
// // "HI GUYS. NICE TO MEET YOU.""

// desc.toLowerCase();
// // "hi guys. nice to meet you."

/**
 * str.indexOf(text)
 * 포함된 문자가 여러개라도 첫번째 위치만 반환
 */
// let desc = "Hi guys. Nice to meet you.";
// desc.indexOf("to"); // 14
// desc.indexOf("man"); // -1, 없는값은 -1을 출력

// if (desc.indexOf("Hi") > -1) {
//   // "Hi" = 0, 0 = false, 밑에 문장 출력 안됨, > -1을 붙여줘야함
//   console.log("Hi가 포함된 문장입니다.");
// }

/**
 * str.slice(n,m)
 * 특정 범위 문자열만 뽑기
 * n : 시작점
 * m : 없으면 문자열 끝까지, 양수면 그 숫자까지(포함하지 않음), 음수면 끝에서부터 셈
 */
// let desc = "abcdefg";
// desc.slice(2); // "cdefg"
// desc.slice(0, 5); // "abcde"
// desc.slice(2, -2); // "cde"

/**
 * str.substring(n, m)
 * n과 m사이 문자열 반환
 * n과 m을 바꿔도 동작함 m부터 n이 아니라 그냥 n부터 m 사이라 생각하면됨
 * 음수는 0으로 인식
 */
// desc.substring(2, 5); // "cde"
// desc.substring(5, 2); // "cde"

/**
 * str.substr(n, m)
 * n부터 시작
 * m개를 가져옴(이전의 범위같은게 아님)
 *
 * ****** 공식문서 기준 지원 중단 ******
 */
// desc.substr(2, -4);

/**
 * str.trim() : 앞 뒤 공백 제거
 */
let desc = " coding       ";
desc.trim(); // "coding"

/**
 * str.repeat(n) : n번 반복
 */
let hello = "hello!";
hello.repeat(3); // "hello!hello!hello!"

/**
 * 문자열 비고
 * 1 < 3 // true
 * "a" < "c" // true
 * 아스키 코드 기준
 */
// ----------------------------------------------------------------------------
/**
 * 활용 예시
 */
// let list = [
//   "01. 들어가며",
//   "02. JS의 역사",
//   "03. 자료형",
//   "04. 함수",
//   "05. 배열",
// ];

// let newList = [];

// for (let i = 0; i < list.length; i++) {
//   newList.push(list[i].slice(4));
// }
// console.log(newList);

/**
 * 금칙어 : 콜라
 */
// function hasCola(str) {
//   if (str.indexOf("콜라") > -1) {
//     console.log("금칙어가 있습니다.");
//   } else {
//     console.log("통과");
//   }
// }
// hasCola("사이다가 짱이야!"); // -1
// hasCola("무슨소리, 콜라가 짱이야!");
// hasCola("콜라"); // 0

/**
 * 금칙어 : 콜라
 * includes
 * 문자가 있으면 true
 * 없으면 false 반환
 */
function hasCola(str) {
  if (str.includes("콜라")) {
    console.log("금칙어가 있습니다.");
  } else {
    console.log("통과");
  }
}
hasCola("사이다가 짱이야!"); // -1
hasCola("무슨소리, 콜라가 짱이야!");
hasCola("콜라"); // 0
