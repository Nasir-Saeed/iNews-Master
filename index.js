let apiKeys = 'de06c5a9b5974788b9c9d8a21287a310';
let source = 'bbc-news';

let cardNotes = document.getElementById('cardNotes');
let xhr = new XMLHttpRequest();
xhr.open('Get', `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKeys}`, true);

xhr.onload = function () {
  if (this.status == 200) {
    let json = JSON.parse(this.responseText);
    let articles = json.articles;
    let blank = '';
    articles.forEach((element) => {
      let getNew = `<div class="card mx-2 my-2" style="width: 18rem;">
            <img src="${element['urlToImage']}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element['title']}</h5>
              <p class="card-text">${element['content']}</p>
              <a href="${element['url']}" class="btn btn-primary" target = "_blank">Read More..</a>
            </div>
          </div>`;
      blank += getNew;
    });

    cardNotes.innerHTML = blank;
  }
};
xhr.send();

// for search content:
let searchBtn = document.getElementById('search-btn');
searchBtn.addEventListener('click', function (e) {
  e.preventDefault();
  let input = document.getElementById('search').value.toLowerCase();
  let cardValue = document.getElementsByClassName('card');

  Array.from(cardValue).forEach((element, i) => {
    let cardText = element.getElementsByClassName('card-title')[0].innerText.toLowerCase();

    if (cardText.includes(input)) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  });
});
