Typescript는 editor와 Javascript 간의 통합을 위해 타입 구문을 도입한 언어이다.

그래서 Typescript는 **타입 선언에 대한 구문이 Javascript에 추가된 언어**라고도 볼 수 있다.

그렇다면 왜 Javascript에 타입을 더한 Typescript라는 언어가 등장한 것일까?

<br/>

### Typescript의 등장 이유
<br/>

<p align="center" style="color:gray;font-weight:bold;font-size:20px">
The goal of Typescript is to be a static typechecker for Javascript programs - in other words, a tool that runs before youor code runs (static) ans ensures that the types of the program are correct (typechecked).
</p> 
<br/>

Typescript의 목표는 Javascript 프로그램의 **정적 타입체커**가 되는 것이다. 즉,정적(코드를 실행하기 전에) 타입 체크(코드의 타입이 올바른지 체크하는) 도구이다.

그래서 typescript는 **코드의 작성과 통합, 관리, 유지보수를 효율적**으로 만드는데 중점을 둔 언어이다.
<br/>

### 장점

1. 정적 타입 지정
	typescript는 정적 타입을 지정하여 코드를 만들 때 **컴파일 단계에서 변수에 값이 할당될 때마다 정적 타입 조건에 부합하는지 빠르게 확인**할 수 있다.
2. 가독성과 유지보수성 향상
	typescript는 지정된 타입이 있을 때 **코드를 읽기 쉽게 만든다.** 정적 타입을 보면 **코드의 의도가 보이게 되고, 이는 유지보수성이 향상되는 것**과 같다.
<br />

### 단점

1. 개발 시간 증가
	정적 타입 지정은 **개발 시간을 늘릴 수 있다.** 변수만 작성하는 것이 아니라 타입 또한 지정해야하기 때문이다. (그러나 대규모 개발에서는 오히려 개발 시간을 단축시킬 수 있다.)
<br/>

### 그래서 Typescript 사용해야 함??

코드 양이 적은 **단기 프로젝트와 빠른 프로토타이핑**을 시작한다면 Javascript를 사용하는게 좋다.
다만 Typescript를 알고 있다면 **본격적인 개발은 Typescript**를 사용하는게 좋다.
<br/>

### 참고자료
[타입스크립트의 기술적 분석 + 사용해본 후기](https://reveur1996.tistory.com/146)