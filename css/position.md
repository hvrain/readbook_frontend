# position 속성들과 각각의 특징

- position 속성으로 static, relative, absolute, fixed, sticky가 있다.

## static

- position의 default 속성으로 일반적인 문서 흐름을 따름
- top, bottom, left, right, z-index 사용불가

## relatvie

- 위치 지정 요소로, static과 같이 일반적인 문서 흐름을 따름
- top, bottom등과 같은 값에 따라 오프셋 적용
- z-index가 auto가 아니면 새로운 쌓임 맥락 형성

## absolute

- 일반적인 문서 흐름에서 제외되고, 레이아웃 공간도 배정되지 않음
- relative와 같이 오프셋 적용 가능
- relative와 같이 쌓임 맥락 형성

## fixed

- absolute와 같이 문서 흐름 제외, 레이아웃 공간 미배정
- 대신 뷰포트의 초기 컨테이닝 블록을 기준으로 배치
- 항상 새로운 쌓임 맥락 형성, print하면 모든 페이지에 fixed가 보임

## sticky

- 요소를 일반적인 문서 흐름에 따라 배치하되, 가장 가까운 블록 레벨 조상을 기준으로 배치됨
- 스크롤 동작에 따라 지정 임계값(top, bottom 등으로 지정)이 넘으면 fixed처럼 화면에 고정됨

## 배치 지정 요소

- 위치 지정 요소: static을 제외한 모든 값
- 상대 위치 지정 요소: relative
- 절대 위치 지정 요소: absolute, fixed
- 끈끈한? 위치 지정 요소: sticky

그 외 아직 배우지 않은 trasform, perspective, filter에 따라 영향을 받는 position 값들이 있으므로 자세한 건 [mdn](https://developer.mozilla.org/ko/docs/Web/CSS/position) 참조
