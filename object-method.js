/**
 * method 객체 프로퍼티로 할당 된 함수
 */
// const superman = {
//   name: "clark",
//   age: 33,
//   fly: function () {
//     console.log("날아간다~");
//   },
// };
// superman.fly();
// fly 함수가 superman객체의 메소드임

// const superman = {
//   name: "clark",
//   age: 33,
//   fly() {
//     console.log("날아간다~");
//   },
// };
// superman.fly();
//이런식으로 function 키워드를 없애서 줄이기 가능

/**
 * 메소드를 만들때 내부 프로퍼티를 쓰고 싶을때
 */
// const user = {
//   name: "Mike",
//   sayHello() {
//     console.log(`Hello, I'm ${this.name}`);
//   },
// };
// user.sayHello();
// 위 .앞의 user가 메소드 내부의 30번 줄의 this가 됨

/**
 * 화살표 함수는 일반 함수와는 달리 자신만의 this를 가지지 않음
 * 화살표 함수 내부에서 this를 사용하면, 그 this는 외부에서 값을 가져 옴
 */
// let boy = {
//   name: "Mike",
//   sayHello: () => {
//     console.log(this); // this는 전역겍체를 가리킴
//         브라우저 환경 : window, Node.js : global
//   }
// };

// boy.sayHello();

/**
 * method
 * 객체에 메소드를 작성할 때는 화살표 함수를
 * 작성하지 않는게 좋다
 * 화살표 함수로 작성하게되면 지역객체가 아닌 전역객체를 찾기 때문
 */
let boy = {
  name: "Mike",
  sayThis: function () {
    console.log(this);
  },
};

boy.sayThis();
