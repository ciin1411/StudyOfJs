/**
 * 보충 학습 필요
 *
 * Generator
 * 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능
 * funcion옆에 *을 써서 만들고
 * 내부에 yield 키워드를 사용하여 함수의 실행을 멈춤
 *
 * iterable
 *  - Symbol.iterator 메서드가 있다
 *  - Symbol.iterator 는 iterator를 반환해야 한다
 *
 * iterator
 *  - next 메서드를 가진다
 *  - next 메서드는 value와 done 속성을 가진 객체를 반환한다
 *  - 작업이 끝나면 done은 true가 된다
 *
 * 값을 미리 만들어 두지 않음
 * 메모리 효율이 좋음
 *
 */
function* fn() {
  yield 1;
  yield 2;
  yield 3;
  return "finish";
}

const a = fn();
