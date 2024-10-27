/**
 * object-method & computed-property
 */

/**
 * computed property
 */
// let a = "age";
// const user = {
//   name: "Mike",
//   [a]: 30, // age : 30 // 이걸 computed property라고 부름 (계산된 프로퍼티)
// };

// const user = {
//   [1 + 4]: 5,
//   ["안녕" + "하세요"]: "Hello",
// };
// console.log(user);
//{ '5': 5, '안녕하세요': 'Hello' }

/**
 * 객체 메소드
 * Object.assign()
 * Object.keys()
 * Object.values()
 * Object.entries()
 * Object.fromEntries()
 */

/**
 * Object.assign() : 객체 복제
 */
// const user = {
//   name: "Mike",
//   age: 30,
// };
// const cloneUser = user;
/**
 * 위 코드로는 복제가 안됨
 * 왜냐하면 user변수에는 객체 자체가 들어가 있는게 아니라
 * 객체가 저장되어있는 메모리 주소인 객체에 대한 참조값이 저장되는것이기 때문
 * 그래서 cloneUser는 참고값만 저장이 됨
 * 이렇게 복제하면 cloneUser의 name값을 바꾸게 되면 user의 name값도 바뀌게 됨
 */

// const newUser = Object.assign({}, user); // 정성적인 복제
// newUser.name = "Tom"; // 이름을 바꿔도 user는 변하지 않음 newUser에 복사된 객체만 바뀜
// console.log(user.name); // "Mike"
// newUser != user // 이제는 다른 객체임
/**
 * {}빈 객체는 초기값, 두번째 매개변수부터 들어오는 객체들이 초기값에 병합됨
 * {} + { name : 'Mike, age : 30 } =
 * {
 *      name : 'Mike',
 *      age : 30,
 * }
 *
 */

// Object.assign({ gender: "male" }, user);
/**
 * gender : 'male',
 * name : 'Mike',
 * age : 30,
 */

// Object.assign({ name: "Tom" }, user);
/**
 * 병합을 하는데 key가 같다면?
 * name : 'Mike',
 * age : 30,
 * 본래의 값이 덮어 씌워짐
 */

// const user = {
//   name: "Mike",
// };
// const info1 = {
//   age: 30,
// };
// const info2 = {
//   gender: "male",
// };

// Object.assign(user, info1, info2)
// user + info1 + info2가됨
// ------------------------------------------------------------------
/**
 * Object.keys() : key 배열 반환
 * Object.values() : value 배열 반환
 */
// const user = {
//   name: "Mike",
//   age: 30,
//   gender: "male",
// };
// Object.keys(user);
/**
 * 객체 프로퍼티의 key를 배열로 반환
 * user 객체를 Object.keys(user) 인수로 전달하면
 * ["name", "age", "gender"]로 반환됨
 */

// Object.values(user);
/**
 * 같은 방법으로 keys를 values로 바꾸면
 * value를 배열로 반환
 * ["Mike", 30, "male"]
 */

// ------------------------------------------------------------------
/**
 * Object.entries() : 키/값 배열 반환
 */
// const user = {
//   name: "Mike",
//   age: 30,
//   gender: "male",
// };
// Object.entries(user);
/**
 * 키와 값 쌍으로 묶여있는 배열이 만들어짐
 * [
 *   ["name", "Mike"],
 *   ["age", 30],
 *   ["gender", "male"],
 * ];
 */
// ------------------------------------------------------------------
/**
 * Object.formEntries() : 키/값 배열을 객체로
 */
// const arr = [
//   ["name", "Mike"],
//   ["age", 30],
//   ["gender", "male"],
// ];
// Object.fromEntries(arr);
/**
 * 배열을 객체로 만들어줌
 * {
 *   name: "Mike",
 *   age : 30,
 *   gender : "male",
 * }
 */
// =================================================================
/**
 * computed property 사용 예시
 */
// let n = "name";
// let a = "age";

// const user = {
//   [n]: "Mike",
//   [a]: 30,
//   [1 + 4]: 5,
// };

// console.log(user);
// { '5': 5, name: 'Mike', age: 30 }

/**
 * 함수 활용
 */
// function makeObj(key, val) {
//   return {
//     [key]: val,
//   };
// }
// const obj = makeObj("나이", 33);
// console.log(obj);
/**
 * 어떤게 키가될지 모르는 객체를 만들때 유용
 */
// ------------------------------------------------------------------
const user = {
  name: "Mike",
  age: 30,
};
/**
 * 객체 복사
 * user2는 user와는 다른 객체임
 * {}초기값은 잊지 않기, 까먹기 쉬울듯
 */
const user2 = Object.assign({}, user);
// console.log(user2);
// { name: 'Mike', age: 30 }

/**
 * 객체 key 배열로 뽑아먹기
 */
const user3 = Object.keys(user);
// console.log(user3);
// [ 'name', 'age' ]

/**
 * 객체 value 배열로 뽑아먹기
 */
const user4 = Object.values(user);
// console.log(user4);
// [ 'Mike', 30 ]

/**
 * 키 값 쌍으로 배열로 뽑아먹기
 */
const user5 = Object.entries(user);
// console.log(user5);
// [
//   ["name", "Mike"],
//   ["age", 30],
// ];

/**
 * 배열 -> 객체로 만들기
 */
const user6 = Object.fromEntries(user5);
console.log(user6);
