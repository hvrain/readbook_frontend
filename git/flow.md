# git flow workflow

![git flow workflow](https://wac-cdn.atlassian.com/dam/jcr:cc0b526e-adb7-4d45-874e-9bcea9898b4a/04%20Hotfix%20branches.svg?cdnVersion=1794){: width="100" height="100"}

## git flow란?

branch를 활용한 변경 이력 관리 전략으로, 약속과 규칙과 같은 개념이다.

## 변경 이력 관리 전략

- git flow에서 사용하는 branch는 6개이다.

- main | master: release를 한 branch
- develop: 잘 동작하지만 release하지 않은 branch
- feature: 기능을 만드는 branch
- release: 버전을 배포하는 branch
- hotfix: main에 발생한 오류를 수정하는 branch
- support: 옛날 버전을 지원 branch

## feature

> git flow feature start <__branch_name__>

develop branch에서 분기하여 feature branch 생성

> git flow feature finish <__branch_name__>

develop branch에 merge하고 feature branch 삭제

> git flow feature publish <__branch_name__>

remote 환경에 게시(다른 개발자와 협업시 사용)

## release

> git flow release start <__branch_name__> [Base]

develop branch에서 분기하여 release branch 생성
[Base]를 사용하여 분기할 commit을 선택 가능

> git flow release publish <__branch_name__>

feature는 선택이라면 release는 다른 개발자의 release commit을 위해 필수

> git flow release finish <__branch_name__>

main branch에 병합
<__branch_name__>으로 tag 달기
develop branch에 병합 후 release branch 삭제

> git push --tag

release는 tag가 push되지 않기 때문에, 따로 명령어 사용

## hotfix

> git flow hotfix start <__branch_name__> [Base]

master branch에 표기된 tag로부터 분기하여 branch를 생성하며 [Base]를 통해 분기점 선택

> git flow hotfix finish

develop과 master로 병합되며, master에선 hotfix 버전으로 태그됨

### Reference

[Atlassian](https://www.atlassian.com/ko/git/tutorials/comparing-workflows/gitflow-workflow)  
[강버섯 블로그](https://velog.io/@___pepper/Git-git-flow)
