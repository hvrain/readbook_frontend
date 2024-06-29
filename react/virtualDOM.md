# virtual DOM

## virtual DOM 이란?

- 실제 DOM이 아닌 가상적인 DOM을 조작하는 방식
- 가상의 DOM에서 원래 DOM과 달라진 부분을 체크하여 리렌더링하는 방식 (diffing algorithm)

## virtual DOM와 React

- React는 virtual DOM을 사용하는 대표적인 라이브러리이다.
- React는 JSX를 통한 선언적 방식을 사용하는데, 이를 가능하게 하는데 virtual DOM이 필요하다.

## virtual DOM의 장점

- virtual DOM가 객체를 통해 동작하는데, 이는 다른 플랫폼에서도 동작할 수 있게 한다. (React Native를 통한 모바일 지원)
- virtual DOM을 통해 JSX를 읽을 수 있으므로, 선언적 개발 방식이 가능하고, 컴포넌트 단위로 개발 가능하다.

## virtual DOM의 단점

- 상태변화가 있는 컴포넌트의 하위 컴포넌트도 다 다시 그리기 때문에, vanillaJS보다 속도가 느릴 수 있다.
- virtual DOM을 저장할 메모리가 추가적으로 필요하다.

### Ref

[virtual DOM 기본 동작](https://velog.io/@dongjun187/React-Virtual-DOM-%EA%B8%B0%EC%B4%88-%EB%8F%99%EC%9E%91-%EC%9B%90%EB%A6%AC)
[React의 흔한 오해](https://velog.io/@woohm402/virtual-dom-and-react#react-%EB%8F%84-%EB%B9%A0%EB%A5%B4%EC%A7%80-%EC%95%8A%EC%8A%B5%EB%8B%88%EB%8B%A4)