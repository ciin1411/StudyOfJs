/**
 * 숫자, 수학 메소드
 */

/**
 * toString()
 * 10진수 -> 2진수/16진수
 */
// let num = 10;
// num.toString(); // "10"
// num.toString(2); // "1010" 괄호의 숫자에맞는 진수로 바꿔줌

// let num2 = 255;
// num2.toString(16); // "ff"

/**
 * Math.ceil() : 올림
 * Math.floor() : 내림
 * Math.round() : 반올림
 */
// let num1 = 5.1;
// let num2 = 5.7;

// Math.ceil(num1); // 6
// Math.ceil(num2); // 6

// Math.floor(num1); // 5
// Math.floor(num2); // 5

// Math.round(num1); // 5
// Math.round(num2); // 6

/**
 * 소수점 자릿수 표현
 */
// let userRate = 30.1234;
// //요구사함 : 소수점 둘째자리 까지 표현 (셋째 자리에서 반올림)
// Math.round(userRate * 100) / 100; // "30.12"

// //toFixed()
// userRate.toFixed(2); // "30.12" 인수만큼 표현함
// userRate.toFixed(0); // "30"
// userRate.toFixed(6); // "30.123400"
/**
 * 이 경우 문자열 반환을 함
 * Number을 이용해 숫자로 반환 후 사용
 */
// let userRate = 30.1234;
// userRate.toFixed(2); // "30.12" 인수만큼 표현함
// Number(userRate.toFixed(2)); // 30.12

/**
 * isNaN()
 * NaN인지 아닌지 판단해줌
 * isNaN이 유일함
 * 그냥 NaN은 판별이 안됨
 */
// let x = Number("x"); // NaN
// x == NaN; // false
// x === NaN; // false
// NaN == NaN; // false
// isNaN(x); // true
// isNaN(3); // false

/**
 * parseInt()
 * 문자열을 숫자로 바꿔줌
 * Number는 NaN을 반환하지만
 * parseInt()는 읽을 수 있는 부분까지는 읽고 문자를 만나면 숫자를 반환함
 * 숫자로 시작하지 않으면 NaN을 반환
 */
// let margin = "10px";
// parseInt(margin); // 10
// Number(margin); // NaN

// let redColor = "f3";
// parseInt(redColor); // NaN
// // parseInt()에 두번째 인수를 지정해서 받아올 수 있음
// parseInt(redColor, 16); // 243, 첫번째 인수를 16진수로 하여 해당값을 10진수로 받아옴
// parseInt("11", 2); // 3, 문자열 11을 숫자로 바꾸고 2진수의 숫자를 십진수로 바꿔올 수 있음

/**
 * parseFloat()
 * parseInt()와 동일하게 동작
 * parseFloat()은 부동소수점을 반환
 */
// let padding = "18.5%";
// parseInt(padding); // 18
// parseFloat(padding); // 18.5

/**
 * Math.random()
 * 0 ~ 1 사이 무작위 숫자 생성
 */
// Math.random(); // 0.345134613
// Math.random(); // 0.2134512476
// Math.random(); // 0.23462312

// 1 ~ 100 사이 임의의 숫자를 뽑고 싶다면?
Math.floor(Math.random() * 5) + 1;
/**
 * 1. Math.random() : 0.6789
 * 2. * 100 : 67.89
 * 3. Math.floor : 67
 * 4. + 1 : 68
 * 1번 : 랜덤값을 뽑음
 * 2번 : 우리가 뽑고싶은 숫자의 최댓값
 * 3번 : 소수점 버리기
 * 4번 : 0.00~이 나올 수 있기에 우리가 뽑고싶은 숫자의 최소값을 더해준다
 */

/**
 * Math.max() / Math.min()
 */
Math.max(1, 4, -1, 5, 10, 9, 5.54); // 10
Math.min(1, 4, -1, 5, 10, 9, 5.54); // -1

/**
 * Math.abs() : 절대값
 * abs = absolute약자
 */
Math.abs(-1); // 1

/**
 * Math.pow(n,m) : 제곱
 * n의 m승 값
 */
Math.pow(2, 10); // 1024

/**
 * Math.sqrt() : 제곱근
 * square root 약자
 */
Math.sqrt(16); // 4
