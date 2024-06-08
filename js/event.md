# 이벤트 위임

## 이벤트가 발생되는 방법

- 브라우저는 바보다.
- 페인팅된 화면만 보고 판단할 수 없다. 태그들은 항상 부모 요소 안에 속하기 때문이다. (html을 클릭한건지, body를 클릭한건지 모른다.)
- 그래서 브라우저는 상위 태그에서 하나하나 내려가면서 이벤트를 발생시키고, 다시 올라오면서 이벤트를 발생시킨다.

## 이벤트 캡처링

- 타겟을 찾기 위해 최상위 태그에서 하위 태그로 찾아가는 과정으로, 내려가는 도중 등록된 이벤트가 있으면 동작시킨다.
- addEventListener에 true 값이 있을 경우만 실행

## 이벤트 버블링

- 타겟을 찾은 후(캡처링 과정이 끝난 후) 부모 태그로 하나씩 이동하며, 등록된 이벤트가 있으면 동작시킨다.
- addEventListener에 default 값이 false이므로 기본적으로 버블링 실행

## 이벤트 캡처링과 버블링 동작 과정

1. 사용자가 이벤트 발생
2. 이벤트가 발생한 target을 찾기 위해 html 태그부터 하위요소로 하나씩 이동
3. 하나씩 이동하며 true로 등록된 이벤트들을 모두 실행 (캡처링)
4. target에 도착
5. 이젠 하나씩 올라가며 false로 등록된 이벤트들을 모두 실행 (버블링)

## 이벤트 위임이 있는 이유

1. 브라우저는 이벤트 발생 의도를 모른다. 그래서 타겟과 연관된 모든 태그들을 둘러보며 이벤트를 발생시킨다.
2. 결과적으로 이벤트를 상위에 하나만 등록해도, 하위 태그를 제어할 수 있으니 성능적인 면에서 좋기 때문이다.

## 이벤트 동작과정 테스트 코드

```html
<style>
  .one {
    width: 2000px;
    height: 2000px;
    background-color: red;
  }
  .two {
    width: 1200px;
    height: 1200px;
    background-color: blue;
  }
  .three {
    width: 600px;
    height: 600px;
    background-color: green;
  }
</style>
<div class="one">
  <div class="two">
    <div class="three"></div>
  </div>
</div>
<script>
  const one = document.querySelector(".one");
  const two = document.querySelector(".two");
  const three = document.querySelector(".three");

  one.addEventListener(
    "click",
    () => {
      console.log("capture");
      console.log("one");
    },
    true
  );
  two.addEventListener(
    "click",
    () => {
      console.log("capture");
      console.log("two");
    },
    true
  );
  three.addEventListener(
    "click",
    () => {
      console.log("capture");
      console.log("three");
    },
    true
  );
  one.addEventListener("click", () => {
    console.log("bubble");
    console.log("one");
  });
  two.addEventListener("click", () => {
    console.log("bubble");
    console.log("two");
  });
  three.addEventListener("click", () => {
    console.log("bubble");
    console.log("three");
  });
</script>

```

[블로그 링크 참조](https://velog.io/@samkong/event)
