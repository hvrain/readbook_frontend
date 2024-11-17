### ReturnType

함수의 반환 타입으로 구성된 타입을 생성

```ts

declare function test(): ["a", "b"];

function test1() {
  return ["a", "b"];
}

function test2(): [string, string] {
  return ["a", "b"];
}

type T = ReturnType<typeof test>;
// T === ["a", "b"] 

type T1 = ReturnType<typeof test1>;
// T1 === string[]

type T2 = ReturnType<typeof test2>;
// T2 === [string, string];

type T3 = ReturnType<<T extends U, U extends number[]>() => T>;
// T3 = number[]

```

<br />

### ConstructorParameter

생성자 함수 타입의 타입에서 튜플 또는 배열 타입을 생성합니다. 모든 매개변수 타입을 가지는 튜플 타입(또는 Type이 함수가 아닌 경우 타입 never)을 생성합니다.

```ts

type T0 = ConstructorParameters<ErrorConstructor>;
// T0 = [message?: string | undefined]

type T1 = ConstructorParameters<FunctionConstructor>;
// T1 = string[]

type T2 = ConstructorParameters<RegExpConstructor>;
// T2 = [pattern: string | RegExp, flags?: string | undefined]

```

ConstructorParameter를 찾아본 이유는 Function이나 RegExp 같은 경우는 몰라도, Error 타입의 경우 핸들링하는 방법을 알아야 한다고 생각했다 왜냐하면 catch (error) 에서 error은 unknown 타입인데, typescript에서 unknown을 타입 가드 없이 사용하는 것은 잘못되었으므로, Error 클래스를 다룰 때 사용할 수 있지 않을까 생각한다.

잘못 생각했다. instanceof를 사용하는 방법 밖에 몰랐는데 instanceof 를 사용하면 ConstructorParameters를 사용하지 않아도 되더라.


### Parameters

함수 타입 Type의 매개변수에 사용된 타입에서 튜플 타입을 생성합니다.

```ts

function test(a: number, b: string, c: boolean) {}

type T0 = Parameters<typeof test>;

```

### NonNullable

Type에서 null과 정의되지 않은 것(undefined)을 제외하고 타입을 생성합니다.

```ts

interface Test {
  a?: string;
  b: string | null;
}

type T1 = NonNullable<Test>;
// T1 = Test

type T2 = NonNullable<Test["a"]>;
// T2 = string;

type T3 = NonNullable<Test["b"]>;
// T3 = string;

```

Required를 사용하면 되지 않을까 생각했지만, Test[\"b\"]에 대해 null이 제거되지 않아서 NonNullable을 사용해야 했다.

위 처럼 타입 객체의 각 속성을 NonNullable로 변경하려면 타입 객체를 통째로 할당하면 안되고 각 속성마다 적용해야 한다.
