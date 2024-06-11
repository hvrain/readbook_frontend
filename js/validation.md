# js 유효성 검사 방법

- 이 글을 작성하는 이유는 vanillaJS로 이메일 validation 기능을 만들기 위해 고민하다가. eventTarget내의 validity 옵션을 보고, MDN의 내용을 찾게 되었다.

## eventTarget validity 객체 사용

- validation을 위한 객체로, input property의 내용에 따라 필요한 validity값을 저장하고 있다.
- checkValidity 함수는 validity내의 키값들이 모두 false일 때(유효성 검사를 통과했을 때), true를 return한다.

**confirm-password를 위한 validity는 없으므로 두 element의 value를 비교해야했다..**

### example

- email Case

```js
<input type="email" required />;

export function validEmail(target) {
  if (target.checkValidity()) {
    target.nextSibling?.remove();
    target.classList.remove("input-invalid");
  } else if (target.validity.valueMissing)
    posInvalid(target, "이메일을 입력해주세요");
  else if (target.validity.typeMismatch)
    posInvalid(target, "잘못된 이메일 형식입니다");
}
```

- password

```js
<input type="password" minlength="8" required />;

export function validPassword(target) {
  if (target.checkValidity()) {
    target.nextSibling?.remove();
    target.classList.remove("input-invalid");
  } else if (target.validity.valueMissing) {
    posInvalid(target, "비밀번호를 입력해주세요");
  } else if (target.validity.tooShort) {
    posInvalid(target, "비밀번호를 8자 이상 입력해주세요");
  }
}
```
