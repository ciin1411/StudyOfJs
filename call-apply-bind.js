/**
 * call, apply, bind
 * 함수 호출 방식과 관계없이 this를 지정할 수 있음
 * 일반적인 방법외에도 함수를 어디서 어떻게 호출했느냐에 관계없이
 * this가 무엇인지 지정할 수 있음
 */

/**
 * call()
 * call 메서드는 모든 함수에서 사용할 수 있으며, this를 특정값으로 지정할 수 있습니다
 */
// const mike = {
//   name: "Mike",
// };

// const tom = {
//   name: "Tom",
// };

// function showThisName() {
//   console.log(this.name); // this는 window.name임 = ""
// }

// showThisName(); // undefined
// showThisName.call(mike);
// showThisName.call(tom);

// function update(birthYear, occupation) {
//   this.birthYear = birthYear;
//   this.occupation = occupation;
// }

// update.call(mike, 1999, "singer"); // this로 사용할 mike 전달
// console.log(mike); // { name: "Mike", birthYear: 1999, occupation: "singer" }

// update.call(tom, 2002, "teacher");
// console.log(tom); // { name: "Tom", birthYear: 2002, occupation: "teacher" }

// console.log(
//   "-------------------------------------------------------------------------------"
// );
/**
 * apply
 * aplly는 함수 배개변수를 처리하는 방법을 제외하면 call과 완전히 같다
 * call은 일반적인 함수와 마찬가지로 매개변수를 직접 받지만, apply는 매개변수를 배열로 받습니다.
 * apply는 매개변수를 배열로 받음
 */

// update.apply(mike, [1999, "singer"]); // this로 사용할 mike 전달
// console.log(mike); // { name: "Mike", birthYear: 1999, occupation: "singer" }

// update.apply(tom, [2002, "teacher"]);
// console.log(tom); // { name: "Tom", birthYear: 2002, occupation: "teacher" }

// console.log(
//   "-------------------------------------------------------------------------------"
// );
// const nums = [3, 10, 1, 6, 4];
// // const minNum = Math.min(...nums); // []배열로 감싸게 되면 NaN가 나옴 spread연산자로 해결
// // const maxNum = Math.max(...nums);

// // 이제 apply 사용
// // 두번째 매개변수로 배열을 전달하면 그 요소들을 차례대로 인수로 사용함

// const minNum = Math.min.apply(null, nums);
// // = Math.min.apply(null, [3, 10, 1, 6, 4])
// const maxNum = Math.max.call(null, nums);
// // = Math.max.apply(null, 3, 10, 1, 6, 4)
// console.log(minNum); // 1
// console.log(maxNum); // 10

// console.log(
//   "-------------------------------------------------------------------------------"
// );

/**
 * bind
 * 함수의 this값을 영구히 바꿀 수 있음
 */
// const mike = {
//   name: "Mike",
// };

// function update(birthYear, occupation) {
//   this.birthYear = birthYear;
//   this.occupation = occupation;
// }

// const updateMike = update.bind(mike);

// updateMike(1980, "police");
// console.log(mike); // { name: "Mike", birthYear: 1980, occupation: "police" }

/**
 * 실제 사용 예시
 */
// const user = {
//   name: "Mike",
//   showName: function () {
//     console.log(`hello, ${this.name}`);
//   },
// };

// user.showName(); // hello, Mike

// let fn = user.showName;
// fn.call(user); // hello, Mike
// fn.apply(user); // hello, Mike

// let boundFn = fn.bind(user);
// boundFn(); // hello, Mike
