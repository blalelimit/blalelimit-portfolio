// Quote Of The Day Generator 
const quoteBox = document.getElementById('quoteBox');

if (quoteBox) {
  quoteBox.addEventListener('load', getQuote());
}

async function getQuotesList() {
  const response = await fetch('./assets/quotes.txt');  // Fetch response from textfile
  const r_quotes = (await response.text()).split('\n');
  return r_quotes;
}

async function getQuote() {
  const quotes = await getQuotesList();

  const timestamp = new Date().getTime(); // Get current timestamp
  let today = new Date(timestamp).toDateString();
  var rd = new Math.seedrandom(today); // Use date string as seed for rng

  let val = Math.floor(rd() * quotes.length);
  let qotd = quotes[val];  // Get qotd based on index for random number
  quoteBox.innerHTML = qotd;
};