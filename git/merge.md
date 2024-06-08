# branch merge를 위한 다양한 방법들

## fast-forward

![fast-forword](https://wikidocs.net/images/page/153693/05.03.02.jpg)

> git checkout master  
> git merge --ff dev1

- master과 dev1 branch가 가리키는 각각의 commit 위치가 같은 선상에 위치할 때 merge하는 방법
- master이 가리키는 commit을 dev1가 가리키는 commit으로 이동만 한다.

## 3-way merge

![3-way merge](https://wikidocs.net/images/page/153693/05.03.04.jpg)

> git checkout master  
> git merge --no-ff dev1

- fast-forward와 달리 master과 dev1가 다른 선상에 위치할 때 merge하는 방법
- 2개의 분리된 commit을 병합할 땐 분기점인 base를 기준으로 merge한다.

## squash

![squash](https://wikidocs.net/images/page/153871/05.04.06.jpg)

> git checkout master  
> git merge --squash dev1

- 짓 뭉개다는 뜻으로 dev1의 commit을 master의 commit에 우겨넣는다.
- 그 과정에서 dev1의 commit 이력이 사라진다.(branch와 commit의 개수를 줄이고 싶다면 squash를 추천한다.)

## rebase

![before_rebase](https://wikidocs.net/images/page/153961/05.05.09.jpg)
![after_rebase](https://wikidocs.net/images/page/153961/05.05.10.jpg)

> git checkout issue2  
> git rebase issue1

- branch를 줄이되 commit 이력을 남기고 싶을 때 사용하는 방법
- base를 조정할 branch로 이동하여 rebase를 진행해야 한다.(현재 위치의 branch가 다른 branch의 뒤에 붙게 된다.)

## cherry-pick

![cherry-pick](https://wikidocs.net/images/page/154072/05.06.07.jpg)

> git checkout dev2  
> git cherry-pick ad026cf

- 원하는 커밋을 merge하는 방법
- branch가 가리키는 commit 외에도 merge가 필요할 때 사용한다.

### Referrence

[wikidocs](https://wikidocs.net/153672)
