// Variables

let btn = document.querySelector('#new-quote');
let mainContainer = document.querySelector('.main-content');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

function happen() {
  mainContainer.style.backgroundColor = '#dfdede';
  const load = document.createElement("div");
  load.classList.add('loader');
  quote.appendChild(load);
}

btn.addEventListener('click', function () {
  happen();
  
  fetch("https://type.fit/api/quotes")
    .then(response => response.json() )
    .then(response => {
      mainContainer.style.backgroundColor = '#fff';
      let randomNum = Math.floor(Math.random() * response.length);
      quote.innerText = response[randomNum].text;
      person.innerText = response[randomNum].author;
    })
    //   response.forEach(item => {
    //   quote.textContent = item.text;
    //   person.textContent = item.author;
    // }
    // ))
    .catch(err => {
        mainContainer.style.backgroundColor = '#fff';
        quote.innerText = '';
        person.innerText = '';
        const message = "Connect to the internet and try again!"
        const errorMsg = document.createElement("p");
        errorMsg.style.color = 'red';
        errorMsg.innerText = message;
        quote.appendChild(errorMsg);
    });
})
