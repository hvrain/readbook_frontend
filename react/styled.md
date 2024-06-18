```js
function example(texts, ...fns) {
  const props = {
    title: "어렵다.",
    body: "어려워용",
  };
  console.log(texts);
  return texts.reduce((result, text, i) => {
    console.log(i, result);
    return `${result}${text}${fns[i] ? fns[i](props) : ""}`;
  }, "");
}

//호출 쪽
const ret = example`
	title!: ${(props) => props.title}
	content!: ${(props) => props.body}
`;

console.log(ret);
```
