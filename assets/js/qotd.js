// Quote Of The Day Generator 
const quoteItem = document.getElementById('quoteItem');
const citeItem = document.getElementById('citeItem');

if (quoteItem != null) {
  quoteItem.addEventListener('load', getQuote());
}

async function getQuotesList() {
  const response = await fetch('./assets/quotes.txt');  // Fetch response from textfile
  const quotesList = (await response.text()).split('\n');
  return quotesList;
}

async function getQuote() {
  const quotesList = await getQuotesList();

  const timestamp = new Date().getTime(); // Get current timestamp
  let today = new Date(timestamp).toDateString();
  var rd = new Math.seedrandom(today); // Use date string as seed for rng

  let val = Math.floor(rd() * quotesList.length);
  let quoteOfTheDay = quotesList[val].split('~');  // Get qotd based on index for random number

  const quote = quoteOfTheDay[0].trim();
  const citation = quoteOfTheDay[1].trim();

  quoteItem.innerHTML = quote;
  citeItem.innerHTML = `<i>~ ${citation}</i>`;
};