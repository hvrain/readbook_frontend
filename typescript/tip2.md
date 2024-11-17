### 함수의 타입 정의 팁

예제 코드부터 보자

<br />


```ts
type ItemOptions = {
	id: number;
	name: string;
	description: string;
	favoriteCount: number;
}

type Person = {
	id: number;
	name: string;
}

function getPerson(id: number): Person {
  const result: Person = {id: 1, name: 'test'}; // it's just test code.
  return result;
};

function findPerson({id}: ItemOptions) {
    const { name } = getPerson(id);
    return { name }
}

```


위 코드은 ItemOptions의 id를 사용하여 아이템과 관련된 사람의 name만 가져오는 함수이다.

이 코드가 가진 문제는 2가지다.

1. 파라미터로 id만 전달했지만 타입 정의는 ItemOptions를 사용했다.
2. return 타입으로 name만 반환했다.

1번의 경우 id만 필요한데 타입이 ItemOptions로 되어있다. 이 함수를 사용할 경우 id만 전달하면 되는 것이 아니라 ItemOptions를 만족하는 argument를 전달해야 할 것이다.
2번의 경우 함수 내부 동작을 보면 name은 Person에서 비롯된 걸 알 수 있다. 하지만 return 값은 {name: string} 타입으로 추론되어 나와 함수 사용자를 헷갈리게 할 것이다.
위 코드의 findPerson 함수는 다음과 같이 작성하는게 좋다.

```ts
function findPerson({id}: Pick<ItemOptions, 'id'>): Pick<Person,"name"> {
    const {name} = getPerson(id);
    return {name};
}
```

위 코드처럼 작성하면 ItemOptions의 id 타입이 바뀌고, Person의 name 타입이 바뀌었을 때 오류를 알 수 있다.