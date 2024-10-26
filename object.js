/**
 * Superman
 *
 * name : clark
 * age : 33
 *
 * 위 정보를 객체로 만들면
 * const superman = {
 *  name: 'clark',
 *  age: 33,
 * }
 *
 * 여기서 name과 같은 앞부분은 키(key)
 * 내용인 'clark'는 값(value)으로 구성된 프로퍼티가 들어감
 *
 */

// const superman = {
//   name: "clark",
//   age: 33,
// };

/**
 * 위 객체의 접근 방법
 */
// superman.name // 'clark'
// superman['age'] // 33

/**
 * 객체에 추가 하는 방법
 */
// superman.gender = "male";
// superman["hairColor"] = "black";

/**
 * 객체에서 삭제 방법
 */
// delete superman.hairColor;

/**
 *  객체 단축 프로퍼티
 */
// const name = "clark";
// const age = 33;

// const superman = {
//   name: name,
//   age: age,
//   gender: "male",
// };

// 위의 name과 age를 밑에처럼 가능

// const superman = {
//   name, // name : name
//   age, // age : age
//   gender: "male",
// };

/**
 * 객체 프로퍼티 존재 여부 확인
 */
// const superman = {
//   name: "clark",
//   age: 33,
// };

// superman.birthDay; // undefined
// "birthDay" in superman; // false
// "age" in superman; // true

/**
 * 코드로 배웠던 내용 정리
 */
// const superman = {
//   name: "clark",
//   age: 30,
// };
// superman.hairColor = "black";
// superman["hobby"] = "football";
// delete superman.hobby;

// console.log(superman);

/**
 * 이름과 나이를 받아서 객체로 반환하는 함수
 */

// let makeObject = (name, age) => {
//   return {
//     name,
//     age,
//     hobby: "game",
//   };
// };

// const Mike = makeObject("Mike", 30);
// console.log(Mike);

// console.log("age" in Mike);
// console.log("birthday" in Mike);

/**
 * 객체 in
 */
// let isAdult = (user) => {
//   if (
//     !("age" in user) || // user에 age가 없거나 ( 이부분 이해 해야함 )
//     user.age < 20
//   ) {
//     // 20살 미만이거나
//     return false;
//   }
//   return true;
// };

// const Mike = {
//   name: "Mike",
//   age: 30,
// };

// const Jane = {
//   name: "Jane",
// };

// console.log(isAdult(Mike));
// console.log(isAdult(Jane));

/**
 * 객체 for ... in
 */
// const Mike = {
//   name: "Mike",
//   age: 30,
// };

// for (x in Mike) {
//   console.log(x); // key값
//   console.log(Mike[x]); // value값
// }
