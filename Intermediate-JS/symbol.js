/**
 * property key : 문자형
 */
// const obj = {
//   1: "1입니다",
//   false: "거짓",
// };
// Object.keys(obj); // [ '1', 'false' ]
// // 실제 접근
// obj["1"];
// obj["false"];

/**
 * 심볼(symbol)
 * 유일한 식별자를 만들때 사용
 * const a = Symbol(); // new를 붙이지 않음
 * const b = Symbol();
 * console.log(a) //Symbol()
 * console.log(b) //Symbol()
 * a === b; // false
 * a == b; // false
 * 같아 보이지만 같지 않음
 */

/**
 * Symbol : 유일성 보장
 * 전체 코드중에 딱 한개라는 뜻
 * const id = Symbol('id'); // Symbol('id')를 통해 id라는 설명(이름?)을 붙여줄수있음
 * 설명을 붙여주면 디버깅할때 편함
 * 이 문자열은 심볼 생성에 어떠한 영향도 미치지 않음
 * 설명이 같다하더라도 서로 다름
 */
// ----------------------------------------------------------------------
/**
 * property key : 심볼형
 */
// const id = Symbol("id");
// const user = {
//   name: "Mike",
//   age: 30,
//   [id]: "myid", // [id] : computed property key
// };
// console.log(user); // { name: 'Mike', age: 30, [Symbol(id)]: 'myid' }

// const user1 = Object.keys(user);
// console.log(user1); // [ 'name', 'age' ]
// const user2 = Object.values(user);
// console.log(user2); // [ 'Mike', 30 ]
// const user3 = Object.entries(user);
// console.log(user3); // [ [ 'name', 'Mike' ], [ 'age', 30 ] ]
/**
 * 이전에 배웠던 오브젝트 메소드들은
 * key가 심볼형인 프로퍼티들은 건너뜀
 * for ... in을 써도 건너뛰게됨
 */
// ----------------------------------------------------------------------
/**
 * Symbol은 어디에 쓸수 있을까?
 * 특정 객체의 원본 데이터는 건들이지 않고
 * 속성을 추가할 수 있다
 * 다른 사람이 만들어놓은 객체에 자신만의 속성을 추가해서
 * 덮어씌우면 안되기에 심볼을 사용
 *
 * 나의 생각:
 * 다른 사람이 만든, 이미 많은곳엣 사용중인 객체를 활용하여 사용하고 싶을 때
 * 원본 객체를 건들이지 않고 심볼을 통해 자신만의 유일한 프로퍼티 키를 만들기 위해 사용
 */
// const user = {
//   name: "Mike",
//   age: 30,
// };

// const id = Symbol("id");
// user[id] = "myid";
// console.log(user); // { name: 'Mike', age: 30, [Symbol(id)]: 'myid' }
// ----------------------------------------------------------------------
/**
 * Symbol.for() 전역 심볼
 * 이름이 같더라도 모두 다른 존재임
 * 전역변수 처럼 이름이 같으면 같은 객체를 받아야 할 때 사용
 * - 하나의 심볼만 보장받을 수 있음
 * - 없으면 만들고, 있으면 가져오기 때문
 * - Symbol 함수는 매번 다른 Symbol값을 생성하지만,
 * - Symbol.for 메소드는 하나를 생성한 뒤 키를 통해 같은 Symbol을 공유
 */
// const id1 = Symbol.for("id");
// const id2 = Symbol.for("id");
// id1 === id2; // true
// // 이름을 얻고 싶다면
// Symbol.keyFor(id1); // id
// ----------------------------------------------------------------------
/**
 * 전역 심볼이 아닌 심볼의 이름을 알고싶을때
 * 전역 심볼이 아닌 심볼은 keyFor를 사용할 수없음
 * 대신 description을 사용
 */
// const id = Symbol("id 입니다.");
// id.description; // "id 입니다."
// ----------------------------------------------------------------------
/**
 * 숨겨진 Symbol key 보는 법
 */
// const id = Symbol("id");
// const user = {
//   name: "Mike",
//   age: 30,
//   [id]: "myid",
// };
// const test = Object.getOwnPropertySymbols(user);
// console.log(test); // [ Symbol(id) ]
// Reflect.ownKeys(user);
// 심볼형키를 포함한 객체의 모든 키를 보여줌
/**
 * 대부분의 라이브러리 내장 함수 등은 이런 메소드들을 사용하지 않는다
 * 그러니 걱정하지말고 유일한 프로퍼티를 추가하고 싶을때 심볼을 사용하기
 */
// ----------------------------------------------------------------------
/**
 * 사용 예시
 */
// 다른 개발자가 만들어 놓은 객체
const user = {
  name: "Mike",
  age: 30,
};

// 내가 작업
// user.showName = function () {};
const showName = Symbol("show name");
user[showName] = function () {
  console.log(this.name);
};
user[showName]();

// 사용자가 접속하면 보는 메세지
for (let key in user) {
  console.log(`His ${key} is ${user[key]}.`);
}
