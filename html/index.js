const toDoList = document.querySelector('#to-do-list');
const items = toDoList.children;

function sleep(ms) {
  const wakeUpTime = Date.now() + ms;
  while (Date.now() < wakeUpTime) {}
}

// 1. updateToDo 함수를 완성해 주세요
function updateToDo(event) {
  console.log(JSON.stringify(event.target.classList)); // 객체 복제
  event.target.classList.toggle('done');
	sleep(3000);
  console.log(JSON.stringify(event.target)); // 객체 복제
  
}
// 2. 반복문을 활용해서 각 li태그에 이벤트 핸들러를 등록해 주세요
for (let item of items) {
  item.addEventListener('click', updateToDo);
}
// toDoList.addEventListener('click', updateToDo)

// 테스트 코드
items[2].addEventListener('click', updateToDo);
