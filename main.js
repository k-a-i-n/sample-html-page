//alert("Hello, world!");
const SEARCH_API_URL = "http://yandex.ru/search/?text=";
function search(query) {
  window.open(SEARCH_API_URL + query);
}

function sampleActions() {
  const form = document.forms[0];
  const searchButton = document.querySelector("button");
  let query = null;

  form.elements.search.oninput = function(e) {
    e.preventDefault();
    query = e.target.value;
    debugField.innerHTML = query;
  };

  searchButton.onclick = function(e) {
    e.preventDefault();
    if (query != null) {
      search(query);
    } else {
      alert("Nothing to search!");
    }
  };
}
sampleActions();
