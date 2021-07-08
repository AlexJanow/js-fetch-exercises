const url = "https://jsonplaceholder.typicode.com/todos";

fetch(url).then((response) => {
  console.log(response);
  response.json().then((data) => {
    console.log(data);
  });
});
