let apiBody = document.querySelector(".api_body");
let apiUrl = "https://icanhazdadjoke.com/";
let fetchJoke = document.getElementById("fetchJoke");

let fetchData = () => {
  let response = fetch(apiUrl, {
    headers: {
      Accept: "application/json",
    },
  })
    .then((success) => {
      return success.json();
    })
    .then((data) => {
      apiBody.innerText = data.joke;
    })
    .catch((error) => {
      apiBody.innerText = `Api is not working`;
    });
};

fetchData();

fetchJoke.addEventListener("click", fetchData);
