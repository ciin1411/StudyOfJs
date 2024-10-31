/**
 * arr.splice(n, m) : 특정 요소 지움
 * n : 시작
 * m : 개수
 */
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);

// console.log(arr); // [1, 4, 5]

/**
 * arr.splice(n, m, x) : 특정 요소 지우고 추가
 */
// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 3, 100, 200);
// console.log(arr); // [ 1, 100, 200, 5 ]

// let arr2 = ["나는", "철수", "입니다"];
// arr2.splice(1, 0, "대한민국", "소방관");
// console.log(arr2); // [ '나는', '대한민국', '소방관', '철수', '입니다' ]

/**
 * arr.splice() : 삭제된 요쇼의 반환값이
 */
// let arr = [1, 2, 3, 4, 5];
// let result = arr.splice(1, 2);

// console.log(arr); // [ 1, 4, 5 ]
// console.log(result); // [ 2, 3 ]

/**
 * arr.slice(n, m) : n부터 m까지 반환 이때 m은 포함하지 않음
 */
// let arr = [1, 2, 3, 4, 5];
// arr.slice(1, 4); // [2, 3, 4]

// let arr2 = arr.slice(); // 괄호에 아무것도 안넣으면 그냥 배열자체가 복사됨
// console.log(arr2); // [1, 2, 3, 4, 5]

/**
 * arr.concat(arr2, arr3 ...) : 합쳐서 새배열 반환
 */

// let arr = [1, 2];
// let arr2 = arr.concat([3, 4]);
// console.log(arr2); // [ 1, 2, 3, 4 ]

// let arr3 = arr.concat([3, 4], [5, 6]);
// console.log(arr3); // [ 1, 2, 3, 4, 5, 6 ]

// let arr4 = arr.concat([3, 4], 5, 6);
// console.log(arr4); // [ 1, 2, 3, 4, 5, 6 ]

/**
 * arr.forEach(fn) : 배열 반복
 * 지금까지 배열 반복문은 for문이나 for...of문을 사용
 * forEach도 가능
 */
// let arr = ["Mike", "Tom", "Jane"];
// arr.forEach((name, index) => {
//   console.log(`${index + 1}. ${name}`);
// });

/**
 * arr.indexOf / arr.lastIndexOf
 */
// let arr = [1, 2, 3, 4, 5, 1, 2, 3];
// arr.indexOf(3); // 2
// arr.indexOf(3, 3); // 7, 두번째 인수는 시작 위치를 의미함
// arr.lastIndexOf(3); // 7, 끝에서부터 찾음

/**
 * arr.includes() : 포함하는지 확인
 */
// let arr = [1, 2, 3];
// arr.includes(2); // true
// arr.includes(8); // false

/**
 * arr.find(fn) / arr.findIndex(fn)
 * indexOf와 찾는다는 의미는 동일하지만
 * 복잡한 연산이 가능하도록 함수를 전달할 수 있다.
 * 주의할점은 첫번째 true 값만 반환하고 끝
 * 만약 없으면 undefined를 반환
 */
// let arr = [1, 2, 3, 4, 5];
// const result = arr.find((item) => {
//   return item % 2 === 0;
// });
// console.log(result);

// 객체로 되어있는 배열은 indexOf로 찾기힘드니 find로 찾으면됨
// let userList = [
//   { name: "Mike", age: 30 },
//   { name: "Jane", age: 27 },
//   { name: "Tom", age: 10 },
// ];

// const result = userList.find((user) => {
//   if (user.age < 19) {
//     return true;
//   }
//   return false;
// });

// console.log(result); // { name: 'Tom', age: 10 }

// findIndex 조건에 맞는 index를 찾아냄
// let userList = [
//   { name: "Mike", age: 30 },
//   { name: "Jane", age: 27 },
//   { name: "Tom", age: 10 },
// ];

// const result = userList.findIndex((user) => {
//   if (user.age < 19) {
//     return true;
//   }
//   return false;
// });

// console.log(result); // 2

/**
 * arr.filter(fn)
 * 만족하는 모든 요소를 배열로 변환
 */
