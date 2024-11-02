/**
 * 보충 학습 필요
 * async, await
 * async, await을 사용하면 Promise의 then메소드를 chain형식으로 사용하는 것보다 가독성이 좋아진다
 */

/**
 * async 예시
 */
// async function getName() {
//   return "Mike";
// }
// // 항상 Promise를 반환

// getName().then((name) => {
//   console.log(name);
// });

/**
 * await 예시
 * await키워드는 async안에서만 사용할수 있음
 */
// function getName(name) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(name);
//     }, 1000);
//   });
// }

// async function showName() {
//   const result = await getName("Mike");
//   console.log(result);
// }

// console.log("시작");
// showName();

/**
 * async, await 예시
 */
const f1 = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("1번 주문 완료");
    }, 1000);
  });
};

const f2 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      //   res("2번 주문 완료");
      rej(new Error("err.."));
    }, 3000);
  });
};

const f3 = (message) => {
  console.log(message);
  return new Promise((res, rej) => {
    setTimeout(() => {
      res("3번 주문 완료");
    }, 2000);
  });
};

console.log("시작");
async function order() {
  try {
    const result1 = await f1();
    const result2 = await f2(result1);
    const result3 = await f3(result2);
    console.log(result3);
  } catch (e) {
    console.log(e);
  }
  console.log("종료");
}
order();
