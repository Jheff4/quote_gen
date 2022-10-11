// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


btn.addEventListener('click', function () {
  fetch("https://type.fit/api/quotes")
    .then(response => response.json())
    .then(reponse => {
      let randomNum = Math.floor(Math.random() * reponse.length)
      quote.innerText = reponse[randomNum].text;
      person.innerText = reponse[randomNum].author;
    })
    //   response.forEach(item => {
    //   quote.textContent = item.text;
    //   person.textContent = item.author;
    // }
    // ))
    .catch(err => console.error(err));
})
