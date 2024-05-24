
### link

- [meta tag](#meta-tag)
		- [Reference](#reference)
- [media tag](#media-tag)
- [form tag](#form-tag)
		- [Reference](#reference-1)


# meta tag

```html
<meta name="description" content="금요일에 만나는 코딩 한 스푼." />
<meta property="og:title" content="Weekly Codeit/newsletter" />
<meta
	property="og:url"
	content="https://guileless-pony-b872d3.netlify.app/newsletter"
/>
<meta property="og:type" content="website" />
<meta property="og:image" content="./thumbnail-unix.png" />
<meta
	property="og:description"
	content="금요일에 만나는 코딩 한 스푼./newsletter"
/>
```
### Reference
메타 테그의 Open Graph 기능에 도움이 되는 사이트  
[`Open Graph Protocol`](https://ogp.me/)   
[`Facebook Object Debugger`](https://developers.facebook.com/tools/debug/)

---
<br>

# media tag

```html

<video src="" autoplay muted controls width="" height=""></video>
<audio src="" autoplay muted controls width="" height=""></audio>

<div style="width: 300px;">
	<img src="" width="100"/><img src="" width="100"/><img src="" width="100"/>
</div>

<iframe src="" width="" height="">
```

* media tag를 상위 태그의 크기에 맞춰 배열하였는데 배치가 이상하게 되는 경우엔,
  media tag끼리 공백없이 붙여쓰면 크기가 딱 맞게 배치된다. (위 예시처럼)
* 그롬에서는 autoplay 하려면 muted가 반드시 같이 와야한다.

#### media tag 모두 width와 height 사용해야 한다. 왜냐하면 , 사용자 경험, 반응형 웹 구축

---

# form tag

```html

<form action="https://eoj4hoxiq77m7wb.m.pipedream.net" method="post">
	<div>
		<label for="email">이메일</label>
		<input id="email" name="email" type="email" placeholder="이메일" autocompleted="email" required />
		<label for="password">비밀번호</label>
		<input id="password" name="password" type="password" placeholder="비밀번호" autocompleted="password" required/>
	</div>
	<button type="submit">버튼</button>
</form>

```
### Reference
Request 요청을 확인할 수 있는 서버를 제공하는 사이트  
[Request Bin pipedream](https://pipedream.com/requestbin)
