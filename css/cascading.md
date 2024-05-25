# css cascading 순위

## 스타일 우선순위

1. [Relevance (관련성)](#relevance)
2. [Origin and importance (출처 및 중요성)](#origin-and-importance)
3. [Specity (특이성)](#specity)
4. [Scoping proximity (범위 접근성)](#scoping-proximity)
5. [Order of appearance (표시 순서)](#order-of-appearance)

## Relevance

### 미디어 유형의 관련성을 확인함 (미디어 유형에 맞지 않은 스타일은 제거되고 다음 단계로)

```css
/*user-agent css*/
li {
  margin-left: 10px;
}

/*author css 1*/
li {
  margin-left: 0;
} /* This is a reset */

/*author css 2*/
@media screen {
  li {
    margin-left: 3px;
  }
}

@media print {
  li {
    margin-left: 1px;
  }
}

@layer namedLayer {
  li {
    margin-left: 5px;
  }
}
/*user css*/
.specific {
  margin-left: 1em;
}

```

```html
<!--inline-->
<ul>
  <li class="specific">1<sup>st</sup></li>
  <li>2<sup>nd</sup></li>
</ul>

```

#### 위의 순서대로 스타일이 적혀있다면

#### 1. @media의 유형을 먼저보고 필요없는 @media를 제외한다 (@media print 제외)

#### 2. 출처와 동시에 !important를 확인한다. (user-css, user-agent-css 제외, layer 제외, !important 없음)

#### 3. 특이성이 높은 스타일을 확인한다. (같음)

#### 4. 범위가 root에 가까운지 확인한다. (scope 없음)

#### 5. 늦게 적힌 스타일을 적용한다. (@media screen 적용)

&nbsp;

## Origin and importance

### 스타일의 출처와 !importance 속성을 확인함

|order (low to high) | origin | importance|
|:-|:-|:-|
|1 | user-agent (browser) | normal|
|2 | user | normal |
|3 | author (developer) | normal |
|4 | Css @keyframe animations | |
|5 | author (developer) | !important|
|6 | user | !important |
|7| user-agent (browser) | !important |
|8| Css transitions | |

### Summary

- !important user-agent > !important user > !important author >author > user > user-agent
- **!important가 있으면 먼저 적용된 쪽의 스타일을 따른다. (layered, unlayered 각각 따로 적용)**
- **@layer끼리는 Cascading의 일반 규칙과 상관없이 뒤에 명시된 쪽을 따른다.**
- **layered와 unlayered 둘 다 !important가 있다면 layer가 높은 우선순위를 가진다**

### example

```html

<style>
 @import unlayeredStyles.css;
 @import AStyles.css layer(A);
 @import moreUnlayeredStyles.css;
 @import BStyles.css layer(B);
 @import CStyles.css layer(C);
 p {
  color: red;
  padding: 1em !important;
 }
</style>
<p style="line-height: 1.6em; text-decoration: overline !important;">Hello</p>
```

|Order (low to high)| Author style |Importance |
|:-|:-|:-|
|1| A - first layer |normal |
|2| B - second layer |normal |
|3| C - last layer |normal |
|4| All unlayered styles |normal |
|5| inline style |normal |
|6| |animations  |
|7| All unlayered styles |!important |
|8| C - last layer |!important |
|9| B - second layer |!important |
|10| A - first layer |!important |
|11| inline style |!important |
|12| |transitions  |

&nbsp;

## Specity

### selector를 비교해 우선 순위가 높은 쪽을 선택

#### selector 우선순위

- #### inline > id > class > tag

- **class selector가 백개여도 id selector 하나가 있으면 id가 우선된다.**

&nbsp;

## Scoping proximity

### 위 조건을 비교했을 때 모두 같다면, DOM 트리 계층 구조에서 @scope 범위가 root에 가장 가까운 쪽이 우선된다

&nbsp;

## Order of appearance

### 위 조건을 모두 통과하면 가장 마지막에 명시된 스타일이 우선된다

### Referrence

[cascading in MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade#user_stylesheets)
[Css Cascading and Inheritance Level 6](https://drafts.csswg.org/css-cascade-6/)
