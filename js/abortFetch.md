# fetch abort 시키는 이유

- fetch시간이 너무 길어질 경우 network error를 띄우는 페이지가 많았다. = 구현할 수 있어야 한다.

## Example

```js

//// Basic fetch

//fetch('https://learn.codeit.kr/api/interviews/summer')
// .then((response) => response.json(),)
// .then((result) => console.log(result), (error) => console.log('rejected'))
// .then((result) => console.log(1), (error) => console.log(2)); 

//// timeout fetch

//Promise.race([
// fetch('https://learn.codeit.kr/api/interviews/summer'),
// new Promise((resolve, reject) => {
//  setTimeout(() => {
//   reject(new Error('시간 초과'));
//  }, 500);
// })
//]).then((response) => response.text(), (error) => {throw new Error('error')} )
//.then((result) => console.log('fulfilled'), (error) => console.log('rejected'))
//.then((result) => console.log(1), (error) => console.log(2));

//// abort controller

//let controller;
//const url = "https://learn.codeit.kr/api/interviews/summer";

//const downloadBtn = document.querySelector(".download");
//const abortBtn = document.querySelector(".abort");

//downloadBtn.addEventListener("click", fetchVideo);

//abortBtn.addEventListener("click", () => {
//  if (controller) {
//    controller.abort();
//    console.log("Download aborted");
//  }
//});

//function fetchVideo() {
//  controller = new AbortController();
//  const signal = controller.signal;
//  fetch(url, { signal })
//    .then((response) => {
//      console.log("Download complete", response);
//    })
//    .catch((err) => {
//      console.error(`Download error: ${err.message}`);
//    });
//}

//// abort controller with signal

let controller;
const url = "https://learn.codeit.kr/api/interviews/summer";

const downloadBtn = document.querySelector(".download");
const abortBtn = document.querySelector(".abort");

downloadBtn.addEventListener("click", fetchVideo);

abortBtn.addEventListener("click", () => {
  if (controller) {
    controller.abort();
  }
});

function fetchVideo() {
  controller = new AbortController();
  const signal = AbortSignal.any([
  controller.signal,
  AbortSignal.timeout(5_000),
 ]);
  fetch(url, { signal })
    .then((response) => {
      console.log("Download complete", response);
    })
    .catch((err) => {
      console.error(`Download error: ${err.message}`);
    });
}

```
