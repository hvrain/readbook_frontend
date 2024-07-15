# Presentational & Container 

## 읽기 전에

- 함수형 컴포넌트에서 Presentational & Container 대신 react Hooks를 사용하여 구현하므로 이 패턴을 사용하지 않는 것이 좋다.

## 등장한 이유

- 어플리케이션이 비대해짐에 따라 컴포넌트 간의 의존도가 높아져 코드의 재사용이 불가능해지는 문제가 생김
- react Hook이 없던 시절에 logic과 view를 분리하기 위한 방법으로 등장한 것이 Presentational & Container 이다.

## Presentational 컴포넌트

- html, css, presentational component만 사용 가능하다.
- app에 대해 완전히 몰라야한다. => 다른 app에서도 이 component를 사용할 수 있을지 스스로에게 물어보자
- presentational과 container 모두를 내부적으로 가질 수 있다.
- 작은 레고 블럭처럼 가능한 작게 만들어야 한다.
- 상태를 가질 수 있지만 UI에 관련된 상태만 가질 수 있다.
- 필요 시 visual을 바꾸는 props를 받을 수 있어야 한다.
- 가끔 완전히 다른 스타일을 불러오는 props를 받기도 한다.

## container 컴포넌트

- 어떠한 동작을 할 것인가에 대해 책임진다.
- 절대로 DOM 마크업 구조나 스타일을 가져서는 안된다.
- presentational과 container 모두를 내부적으로 가질 수 있다.
- 주로 상태를 가지고 있다.
- side effects를 만들 수 있다. ex) db에 CRUD를 요청
- props를 자유롭게 받을 수 있다.

## Presentational & Container 를 사용하면 좋은 점

1. 재사용성을 높일 수 있다.

- 로직이 포함되어 있지 않은 presentational 컴포넌트는 그저 받아온 정보를 화면에 표현할 뿐이다.
- presentational 컴포넌트가 다른 컴포넌트를 알 필요가 없다.
- 의존도가 낮아 다양한 container 컴포넌트와 조합하여 재사용할 수 있다는 장점이 있다.

2. 구조에 대한 이해가 쉬워진다.

- 기능과 UI가 명확히 분리되므로, 개발자 입장에서 코드 구조에 대한 이해가 쉬워진다.

3. 마크업 작업이 편하다.

- presentational 컴포넌트는 layout 컴포넌트로 활용하여 반복되는 마크업 작업을 줄여줄 수 있다.
