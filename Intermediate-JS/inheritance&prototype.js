/**
 * 상속과 프로토타입
 * 생성자 프로토타입은 한번 더 공부 필요
 */

/**
 * 프로토타입을 이해하기 위해 상속의 개념을 이용한 예제
 * 아래의 객체들의 중복된 부분을 __proto로 해결할거임
 */
// const bmw = {
//     color: "red",
//     wheels: 4,
//     navigation: 1,
//     drive() {
//       console.log("drive...");
//     },
//   };

//   const benz = {
//     color: "black",
//     wheels: 4,
//     drive() {
//       console.log("drive...");
//     },
//   };

//   const audi = {
//     color: "blue",
//     wheels: 4,
//     drive() {
//       console.log("drive...");
//     },
//   };
//----------------------------------------------------------------
// const car = {
//   wheels: 4,
//   drive() {
//     console.log("drive...");
//   },
// };

// const bmw = {
//   color: "red",
//   navigation: 1,
// };

// const benz = {
//   color: "black",
// };

// const audi = {
//   color: "blue",
// };

// car가 bmw, benz, audi의 prototype이 되는것, 다르게 말하면 bmw, benz, audi는 car의 상속을 받는것
// bmw.__proto__ = car;
// benz.__proto__ = car;
// audi.__proto__ = car;

// const x5 = {
//   color: "white",
//   name: "x5",
// };

// x5.__proto__ = bmw; // 상속의 상속? prototype chain

/**
 * 생성자 함수 사용
 */
// const Bmw = function (color) {
//   this.color = color;
//   this.wheels = 4;
//   this.drive = function () {
//     console.log("drive...");
//   };
// };

//----------------------------------------------------------------
// const car = {
//   wheels: 4,
//   drive() {
//     console.log("drive...");
//   },
// };

const Bmw = function (color) {
  this.color = color;
};
Bmw.prototype.wheels = 4;
Bmw.prototype.drive = function () {
  console.log("drive...");
};
Bmw.prototype.navigation = 1;
Bmw.prototype.stop = function () {
  console.log("STOP!");
};

const x5 = new Bmw("red");
const z4 = new Bmw("blue");

// x5.__proto__ = car;
// z4.__proto__ = car;
