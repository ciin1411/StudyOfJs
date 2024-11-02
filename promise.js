/**
 * promise
 */
// const pr = new Promise((resolve, reject) => {
//   //code
// });
/**
 * new Promise로 promise 생성
 * 함수로 전달받는데 인수는 resolve, reject
 * resolve : 성공한 경우
 * reject : 실패한 경우 실행되는 함수
 * 어떤일이 완료된 이후 실행되는 함수를 callback함수라고 함
 */

/**
 * new Promise 생성자가 반환하는 promise 객체는
 * state와 result를 프로퍼티를 갖는다
 * state는 초기 "pending"(대기)였다가 resolve가 호출되면 "fulfilled"(이행됨 ), reject가 호출되면 "rejected"(거부됨)가 됨
 */

/**
 * 코드 예시
 */
const pr = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("OK");
  }, 3000);
});

pr.then(
  function (result) {},
  function (err) {}
);

/**
 * 위 코드를 then이외에 사용할 수 있는것이 catch와 finally
 * catch는 reject인 경우에만 실행
 * finally는 resolve던 reject이던 무조건 실행
 */
pr.then(function (result) {})
  .catch(function (err) {})
  .finally(function () {
    console.log("--- 주문 끝 ---");
  });

/**
 * primise.all
 * 동시에 처리하고싶고 하나라도 실패하면 모두가 실패하게 처리하고 싶을때 all()를 사용
 */