// let arr = [1, 2, 3, 4, 5, 6];
// const result = arr.filter((item) => {
//   return item % 2 === 0;
// });
// console.log(result); // [ 2, 4, 6 ]

/**
 * arr.reverse() : 역순으로 재정렬
 */
// let arr = [1, 2, 3, 4, 5];
// arr.reverse(); // [5, 4, 3, 2, 1]

// ------------------------------------------------------------------

/**
 * arr.map(fn)
 * 함수를 받아 특정 기능을 시행하고 새로운 배열을 반환
 */
// let userList = [
//   { name: "Mike", age: 30 },
//   { name: "Jane", age: 27 },
//   { name: "Tom", age: 10 },
// ];

// let newUserList = userList.map((user, index) => {
//   return Object.assign({}, user, {
//     id: index + 1,
//     isAdult: user.age > 19,
//   });
// });

// console.log(newUserList);
// console.log(userList);

// [
//     { name: 'Mike', age: 30, isAdult: true },
//     { name: 'Jane', age: 27, isAdult: true },
//     { name: 'Tom', age: 10, isAdult: false }
// ]

// ------------------------------------------------------------------

/**
 * join : 배열을 합쳐서 문자열을 만들 때 사용
 */

// let arr = ["안녕", "나는", "철수야"];
// let result = arr.join(); // 인수는 구분자, 인수로 전달하는게 아무것도 없으면 쉼표(,)로 정해짐

// console.log(result); // 안녕,나는,철수야

/**
 * split : 문자열을 배열로 만듬
 */
// const users = "Mike,Jane,Tom,Tony";
// const result = users.split(","); // 쉼표 기준, ""이걸로하면 문자하나하나 나눔

// console.log(result); // [ 'Mike', 'Jane', 'Tom', 'Tony' ]

/**
 * Array.isArray()
 */
// let user = {
//   name: "Mike",
//   age: 30,
// };

// let userList = ["Mike", "Tom", "Jane"];

// console.log(typeof user); // object
// console.log(typeof userList); // object
// console.log(Array.isArray(user)); // false
// console.log(Array.isArray(userList)); // true

//-----------------------------------------------------------------------------

/**
 * arr.sort
 * 배열 재정렬
 * 배열 자체가 변경되니 주의
 * 인수로 정렬 로직을 담은 함수를 받음
 */
// let arr = [1, 5, 4, 2, 3];
// let arr2 = ["a", "c", "d", "e", "b"];
// let arr3 = [27, 8, 5, 13];
// arr.sort();
// arr2.sort();

// fn = (a, b) => {
//   return a - b;
// };

// arr3.sort(fn);
// console.log(arr); // [ 1, 2, 3, 4, 5 ]
// console.log(arr2); // [ 'a', 'b', 'c', 'd', 'e' ]
// console.log(arr3); // [ 13, 27, 5, 8 ], 정렬할때 요소를 문자열로 취급해서 앞자리만 봐서 뒤죽박죽
// // 함수를 사용하여 정렬 [ 5, 8, 13, 27 ]

/**
 * arr.reduce()
 * 인수로 함수를 받음
 * (누적 계산값, 현재값) => { return 계산값 };
 */
// 배열의 모든수 합치기
// let arr = [1, 2, 3, 4, 5];

// const result = arr.reduce(
//   (prev, cur) => {
//     return prev + cur;
//   },
//   0 // 초기값 0
// );
// console.log(result);

let userList = [
  { name: "Mike", age: 30 },
  { name: "Tom", age: 10 },
  { name: "Jane", age: 27 },
  { name: "Sue", age: 26 },
  { name: "Harry", age: 42 },
  { name: "Steve", age: 60 },
];

let result = userList.reduce((prev, cur) => {
  if (cur.age > 19) {
    prev.push(cur.name);
  }
  return prev;
}, []);

console.log(result); // [ 'Mike', 'Jane', 'Sue', 'Harry', 'Steve' ]

// map, filter, reduce, forEach중 어떤걸 어떤 상황에 쓸지는 실력의 차이임
