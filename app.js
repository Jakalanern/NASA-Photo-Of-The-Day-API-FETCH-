const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
let potd = $(".potd");
let head = $(".head");
let date = $(".date");
let title = $(".title");
let explanation = $(".explanation");
let hyperlink = $(".hyperlink");
let cn;
let apiKey = "WACA7lBQq6LW77SQVYu9l5HgpVC8iPjVVXsZSxd3";

fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
  .then(function (response) {
    console.log("Success! ", response);
    return response.json();
  })
  .then(function (data) {
    console.log("DATA:", data);
    potd.src = data.hdurl;
    head.innerHTML = `NASA Photo Of The Day:`;
    date.innerHTML = `${data.date}`;
    title.innerHTML = data.title;
    explanation.innerHTML = data.explanation;
    hyperlink.href = "https://apod.nasa.gov/apod";
  })
  .catch(function (err) {
    console.warn("Something went wrong ", err);
  });
