# React life cycle

![life cycle 사진](https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbF6rTe%2FbtrEvNPPvFs%2FkfuXlK3dGF4bJUpKXQcjH1%2Fimg.png)

- react function components와 hook을 기준으로 생명주기 작성

## life cycle 요약

1. ReactDOM.render 함수로 컴포넌트 호출
2. 함수형 컴포넌트를 최초로 실행하며 초기화
3. 초기화된 컴포넌트를 return하여 렌더링 수행
4. DOM 노드에 참조를 위한 ref 지정
5. component mount(DOM 객체가 생성되고, 브라우저에 나타나는 단계) 발생
	- component update 발생
6. 마지막으로 unmount(컴포넌트가 DOM 객체에세 지워지는 단계) 발생

## life cycle과 react hook

1. useState는 컴포넌트 초기화, 렌더링에 영향을 준다.
2. useEffect는 mount, update, unmount에 영향을 준다.
3. useRef는 DOM 노드 참조를 위한 ref에 영향을 준다.