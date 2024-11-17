

[TS와 JS 동작 과정](https://velog.velcdn.com/images%2Fggob_2%2Fpost%2Fbe680c2c-123b-473a-9cf0-4906ca18fb58%2FTSC.png)

Typescript의 동작 과정은 **TSC가 수행**하고, Javascript 동작 과정은 **브라우저, NodeJS 같은 자바스크립트 엔진 등이 수행**한다.

Typescript Compile 단계에서 **Typescipt AST 코드를 읽고 Type checker를 통해 맞는지 확인**한다. 

개발자가 입력한 타입 정의는 런타임에서 실행할 때 어떠한 영향도 주지 않는다. **단지 타입을 확인하는 용도**다.
