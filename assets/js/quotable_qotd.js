// Quote Generator from Quotable API
document.addEventListener('DOMContentLoaded', () => {
    const quoteItem = document.getElementById('quoteItem');
    const citeItem = document.getElementById('citeItem');   

    async function updateQuote() {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();

    if (response.ok) {
        quoteItem.innerHTML = data.content;
        citeItem.innerHTML = `<i>~ ${data.author}</i>`;
    }
    else {
        quote.textContent = 'Error';
    }
    }
  
    updateQuote();
});
  