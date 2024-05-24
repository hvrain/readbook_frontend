## link

## 렌더링 과정 이해하기

[렌더링 과정 이해하기] (https://so-so.dev/web/browser-rendering-process/)

## 웹 성능 측정 도구

### Reference
[Google LightHouse](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=ko)  
<br>

  
## 이미지 최적화

1. width와 height 값을 명시하기  
- CLS(누적 레이아웃 변경)을 개선하는 방법
- CSS로 명시해도 된다.
  
```html
	<img src="image.png" width="200" height="200">
```
---

2. srcset을 사용하여 사용자 화면에 맞은 이미지 로드   
- 위와 같이 CLS를 개선하는데 사용자 화면에 맞게 개선할 수 있다.
- CSS의 media 쿼리를 사용해도 된다.

```html
<img
      srcset="
        images/image.png     720w,
        images/image@2x.png 1200w,
        images/image@3x.png 1920w
      "
      sizes="(min-width: 1920px) 1920px,
						(min-width: 1200px) 1200px,
						720px"
      src="images/heropy.png"
      alt="이미지"
    />
```
---
3. 차세대 형식 이미지 사용하기
- webp를 사용하면 이미지 소스의 크기를 약 절반 감소시킬 수 있다.

```html
<picture>
	<source srcset="images/image.webp" type="image/webp" />
	<source srcset="images/image.jpg" type="image/jpg" />
	<img srcset="images/image.jpg" alt="이미지" />
</picture>
```
---

4. 적절한 크기의 이미지 사용하기   
- 명시한 규격에 맞는 크기의 이미지를 사용하면 좋다.

---      
5. 이미지 cdn 사용하기   
- 이미지 cdn을 사용하면 전송받아올 이미지들의 위치가 짧으므로 속도를 향상시킬 수 있다.

---        
6. lazy loading, pre loading    
- lazy loading을 사용하면 우선적으로 보여질 이미지를 선택할 수 있다.  
- pre loading을 사용하면 첫 화면 렌더링에서 제외시킬 수 있으며, user의 선택에 따라 동적으로 로드할 수 있어 성능을 향상시킬 수 있다.  
   - lazy loading
	 ```html
		<img src="images/image.jpg" alt="이미지" loading="lazy" />
	 ```
---