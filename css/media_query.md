# media query 사용법

media 쿼리 사용하는 이유

- 반응형 웹 제작
- 접근성 향상
- 인쇄용 스타일시트 작성

## orientation

- orientation의 값으로 landscape, portrait이 있다.

## prefers-color-scheme

- 시스템 설정으로 대비 색상이 light, dark인지에 따라 스타일을 조정한다.

## any-hover, any-pointer

- hover의 값으로 none과 hover가 있다.
- pointer의 값으로 none, coarse, fine이 있다.
- 모바일에서 hover와 pointer가 없어서 그때 사용할 수 있다.(다 그런건 아님)

### 예제

```html
<style>
  * {
    margin: 0;
  }
  .main {
    position: relative;
    width: 100%;
    height: 100%;
  }
  .vidio {
    background-color: green;
  }
  .touch {
    display: block;
  }
  .hover {
    display: none;
  }
  h1 {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  h1:hover {
    color: red;
  }

  @media (orientation: landscape) {
    div {
      background-color: red;
    }
  }

  @media (any-hover: hover) {
    .main {
      background-color: yellow;
    }
    .touch {
      display: none;
    }
    .hover {
      display: block;
    }
  }
</style>
<div class="main">
  <div class="video"></div>
  <h1 class="touch">Device is touchscreen</h1>
  <h1 class="hover">Device is hoverable</h1>
</div>


```

### Reference

[mdn media query](https://developer.mozilla.org/ko/docs/Web/CSS/CSS_media_queries/Using_media_queries)
