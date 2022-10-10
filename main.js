// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


btn.addEventListener('click', function () {
  fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(response => {
      let randomNum = Math.floor(Math.random() * response.length)
      quote.innerText = response[randomNum].text;
      person.innerText = response[randomNum].author;
    })
    //   response.forEach(item => {
    //   quote.textContent = item.text;
    //   person.textContent = item.author;
    // }
    // ))
    .catch(err => console.error(err));
})
