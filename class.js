/**
 * 클래스
 */

/**
 * 지금까지 비슷한 객체를 만들기 위해 생성자 함수를 사용했음
 */
// const User = function (name, age) {
//   this.name = name;
//   this.age = age;
//   this.showName = function () {
//     console.log(this.name);
//   };
// };

// const mike = new User("Mike", 30);

/**
 * 클래스
 * ES6에 추가된 스펙
 */
class User {
  constructor(name, age) {
    // constructor()는 객체를 만들어주는 생성자 메서드
    this.name = name;
    this.age = age;
  }

  showName() {
    console.log(this.name);
  }
  // showName처럼 class내에 정의한 메소드는 User의 prototype에 정의
}

const tom = new User("Tom", 19);
// 클래스타입은 for...in문에서 prototype이 제외됨

/**
 * class 상속
 * extends
 */
// class Car {
//   constructor(color, wheels) {
//     this.color = color;
//     this.wheels = 4;
//   }
//   drive() {
//     console.log("drive...");
//   }
//   stop() {
//     console.log("STOP!");
//   }
// }

// class Bmw extends Car {
//   park() {
//     console.log("PARK");
//   }
// }
// const z4 = new Bmw("blue");

/**
 * 메소드 오버라이딩
 */
// class Car {
//   constructor(color, wheels) {
//     this.color = color;
//     this.wheels = 4;
//   }
//   drive() {
//     console.log("drive...");
//   }
//   stop() {
//     console.log("STOP!");
//   }
// }

// class Bmw extends Car {
//   park() {
//     console.log("PARK");
//   }
//   stop() {
//     super.stop(); // Car의 stop() 메소드를 호출
//     console.log("OFF");
//   }
// }
// const z4 = new Bmw("blue");

/**
 * 생성자 오버라이딩
 */
class Car {
  constructor(color, wheels) {
    this.color = color;
    this.wheels = 4;
  }
  drive() {
    console.log("drive...");
  }
  stop() {
    console.log("STOP!");
  }
}

class Bmw extends Car {
  constructor() {
    this.navigation = 1;
  }
  park() {
    console.log("PARK");
  }
}
const z4 = new Bmw("blue");
