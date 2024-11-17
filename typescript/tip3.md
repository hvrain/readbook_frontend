## 함수 타입 정의 팁

함수의 타입을 정의할 때 선언식과 표현식 어떤 것이 더 좋을까?

### 선언식 함수
```ts

function test1(num: number): string {
	return "1";
}
function test2(num: number): string {
	return "2"
}

```

위 코드의 test1과 test2의 함수는 타입을 parameter와 return 각가 정의하였다.
만약 아주 복잡한 형태의 타입이 적용되어 있다면 앞으로 같은 타입의 function을 정의할 때 귀찮을 것이다.

### 표현식 함수

```ts

type Type  = (num: number) => string;

const test1: Type = (num) => {
	return "1"
}
const test1: Type = (num) => {
	return "2"
}

```

위 코드는 test1과 test2의 타입이 같아 Type 타입을 재사용하여 정의하였다.
이처럼 함수 표현식을 통해 선언하면 함수의 재사용 측면에서 좋다.