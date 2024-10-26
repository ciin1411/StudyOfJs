/**
 * 생성자 함수
 */

// 객체 리터럴
// let user = {
//   name: "Mike",
//   age: 30,
// };

/**
 * 생성자 함수 코드
 * 보통 첫 글자는 대문자로 쓰는게 관례
 * new 연산자를 이용해 호출
 */
// function User(name, age) {
//   this.name = name;
//   this.age = age;
// }

// let user1 = new User("Mike", 30);
// let user2 = new User("Jane", 22);
// let user3 = new User("Tom", 17);
/**
 * 동작 원리
 * new 함수명();을 실행하면
 * 함수 내에서 this = {}라는 빈 객체를 만들고 this에 할당
 * 함수 본문을 실행하면서 this에 프로퍼티들을 추가
 * 마지막으로 return this;를 통해 반환
 * 실제로 this={}, return this는 코드상에 존재하지 않지만
 * new를 붙여 통해 실행하는 순간 저 방식으로 알고리즘이 동작
 *
 * 이렇게 객체를 만들면 일일이 객체 리터럴을 쓰는것보다
 * 훨씬 빠르고 일관성 있게 객체를 만들수 있다
 */
//----------------------------------------------------------
/**
 * 생성자 함수 메소드 추가
 */
// function User(name, age) {
//   this.name = name;
//   this.age = age;
//   this.sayName = function () {
//     console.log(this.name);
//   };
// }

// let user5 = new User("Han", 40);
// user5.sayName();

/**
 * 예시 코드
 */
function Item(title, price) {
  // this = {};  //new를 사용했을때 실행되는 보이지 않는 코드
  this.title = title;
  this.price = price;
  this.showPrice = function () {
    console.log(`가격은 ${price}원 입니다.`);
  };

  // return this; //new를 사용했을때 실행되는 보이지 않는 코드
}

const item1 = new Item("인형", 3000);
const item2 = new Item("가방", 6000);
const item3 = new Item("지갑", 9000);

console.log(item1, item2, item3);

item3.showPrice();

/**
 * 결론
 * 생성자 함수는 new를 꼭 붙여줄것
 * 생성자는 앞글자 대문자가 관례
 */
