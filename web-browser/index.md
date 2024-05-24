## link

## 렌더링 과정 이해하기

[렌더링 과정 이해하기] (https://so-so.dev/web/browser-rendering-process/)

## 웹 성능 측정 도구

### Reference
[Google LightHouse](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk?hl=ko)  
<br>



## 이미지 최적화

1. width와 height 값을 명시하기  
  
```html
	<img src="image.png" width="200" height="200">
```
---

2. srcset을 사용하여 사용자 화면에 맞은 이미지 로드   
  
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

```html
<picture>
	<source srcset="images/image.webp" type="image/webp" />
	<source srcset="images/image.jpg" type="image/jpg" />
	<img srcset="images/image.jpg" alt="이미지" />
</picture>
```
---

4. 적절한 크기의 이미지 사용하기   

---      
5. 이미지 cdn 사용하기   

---      
6. lazy loading, pre loading   
   - lazy loading
	 ```html
		<img src="images/image.jpg" alt="이미지" loading="lazy" />
	 ```
---