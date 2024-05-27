# git 꿀팁

## reflog

### reflog는 모든 commit, checkout, merge의 이력을 가지고 있다

#### 1. reset으로 인해 잃어버린 log로 다시 돌아갈 수 있다

(ex) 나의 상황헤선 origin log로 돌아갈 수 있는 해시값이 보이질 않아서, reflog로 찾았다.

## merge --abort

### merge에 --abort 옵션을 추가하면 merge 이전 상태로 돌아갈 수 있다

#### 1. conflict가 너무 많다면 --abort로 돌아가 conflict를 최소화한 파일 상태로 수정할 수 있게 된다
