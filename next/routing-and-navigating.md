# 검색어 페이지네이션을 통해 배우는 next/navigation

Next App Router에서는 next/navigation을 import하여 경로 탐색 기능을 구현한다.
안에 들어있는 useRouter, usePathname, useSearchParams는 경로 탐색 기능을 최적화하여 제공하고 있는데, Next에서는 경로 탐색 기능을 어떤 식으로 최적화 하는지 가이드를 제공하고 있다.
[How Routing and Navigation Works](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#how-routing-and-navigation-works)
본 게시글에서는 위 링크의 내용을 바탕으로 Next에서 코드를 어떻게 작성하면 좋을지 알아보는 목적으로 글을 적는다.

### 들어가기 전에

해당 게시글에서는 실제 사용방법을 다루지 않는다. 왜 그렇게 사용하는지만 요약해서 다루기 때문에 내용이 이해가지 않는다면 [Learn Next.js Chapter 11](https://nextjs.org/learn/dashboard-app/adding-search-and-pagination)에 있는 내용 전체를 천천히 읽어보는 것을 추천한다. 

### 검색 기능의 구현

우선 검색 기능을 어떻게 구현하면 좋을지 생각해보자.
React로 구현한다면 생각나는 방법은, useState를 통해 검색어를 저장하는 방법을 통해 검색 기능을 구현할 수 있을 것이다. 이 방법이 가장 간단하고 쉽게 구현할 수 있는 검색 기능이다.
그런데 기획 단계에서 다음과 같은 의견이 나왔다고 한다.

1. 검색어를 서로 다른 유저들끼리 공유할 수 있도록 하는 기능을 추가하면 좋겠다.
2. 유저가 주로 어떤 내용을 검색하는지 추적하여 분석해야할 필요가 있다.

위 기능들을 추가로 구현하는 것은 생각보다 어려울 것이다. 일단은 React에서 위의 추가기능을 구현하기 위한 조건이 뭔지 정리해보자.

1. 검색어를 공유할 수 있게 하려면, URL에 검색어를 포함시켜야 한다.
2. 페이지를 렌더링할 때, query string에서 검색어를 찾아, 해당 검색어에 알맞은 내용을 렌더링 시켜야한다.
3. 검색어를 저장하기 위해, 유저가 입력한 검색어를 서버로 전송시켜야 한다.

바로 생각할 수 있는 내용은 다음과 같다. 실제로 구현해보진 않아서, 어떤 추가적인 로직이 필요할지 알 수 없지만, 위 내용은 반드시 들어가야될 것이다. (코딩 초보여서 정확하진 않아요...)

하지만 Next에서는 URLSearchParams 통해 검색어를 저장하고, replace를 통해 링크를 이동하지만, history를 남기지 않도록 구현하는 방식을 권장하고 있다.
생각해보면 링크를 이동하면, 해당 페이지를 새로 렌더링하는 의미로 받아들일 수 있다. Next는 왜 replace를 사용하길 권장할까?

정답은 Next의 최적화된 경로 탐색 기능에 있다. Next는 hard Navigation과 Soft Navigation을 구분하여 사용하고 있다.
Hard Navigation은 말 URL 입력창에 직접 URL을 입력하는 것과 같은 동작 방식을 말한다. 이는 브라우저가 페이지 간 이동할 때 사용하는 기본 방법이다.
Soft Navigation은 Next.js에서 페이지 간 이동할 때, 경로 세그먼트가 변경된 부분만 새로 렌더링하는 것을 의미한다. 말 그대로 경로 세그먼트가 변경되지 않은 부분은 재렌더링하지 않고 보존된다.

replace는 Soft Navigation으로 동작하기 때문에, 검색어를 URL에 반영하여, 링크를 이동한다고 해도, 검색어를 사용하는 부분만 새로 렌더링될 것이다.

Soft Navigation이라는 최적화된 링크 이동 기능을 응용한 방법이 Next가 제시하는 검색 기능 구현 방법인 것이다. 페이지네이션도 마찬가지일 것이다.

다만 아직 풀리지 않은 점이 있다. 최적화 기능으로 replace 기능을 활용할 수 있다 해도, 검색어를 분석하기 위해서는 서버로 검색어를 보내는 기능을 추가로 구현해야할 필요가 있다.

하지만 걱정마라, Next에는 RSC라는 기능을 지원한다. page.tsx 파일을 RSC(React Server Component)로 구현하면 유저가 페이지를 요청하는 즉시 서버에서 컴포넌트가 실행되어, 유저가 입력한 검색어가 무엇인지 바로 알 수 있는 것이다.

이렇게 해서 Next의 기능을 최대한 활용하여, 검색 기능과 페이지네이션을 구현하는 방법에 대해 알아보았다.

이론적인 내용만 있어서 글이 어려울 수 있으나 위에 달아놓은 링크들을 추가로 읽어보면, 충분히 이해할 수 있을 것이다. 

이 내용을 이해하는 것은 분명 유용하다고 생각한다. 그러니 이 글을 보는 사람들은 해당 내용을 이해하고, 프로젝트에도 적용해보았으면 좋겠다.

### 번외

> #### Routing
> **Routing**은 URL과 페이지의 매핑 규칙을 정의하고, 어떤 페이지를 보여줄지 결정하는 과정입니다.
→ 개발자가 디렉토리 구조와 파일을 기반으로 설정합니다.

> #### Navigating
> **Navigating**은 사용자가 어떤 경로로 이동하는 동작 자체를 의미하며, 라우팅 규칙에 따라 동작합니다.
→ 사용자의 액션(클릭 등)에 의해 발생합니다.

Routing과 Navigating은 분리된 개념이지만 서로를 기반으로 동작합니다. Routing은 규칙, Navigating은 동작이라고 기억하면 좋습니다.