# git 꿀팁

## commit

### 1. --amend

### --amend는 최근에 한 commit으로 update하는 방법이다

#### commit의 양이 많아지는걸 싫어하면, 자주 사용할 수 있다

#### 최근에 commit을 덮어씌우는 거라서 데이터 유실의 가능성이 있다. **조심하자**

&nbsp;

## reflog

### reflog는 모든 commit, checkout, merge의 이력을 가지고 있다

#### reset으로 인해 잃어버린 log로 다시 돌아갈 수 있다

(ex) 나의 상황헤선 origin log로 돌아갈 수 있는 해시값이 보이질 않아서, reflog로 찾았다.

&nbsp;

## merge

### 1. --abort

### merge에 --abort 옵션을 추가하면 merge 이전 상태로 돌아갈 수 있다

#### conflict가 너무 많다면 --abort로 돌아가 conflict를 최소화한 파일 상태로 수정할 수 있게 된다

&nbsp;

## config

### 1. --get-regexp alias

### config에 저장된 모든 alias를 확인할 수 있다

#### --global, --local을 추가해 영역별로 선별이 가능하다

(ex) alias를 보고 수정하고 싶을 때 유용하다.

## pull

### 1. origin master(or main)

### 리모트 레포지토리에서 코드를 불러온다. 불러올 때 로컬 레포지토리랑 다르다면 자동으로 merge를 시도한다
