### 외부 패키지 타입 치환하기

거의 모든 패키지가 타입스크립트를 제공해서 치환할 일은 잘 없지만, 패키지가 제공하는 타입을 수정해야 할 때가 있다.
외부 패키지가 제공하는 타입에 내가 필요한 타입이 없어 **자동 완성 기능을 사용하지 못하거나, 에러가 나기** 때문이다.

**예시)**
```ts
const toast = useSelector((state) => state.common.toast);
// common이 state에 없어서 error가 난다.
```

또 외부 라이브러리가 타입을 잘못 설정한 경우가 있을 수 있기 때문이다. 이런 이유 때문에 갑자기 잘 사용하고 있던 라이브러리의 사용을 취소할 수 없는 노릇이다.

그렇다면 어떤 해결방법이 있을까? 아래의 코드를 보자

```ts
const toast = useSelector((state: MyState) => state.common.toast);
```

위 코드처럼 매개변수의 타입을 매번 지정해서 사용할 수 있다.
그러나 **useSelector라는 함수를 사용할 때마다 타입을 정의해야하는 귀찮은 일**이 있다.
또한 다른 사람이 **useSelector를 사용할 때 state에 어떤 타입을 사용할지 모를 수도 있다.**
이런 관점때문에 다른 해결방법이 있다면 고려해보는 것이 좋을 수 있다.

```ts
export default function useTypedSelector<R>(selector: (state: MyState) => R): R {
  return useSelector(selector);
}
```

위 코드를 보면  useSelector를 useTypedSelector라는 제네릭 함수로 감싸서 구현했는데, 이러면 **state의 타입을 매번 정의하지 않아도 괜찮다.** 다만 팀원들은 useTypedSelector를 사용하도록 **규칙을 정할 필요가 있을 것이다.**

내가 생각하기에 가장 좋은 해결책은 declare module을 통해 기본 타입을 확장하는 것 같다.

```ts
interface DefaultMyState {
  common: { ... };
}
declare module "react-redux" {
  interface DefaultRootState extends DefaultMyState {}
}

```

위처럼 DefaultRootState라는 외부 라이브러리의 기본 타입에 DefaultMyState이라는 커스텀 타입을 확장한다.
이젠 **useSelector를 사용할 때 어떤 규칙도 없이 편하게 사용할 수 있다.**

```ts
const toast = useSelector(state => state.common.toast);
```

지금까지 카카오엔터에 올라온 글이다.
이걸 왜 작성했나면 다음과 같은 상황에서 자동 완성이 되지 않았기 때문이다.

```ts
export const Header = styled.header`
	...
  color: ${({ theme }) => theme.colors.secondary200};
	...
`
```

위 코드에 theme은 ThemeProvider의 theme prop의 값인데, context api를 통해 내려온 값이다.
하지만 ThemeProvider에 theme은 DefaultTheme이라는 타입으로 정의되었는데, 내가 사용할 theme에는 추가한 타입 정의가 되지 않은 상태였다.
그래서 나는 카카오 블로그 글을 보고 나는 다음과 같이 해결했다.

```ts
// 
const theme = {
  fonts,
  colors,
  media,
} as const;

type ThemeType = typeof theme;
```

```ts
import 'styled-components' 
import { ThemeType } from 'src/theme'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
```

이젠 styled-components의 기본 타입인 DefaultTheme에 ThemeType이라는 커스텀 타입을 확장한 것이다.
이로써 theme을 사용할 때, 자동 완성 기능을 사용할 수 있었다.