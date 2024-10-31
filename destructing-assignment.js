/**
 * 구조 분해 할당 (Destructing assignment)
 * 구조 분해 할당 구문은 배열이나 객체의 속성을 분해해서
 * 그 값을 변수에 담을 수 있게 하는 표현식
 */
// let [x, y] = [1, 2];
// console.log(x); // 1
// console.log(y); // 2

/**
 * 예제
 */
// let users = ["Mike", "Tom", "Jane"];
// let [user1, user2, user3] = users;

// console.log(user1); // "Mike"
// console.log(user2); // "Tom"
// console.log(user3); // "Jane"

/**
 * 배열 구조 분해 예제
 * split활용한 구조분해
 */
// let str = "Mike-Tom-Jane";
// let [user1, user2, user3] = str.split("-");

// console.log(user1); // "Mike"
// console.log(user2); // "Tom"
// console.log(user3); // "Jane"

/**
 * 배열 구조 분해 : 기본값
 */
// let [a, b, c] = [1, 2];
// a = 1, b = 2, c = undefined

// let [a = 3, b = 4, c = 5] = [1, 2];
// a = 1, b = 2, c = 5

/**
 * 배열 구조 분해 : 일부 반환값 무시
 */
// let [user1, , user2] = ["Mike", "Tom", "Jane", "Tony"];
// console.log(user1); // "Mike"
// console.log(user2); // "Jane"
// Tom 생략

/**
 * 배열 구조 분해 : 바꿔치기
 */
// let a = 1;
// let b = 2;
// a = b; // 이렇게하면 안됨 둘다 2가 될뿐임

// let c = a; // a값을 임시로 저장하기 위한 임시 변수
// a = b;
// b = c; // 완료
// 이런 방법은 너무 복잡함
// 구조 분해 할당을 하게 되면
// [a, b] = [b, a]; // 이렇게 끝냄

/**
 * 객체 구조 분헤
 */
// let user = { name: "Mike", age: 30 };
// let { name, age } = user;
// let { age, name } = user; // 순서를 신경쓰지 않아도됨

// console.log(name); // "Mike"
// console.log(age); // 30

/**
 * 객체 구조 분해 : 새로운 변수 이름으로 할당
 */
// let user = { name: "Mike", age: 30 };
// let { name: userName, age: userAge } = user; // 변수 이름을 바꿀수도 있음
// console.log(userName); // "Mike"
// console.log(userAge); // 30

/**
 * 객체 구조 분해 : 기본값
 */
let user = { name: "Mike", age: 30 };
// let { name, age, gender } = user; // gender는 undefined됨

let { name, age, gender = "male" } = user; // 기본값을 설정
