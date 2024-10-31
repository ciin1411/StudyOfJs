/**
 * 나머지 매개변수, 전개 구문
 * Rest parameters, Spread syntax
 */

/**
 * 인수 전달
 * function showName(name) {
 *  console.log(name)
 * }
 * showName("Mike"); // "Mike"
 * showName("Mike", "Tom") // 에러는 발생하지 않고 "Mike"만 찍힘
 * showName(); // undefined
 *
 * 자바스크립트에서 함수에 넘겨주는 인수의 개수는 제약이 없음
 * 인수의 개수를 정해놓고 함수를 만들어도 실제 호출할때 정확하게 그 개수를 맞출 필요는 없음
 *
 * 함수의 인수를 얻는 방법은 2가지
 * arguments : 나머지 매개변수가 없던시절 쓰던것, 결정적으로 화살표 함수에는 arguments가 없음
 * 나머지 매개변수 : 요즘엔 이걸 사용하는 추세
 */

/**
 * arguments
 * 함수로 넘어온 모든 인수에 접근
 * 함수 내에서 이용 가능한 지역변수
 * length / index가 있기때문에 배열이라고 생각할 수 있음
 * Array 형태의 객체
 * 배열의 내장 메서드 없음
 * (forEach, map) 사용 불가
 */
// function showName(name) {
//   console.log(arguments.length);
//   console.log(arguments[0]);
//   console.log(arguments[1]);
// }
// showName("Mike", "Tom");
// 2 받은 인수의 개수
// "Mike"
// "Tom"

/**
 * 나머지 매개변수
 */
// function showName(...name) {
//   console.log(name);
// }

// showName(); // []
// showName("Mike"); // ["Mike"]
// showName("Mike", "Tom"); // ["Mike", "Tom"]

/**
 * 실용적 예제
 * length가 있기 때문에 for문을 사용할 수 있음
 * arguments와는 다르게 배열의 메소드들도 사용할 수 있음
 */
// function add(...numbers) {
//   let result = 0;
//   numbers.forEach((num) => (result += num));
//   console.log(result);
// }
// add(1, 2, 3); // 6
// add(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55

// function add1(...numbers) {
//   let result = numbers.reduce((prev, cur) => prev + cur);
//   console.log(result);
// }

// add1(1, 2, 3); // 6
// add1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55

/**
 * 조금 더 실용적인 예제
 */
// function User(name, age, ...skill) { // 나머지 매개변수는 항상 마지막에
//   this.name = name;
//   this.age = age;
//   this.skill = skill;
// }

// const user1 = new User("Mike", 30, "html", "css");
// const user2 = new User("Tom", 20, "JS", "React");
// const user3 = new User("Jane", 10, "English");

// console.log(user1); // User { name: 'Mike', age: 30, skill: [ 'html', 'css' ] }
// console.log(user2); // User { name: 'Tom', age: 20, skill: [ 'JS', 'React' ] }
// console.log(user3); // User { name: 'Jane', age: 10, skill: [ 'English' ] }

/**
 * 전개 구문(Spread syntax) : 배열
 */
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// let result = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]
// let result2 = [0, ...arr1, ...arr2, 7, 8, 9]; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * 전개 구문(Spread syntax) : 객체
 */
// let user = { name: "Mike" };
// let mike = { ...user, age: 30 };

// console.log(mike); // { name: 'Mike', age: 30 }

/**
 * 전개 구문(Spread syntax) : 복제
 */
// let arr = [1, 2, 3];
// let arr2 = [...arr]; // arr2 = [1, 2, 3]

// let user = { name: "Mike", age: 30 };
// let user2 = { ...user }; // user2 = { name: 'Mike', age: 30 }

// user2.name = "Tom";

// console.log(user.name); // Mike
// console.log(user2.name); // Tom

/**
 * 전개구문 예제
 * arr1 을 [4,5,6,1,2,3] 으로
 */
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];

// arr1 = [...arr2, ...arr1]; // arr1 = [4,5,6,1,2,3]

/**
 * 전개구문 예제 : 객체
 */
let user = { name: "Mike" };
let info = { age: 30 };
let fe = ["JS", "English"];
let lang = ["Korean", "English"];

user = { ...user, ...info, skills: [...fe, ...lang] };
console.log(user);
