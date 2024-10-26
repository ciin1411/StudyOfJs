/**
 * let
 * const
 * var
 * 비교
 */

/**
 * var는 한번 선언된 변수를 다시 선언할 수 있다
 */
// var name = "Mike";
// console.log(name); // Mike

// var name = "Jane";
// console.log(name); // Jane

/**
 * var는 선언하기 전에 사용할 수 있다
 * var로 선언한 모든 변수는 실제로 이동한건 아니지만
 * 최상위로 끌어올려진것처럼 사용할 수 있다.
 * 이것을 호이스팅(hoisting)이라고 한다.
 *
 * undefined가 출력되는 이유는 선언은 호이스팅 됐지만
 * 할당은 호이스팅 되지 않기 때문이다.
 */
// console.log(name); // undefined
// var name = "Mike";

/**
 * 같은 상황의 let
 */
// console.log(name); // ReferenceError
// let name = "Mike";

/**
 * 호이스팅
 * 스코프 내부 어디서든 변수 선언은 최상위에 선언된 것 처럼 행동
 * 위의 let은 왜 var처럼 동작하지 않고 에러를 뱉는가?
 * 이유는 Temporal Dead Zone 때문
 *
 * console.log(name); // TDZ영역
 * const name = "Mike"; 함수 선언 및 할당
 * consoel.log(name) // 사용가능
 *
 * TDZ영역에 있는 변수들은 사용할 수 없다
 * let과 const는 TDZ영향을 받아서 할당을 하기전에는 사용할 수 없다
 * 이는 코드를 예측 가능하게하고 잠재적인 버그를 줄일수 있다
 */

//----------------------------------------------------------------------

/**
 * 변수의 생성과정
 * 1. 선언 단계
 * 2. 초기화 단계
 * 3. 할당 단계
 */

/**
 * var
 * 1. 선언 및 초기화 단계 | 초기화: undefined를 할당 해주는 단계
 * 2. 할당 단계
 */

/**
 * let
 * 1. 선언 단계
 * 2. 초기화 단계
 * 3. 할당 단계
 */

/**
 * const
 * 1. 선언 + 초기화 + 할당
 * // const
 * // let name;
 * // name = "Mike";

 * // var age;
 * // age = 30;

 * // const gender;  // 선언 + 초기화 + 할당이 동시에 이루어지지않아 에러 발생
 * // gender = 'male';
 */

//----------------------------------------------------------------------

/**
 * 스코프
 */

/**
 * var
 * 함수 스코프(function-scoped)
 * 함수 내에서 선언된 변수만 그 지역변수가 되는 것
 */

/**
 * let, const
 * 블록 스코프(block-scoped)
 *
 * 모든 코드블록 내에서 선언된 변수는 코드 블록 내에서만 유효하며 외부에서는 접근할 수 없다는 의미
 * 즉 코드 블록 내에서 선언된 변수는 지역변수인 것
 * 코드블록의 종류로는
 * function
 * if
 * for
 * while
 * try-catch문 등을 의미
 */
