# 렉시컬 스코프

## 렉시컬 스코프란?

- 함수를 어디에 **선언**하였는지에 따라, 상위 스코프가 결정되는 것을 말한다
- Js를 비롯한 많은 언어들이 Lexical Scope를 따른다.
- 동적 스코프는 함수를 어디에 **호출**하였는지에 따라, 상위 스코프가 결정되는 것을 말한다.

#### 렉시컬 스코프의 특징을 이용해 **클로저**를 구현할 수 있다.

#### 예제

```js
const outerFunc = () => {
		let x = 10; // '자유 변수' 라고 한다.

		// 클로저
		const innerFunc = (y) => {
				x = x + y;
				console.log(x);
		}

		return innerFunc;
}

const addFunc = outerFunc();
addFunc(5); // 15
addFunc(10); // 25
```

- 위 코드를 보면 innerFunc은 내부에 선언되어 있어 outerFunc의 x변수를 사용한다.
- 또 x에 y를 더한 값이 저장되기 때문에, addFunc에 인자를 전달하면, x변수를 계속 바뀔 것이다.

#### 이런 렉시컬 스코프의 특징을 활용한 클로저를 사용해 다음과 같은 상황에 유용할 수 있다.

1. 정보은닉 (접근제어)
2. 부분적용함수 (debounce, throttling 등)
3. 커링

### 주의사항

- 클로저를 사용하면 내부함수가 외부함수의 변수를 참조하기 때문에, 외부함수의 실행이 끝나도 **메모리가 해제되지 않는다.**
- 위 예제에 addFunc의 값으로 null을 전달하면 해제할 수 있다.