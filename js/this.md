# this

## this란?

- this는 arguments와 같이 함수가 호출될 때 자동으로 넘겨받는 인자값이다.
- **Java의 this와 다르다!!**
- javascript의 경우 함수 호출 방식에 따라 this에 바인딩되는 객체가 달라진다.

## 일반 함수와 화살표 함수 this

- 일반 함수는 할당 당시 객체의 메소드로 할당됐다면 객체로 this가 된다.
- 일반 함수를 내부 함수로 선언했다면, this는 전역으로 바뀐다.
- 화살표 함수는 선언된 부분데 따라 this가 바뀐다.

```js
const funcObj = {
  name: "funcObj",
  func: function () {
    console.log("func", this.name);
    const funcArrow = () => {
      console.log("funcArrow", this.name);
    };
    function funcFunc() {
      console.log("funcFunc", this.name);
    }
    funcArrow();
    funcFunc();
  },
  arrow: () => {
    console.log("arrow", this.name);
    function arrowFunc() {
      console.log("arrowFucn", this.name);
    }
    const arrowArrow = () => {
      console.log("arrowArrow", this.name);
    };
    arrowArrow();
  },
};

const obj = {
  name: "obj",
  func: funcObj.func,
  arrow: funcObj.arrow,
};

this.name = "window";

funcObj.func();
funcObj.arrow();
obj.func();
obj.arrow();
```

## this 바인딩 코드로 간단히 확인하는 법

```js
foo(); // this === window;

obj.foo(); // this === obj;
```

- this가 전역 객체가 아닌 경우는 함수 호출식 앞에 객체가 붙는다.

## this를 바꾸는 방법

- 객체 메소드, bind/call/apply, new를 사용하면 this를 바뀐다.

```js
const foo = new func();
func.apply(thisArg, [argsArray]);
func.call(thisArg, argsArray);
func.bind(thisArg)(argsArray);

// thisArg: 함수 내부의 this에 바인딩할 객체
// argsArray: 함수에 전달할 argument의 배열
```

- new, bind/call/apply 등 잘 사용하지 않아서 패스

## eventListener와 document의 this

- 이벤트 리스너는 this가 바뀌는 내부적 로직이 존재한다.
- 그래서 이벤트를 등록한 DOM 요소가 this가 된다.

## Promise chaining과 this

- promise chaining이 가능한 이유는 this에 있을 것이다.

```js
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep() {
    alert(this.step);
  },
};

ladder.up().up().down().up().down().showStep(); // 1
```

## 정리

- this는 기본적으로 window이지만, 객체 메서드, bind call apply, new일 때 this가 바뀐다.
- 그리고 이벤트리스너나 기타 document라이브러리처럼 this를 내부적으로 바꿀 수도 있으니 항상 this를 확인해봐야 한다.
  ​
- 여러분이 선언한 function의 this는 항상 window라는 것 알아두자.
- (strict 모드에서는 undefined !!)
  ​
- this 값은 런타임에 결정된다
- 함수를 선언할 때 this를 사용할 수 있다.
- 다만, 함수가 호출되기 전까지 this엔 값이 할당되지 않는다. (var 호이스팅과 비슷?)
  ​
- 함수를 복사해 객체 간 전달할 수 있다.
- 함수를 객체 프로퍼티에 저장해 object.method()같이 ‘메서드’ 형태로 호출하면 this는 object를 참조한다.
  ​
- 화살표 함수는 자신만의 this를 가지지 않는다는 점에서 독특하다.
- 화살표 함수 안에서 this를 사용하면, 외부에서 this 값을 가져온다.

## References

[this 총정리](https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-this-%EC%B4%9D%EC%A0%95%EB%A6%AC)
